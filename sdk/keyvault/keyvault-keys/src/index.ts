// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/* eslint @typescript-eslint/member-ordering: 0 */

import {
  getDefaultUserAgentValue,
  TokenCredential,
  isTokenCredential,
  RequestPolicyFactory,
  deserializationPolicy,
  signingPolicy,
  exponentialRetryPolicy,
  redirectPolicy,
  systemErrorRetryPolicy,
  generateClientRequestIdPolicy,
  proxyPolicy,
  throttlingRetryPolicy,
  getDefaultProxySettings,
  isNode,
  userAgentPolicy,
  RequestOptionsBase,
  tracingPolicy
} from "@azure/core-http";

import { getTracer, Span } from "@azure/core-tracing";

import "@azure/core-paging";
import { PageSettings, PagedAsyncIterableIterator } from "@azure/core-paging";

import { TelemetryOptions, ProxyOptions, RetryOptions } from "./core";
import {
  KeyBundle,
  JsonWebKeyType,
  JsonWebKey,
  JsonWebKeyEncryptionAlgorithm,
  JsonWebKeyOperation,
  JsonWebKeyCurveName,
  KeyItem,
  DeletionRecoveryLevel,
  KeyVaultClientGetKeysOptionalParams,
  CreateKeyResponse,
  ImportKeyResponse,
  DeleteKeyResponse,
  UpdateKeyResponse,
  GetKeyResponse,
  GetDeletedKeyResponse,
  RecoverDeletedKeyResponse,
  BackupKeyResponse,
  RestoreKeyResponse
} from "./core/models";
import { KeyVaultClient } from "./core/keyVaultClient";
import { RetryConstants, SDK_VERSION } from "./core/utils/constants";
import { challengeBasedAuthenticationPolicy } from "./core/challengeBasedAuthenticationPolicy";

import {
  NewPipelineOptions,
  isNewPipelineOptions,
  Pipeline,
  ParsedKeyVaultEntityIdentifier
} from "./core/keyVaultBase";
import {
  Key,
  DeletedKey,
  CreateKeyOptions,
  CreateEcKeyOptions,
  CreateRsaKeyOptions,
  ImportKeyOptions,
  UpdateKeyOptions,
  GetKeyOptions,
  ListKeysOptions,
  KeyProperties,
  RequestOptions
} from "./keysModels";
import { parseKeyvaultIdentifier as parseKeyvaultEntityIdentifier } from "./core/utils";

import {
  CryptographyClient,
  EncryptOptions,
  DecryptOptions,
  KeyWrapAlgorithm,
  EncryptResult,
  DecryptResult,
  SignResult,
  VerifyResult,
  WrapResult,
  UnwrapResult
} from "./cryptographyClient";

export {
  CreateEcKeyOptions,
  CreateRsaKeyOptions,
  CreateKeyOptions,
  CryptographyClient,
  DeletedKey,
  DeletionRecoveryLevel,
  DecryptOptions,
  DecryptResult,
  EncryptOptions,
  EncryptResult,
  GetKeyOptions,
  ListKeysOptions as GetKeysOptions,
  ImportKeyOptions,
  JsonWebKey,
  JsonWebKeyCurveName,
  JsonWebKeyEncryptionAlgorithm,
  JsonWebKeyOperation,
  JsonWebKeyType,
  Key,
  KeyProperties,
  KeyWrapAlgorithm,
  NewPipelineOptions,
  PageSettings,
  PagedAsyncIterableIterator,
  ParsedKeyVaultEntityIdentifier,
  RequestOptions,
  SignResult,
  UnwrapResult,
  UpdateKeyOptions,
  VerifyResult,
  WrapResult
};

export { ProxyOptions, TelemetryOptions, RetryOptions };

// This is part of constructing the autogenerated client. In the future, it should not
// be required. See also: https://github.com/Azure/azure-sdk-for-js/issues/5508
const SERVICE_API_VERSION = "7.0";

/**
 * The client to interact with the KeyVault keys functionality
 */
export class KeyClient {
  /**
   * A static method used to create a new Pipeline object with the provided Credential.
   *
   * @static
   * @param {TokenCredential} The credential to use for API requests.
   * @param {NewPipelineOptions} [pipelineOptions] Optional. Options.
   * @memberof KeyClient
   */
  public static getDefaultPipeline(
    credential: TokenCredential,
    pipelineOptions: NewPipelineOptions = {}
  ): Pipeline {
    // Order is important. Closer to the API at the top & closer to the network at the bottom.
    // The credential's policy factory must appear close to the wire so it can sign any
    // changes made by other factories (like UniqueRequestIDPolicyFactory)
    const retryOptions = pipelineOptions.retryOptions || {};

    const userAgentString: string = KeyClient.getUserAgentString(pipelineOptions.telemetry);

    let requestPolicyFactories: RequestPolicyFactory[] = [];
    if (isNode) {
      requestPolicyFactories.push(
        proxyPolicy(getDefaultProxySettings((pipelineOptions.proxyOptions || {}).proxySettings))
      );
    }
    requestPolicyFactories = requestPolicyFactories.concat([
      tracingPolicy(),
      userAgentPolicy({ value: userAgentString }),
      generateClientRequestIdPolicy(),
      deserializationPolicy(), // Default deserializationPolicy is provided by protocol layer
      throttlingRetryPolicy(),
      systemErrorRetryPolicy(),
      exponentialRetryPolicy(
        retryOptions.retryCount,
        retryOptions.retryIntervalInMS,
        RetryConstants.MIN_RETRY_INTERVAL_MS, // Minimum retry interval to prevent frequent retries
        retryOptions.maxRetryDelayInMs
      ),
      redirectPolicy(),
      isTokenCredential(credential)
        ? challengeBasedAuthenticationPolicy(credential)
        : signingPolicy(credential)
    ]);

    return {
      httpClient: pipelineOptions.HTTPClient,
      httpPipelineLogger: pipelineOptions.logger,
      requestPolicyFactories
    };
  }

  /**
   * The base URL to the vault
   */
  public readonly vaultEndpoint: string;

  /**
   * The options to create the connection to the service
   */
  public readonly pipeline: Pipeline;

  /**
   * The authentication credentials
   */
  protected readonly credential: TokenCredential;
  private readonly client: KeyVaultClient;

  /**
   * Creates an instance of KeyClient.
   *
   * Example usage:
   * ```ts
   * import { KeyClient } from "@azure/keyvault-keys";
   * import { DefaultAzureCredential } from "@azure/identity";
   *
   * let url = `https://<MY KEYVAULT HERE>.vault.azure.net`;
   * let credentials = new DefaultAzureCredential();
   *
   * let client = new KeyClient(url, credentials);
   * ```
   * @param {string} endPoint the base url to the key vault.
   * @param {TokenCredential} The credential to use for API requests.
   * @param {(Pipeline | NewPipelineOptions)} [pipelineOrOptions={}] Optional. A Pipeline, or options to create a default Pipeline instance.
   *                                                                 Omitting this parameter to create the default Pipeline instance.
   * @memberof KeyClient
   */
  constructor(
    endPoint: string,
    credential: TokenCredential,
    pipelineOrOptions: Pipeline | NewPipelineOptions = {}
  ) {
    this.vaultEndpoint = endPoint;
    this.credential = credential;
    if (isNewPipelineOptions(pipelineOrOptions)) {
      this.pipeline = KeyClient.getDefaultPipeline(credential, pipelineOrOptions);
    } else {
      this.pipeline = pipelineOrOptions;
    }

    this.pipeline.requestPolicyFactories;

    this.client = new KeyVaultClient(credential, SERVICE_API_VERSION, this.pipeline);
  }

  private static getUserAgentString(telemetry?: TelemetryOptions): string {
    const userAgentInfo: string[] = [];
    if (telemetry) {
      if (userAgentInfo.indexOf(telemetry.value) === -1) {
        userAgentInfo.push(telemetry.value);
      }
    }
    const libInfo = `azsdk-js-keyvault-keys/${SDK_VERSION}`;
    if (userAgentInfo.indexOf(libInfo) === -1) {
      userAgentInfo.push(libInfo);
    }
    const defaultUserAgentInfo = getDefaultUserAgentValue();
    if (userAgentInfo.indexOf(defaultUserAgentInfo) === -1) {
      userAgentInfo.push(defaultUserAgentInfo);
    }
    return userAgentInfo.join(" ");
  }

  // TODO: do we want Aborter as well?

  /**
   * The create key operation can be used to create any key type in Azure Key Vault. If the named key
   * already exists, Azure Key Vault creates a new version of the key. It requires the keys/create
   * permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * // Create an elliptic-curve key:
   * let result = await client.createKey("MyKey", "EC");
   * ```
   * @summary Creates a new key, stores it, then returns key parameters and properties to the client.
   * @param name The name of the key.
   * @param keyType The type of the key.
   * @param [options] The optional parameters
   */
  public async createKey(
    name: string,
    keyType: JsonWebKeyType,
    options?: CreateKeyOptions
  ): Promise<Key> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expires
      };
      const unflattenedOptions = {
        ...options,
        ...(options.requestOptions ? options.requestOptions : {}),
        keyAttributes: unflattenedProperties
      };

      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expires;
      delete unflattenedOptions.requestOptions;

      const span = this.createSpan("createKey", unflattenedOptions);

      let response: CreateKeyResponse;

      try {
        response = await this.client.createKey(
          this.vaultEndpoint,
          name,
          keyType,
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }
      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.createKey(this.vaultEndpoint, name, keyType, options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The createEcKey method creates a new eliptic curve key in Azure Key Vault. If the named key
   * already exists, Azure Key Vault creates a new version of the key. It requires the keys/create
   * permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let result = await client.createEcKey("MyKey", { curve: "P-256" });
   * ```
   * @summary Creates a new key, stores it, then returns key parameters and properties to the client.
   * @param name The name of the key.
   * @param keyType The type of the key.
   * @param [options] The optional parameters
   */
  public async createEcKey(name: string, options?: CreateEcKeyOptions): Promise<Key> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expires
      };
      const unflattenedOptions = {
        ...options,
        ...(options.requestOptions ? options.requestOptions : {}),
        keyAttributes: unflattenedProperties
      };

      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expires;
      delete unflattenedOptions.requestOptions;

      const span = this.createSpan("createEcKey", unflattenedOptions);

      let response: CreateKeyResponse;
      try {
        response = await this.client.createKey(
          this.vaultEndpoint,
          name,
          options.hsm ? "EC-HSM" : "EC",
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.createKey(this.vaultEndpoint, name, "EC", options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The createRSAKey method creates a new RSA key in Azure Key Vault. If the named key
   * already exists, Azure Key Vault creates a new version of the key. It requires the keys/create
   * permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let result = await client.createRsaKey("MyKey", { keySize: 2048 });
   * ```
   * @summary Creates a new key, stores it, then returns key parameters and properties to the client.
   * @param name The name of the key.
   * @param keyType The type of the key.
   * @param [options] The optional parameters
   */
  public async createRsaKey(name: string, options?: CreateRsaKeyOptions): Promise<Key> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expires
      };
      const unflattenedOptions = {
        ...options,
        ...(options.requestOptions ? options.requestOptions : {}),
        keyAttributes: unflattenedProperties
      };

      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expires;
      delete unflattenedOptions.requestOptions;

      const span = this.createSpan("createRsaKey", unflattenedOptions);

      let response: CreateKeyResponse;
      try {
        response = await this.client.createKey(
          this.vaultEndpoint,
          name,
          options.hsm ? "RSA-HSM" : "RSA",
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.createKey(this.vaultEndpoint, name, "RSA", options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The import key operation may be used to import any key type into an Azure Key Vault. If the
   * named key already exists, Azure Key Vault creates a new version of the key. This operation
   * requires the keys/import permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * // Key contents in myKeyContents
   * let result = await client.importKey("MyKey", myKeyContents);
   * ```
   * @summary Imports an externally created key, stores it, and returns key parameters and properties
   * to the client.
   * @param name Name for the imported key.
   * @param key The Json web key
   * @param [options] The optional parameters
   */
  public async importKey(name: string, key: JsonWebKey, options: ImportKeyOptions): Promise<Key> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expires,
        hsm: options.hardwareProtected
      };

      const unflattenedOptions = {
        ...options,
        ...(options.requestOptions ? options.requestOptions : {}),
        keyAttributes: unflattenedProperties
      };
      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expires;
      delete unflattenedOptions.requestOptions;
      delete unflattenedOptions.hardwareProtected;

      const span = this.createSpan("importKey", unflattenedOptions);

      let response: ImportKeyResponse;
      try {
        response = await this.client.importKey(
          this.vaultEndpoint,
          name,
          key,
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.importKey(this.vaultEndpoint, name, key, options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The delete operation applies to any key stored in Azure Key Vault. Individual versions
   * of a key can not be deleted, only all versions of a given key at once.
   * This operation requires the keys/delete permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let result = await client.deleteKey("MyKey");
   * ```
   * @summary Deletes a key from a specified key vault.
   * @param vaultEndpoint The vault name, for example https://myvault.vault.azure.net.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async deleteKey(name: string, options?: RequestOptions): Promise<DeletedKey> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("deleteKey", requestOptions);

    let response: DeleteKeyResponse;
    try {
      response = await this.client.deleteKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  /**
   * The updateKey method changes specified properties of an existing stored key. Properties that
   * are not specified in the request are left unchanged. The value of a key itself cannot be
   * changed. This operation requires the keys/set permission.
   *
   * Example usage:
   * ```ts
   * let keyName = "MyKey";
   * let client = new KeyClient(url, credentials);
   * let key = await client.getKey(keyName);
   * let result = await client.updateKey(keyName, key.version, { enabled: false });
   * ```
   * @summary Updates the properties associated with a specified key in a given key vault.
   * @param name The name of the key.
   * @param keyVersion The version of the key.
   * @param [options] The optional parameters
   */
  public async updateKey(
    name: string,
    keyVersion: string,
    options?: UpdateKeyOptions
  ): Promise<Key> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expires
      };
      const unflattenedOptions = {
        ...options,
        ...(options.requestOptions ? options.requestOptions : {}),
        keyAttributes: unflattenedProperties
      };
      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expires;
      delete unflattenedOptions.requestOptions;

      const span = this.createSpan("updateKey", unflattenedOptions);

      let response: UpdateKeyResponse;

      try {
        response = await this.client.updateKey(
          this.vaultEndpoint,
          name,
          keyVersion,
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.updateKey(this.vaultEndpoint, name, keyVersion, options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The get method gets a specified key and is applicable to any key stored in Azure Key Vault.
   * This operation requires the keys/get permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let key = await client.getKey("MyKey");
   * ```
   * @summary Get a specified key from a given key vault.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async getKey(name: string, options?: GetKeyOptions): Promise<Key> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("getKey", requestOptions);

    let response: GetKeyResponse;
    try {
      response = await this.client.getKey(
        this.vaultEndpoint,
        name,
        options && options.version ? options.version : "",
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  /**
   * The getDeletedKey method returns the specified deleted key along with its properties.
   * This operation requires the keys/get permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let key = await client.getDeletedKey("MyDeletedKey");
   * ```
   * @summary Gets the specified deleted key.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async getDeletedKey(name: string, options?: RequestOptions): Promise<DeletedKey> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("getDeletedKey", requestOptions);

    let response: GetDeletedKeyResponse;
    try {
      response = await this.client.getDeletedKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  /**
   * The purge deleted key operation removes the key permanently, without the possibility of
   * recovery. This operation can only be enabled on a soft-delete enabled vault. This operation
   * requires the keys/purge permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * await client.deleteKey("MyKey");
   * // ...
   * await client.purgeDeletedKey("MyKey");
   * ```
   * @summary Permanently deletes the specified key.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async purgeDeletedKey(name: string, options?: RequestOptions): Promise<void> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("purgeDeletedKey", requestOptions);

    try {
      await this.client.purgeDeletedKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }
  }

  /**
   * Recovers the deleted key in the specified vault. This operation can only be performed on a
   * soft-delete enabled vault. This operation requires the keys/recover permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * await client.deleteKey("MyKey");
   * // ...
   * await client.recoverDeletedKey("MyKey");
   * ```
   * @summary Recovers the deleted key to the latest version.
   * @param name The name of the deleted key.
   * @param [options] The optional parameters
   */
  public async recoverDeletedKey(name: string, options?: RequestOptions): Promise<Key> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("recoverDeletedKey", requestOptions);

    let response: RecoverDeletedKeyResponse;
    try {
      response = await this.client.recoverDeletedKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  /**
   * Requests that a backup of the specified key be downloaded to the client. All versions of the
   * key will be downloaded. This operation requires the keys/backup permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let backupContents = await client.backupKey("MyKey");
   * ```
   * @summary Backs up the specified key.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async backupKey(name: string, options?: RequestOptions): Promise<Uint8Array | undefined> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("backupKey", requestOptions);

    let response: BackupKeyResponse;
    try {
      response = await this.client.backupKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return response.value;
  }

  /**
   * Restores a backed up key, and all its versions, to a vault. This operation requires the
   * keys/restore permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let backupContents = await client.backupKey("MyKey");
   * // ...
   * let key = await client.restoreKeyBackup(backupContents);
   * ```
   * @summary Restores a backed up key to a vault.
   * @param backup The backup blob associated with a key bundle.
   * @param [options] The optional parameters
   */
  public async restoreKeyBackup(backup: Uint8Array, options?: RequestOptions): Promise<Key> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("restoreKeyBackup", requestOptions);

    let response: RestoreKeyResponse;
    try {
      response = await this.client.restoreKey(
        this.vaultEndpoint,
        backup,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  private async *listKeyVersionsPage(
    name: string,
    continuationState: PageSettings,
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties[]> {
    if (continuationState.continuationToken == null) {
      const optionsComplete: KeyVaultClientGetKeysOptionalParams = {
        maxresults: continuationState.maxPageSize,
        ...(options && options.requestOptions ? options.requestOptions : {})
      };
      const currentSetResponse = await this.client.getKeyVersions(
        this.vaultEndpoint,
        name,
        optionsComplete
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      }
    }
    while (continuationState.continuationToken) {
      const currentSetResponse = await this.client.getKeyVersions(
        continuationState.continuationToken,
        name,
        options
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      } else {
        break;
      }
    }
  }

  private async *listKeyVersionsAll(
    name: string,
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties> {
    const f = {};

    for await (const page of this.listKeyVersionsPage(name, f, options)) {
      for (const item of page) {
        yield item;
      }
    }
  }

  /**
   * Iterates all versions of the given key in the vault. The full key identifier, properties, and tags are provided
   * in the response. This operation requires the keys/list permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * for await (const keyAttr of client.listKeyVersions("MyKey")) {
   *   const key = await client.getKey(keyAttr.name);
   *   console.log("key version: ", key);
   * }
   * ```
   * @param name Name of the key to fetch versions for
   * @param [options] The optional parameters
   */
  public listKeyVersions(
    name: string,
    options: ListKeysOptions = {}
  ): PagedAsyncIterableIterator<KeyProperties, KeyProperties[]> {
    const span = this.createSpan("listKeyVersions", options.requestOptions);
    const updatedOptions: ListKeysOptions = {
      ...options,
      requestOptions: this.setParentSpan(span, options.requestOptions)
    };

    const iter = this.listKeyVersionsAll(name, updatedOptions);

    span.end();
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings: PageSettings = {}) =>
        this.listKeyVersionsPage(name, settings, updatedOptions)
    };
  }

  private async *listKeysPage(
    continuationState: PageSettings,
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties[]> {
    if (continuationState.continuationToken == null) {
      const optionsComplete: KeyVaultClientGetKeysOptionalParams = {
        maxresults: continuationState.maxPageSize,
        ...(options && options.requestOptions ? options.requestOptions : {})
      };
      const currentSetResponse = await this.client.getKeys(this.vaultEndpoint, optionsComplete);
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      }
    }
    while (continuationState.continuationToken) {
      const currentSetResponse = await this.client.getKeys(
        continuationState.continuationToken,
        options
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      } else {
        break;
      }
    }
  }

  private async *listKeysAll(options?: ListKeysOptions): AsyncIterableIterator<KeyProperties> {
    const f = {};

    for await (const page of this.listKeysPage(f, options)) {
      for (const item of page) {
        yield item;
      }
    }
  }

  /**
   * Iterates the latest version of all keys in the vault.  The full key identifier and properties are provided
   * in the response. No values are returned for the keys. This operations requires the keys/list permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * for await (const keyAttr of client.listKeys()) {
   *   const key = await client.getKey(keyAttr.name);
   *   console.log("key: ", key);
   * }
   * ```
   * @summary List all keys in the vault
   * @param [options] The optional parameters
   */
  public listKeys(
    options: ListKeysOptions = {}
  ): PagedAsyncIterableIterator<KeyProperties, KeyProperties[]> {
    const span = this.createSpan("listKeys", options.requestOptions);
    const updatedOptions: ListKeysOptions = {
      ...options,
      requestOptions: this.setParentSpan(span, options.requestOptions)
    };

    const iter = this.listKeysAll(updatedOptions);

    span.end();
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings: PageSettings = {}) => this.listKeysPage(settings, updatedOptions)
    };
  }

  private async *listDeletedKeysPage(
    continuationState: PageSettings,
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties[]> {
    if (continuationState.continuationToken == null) {
      const optionsComplete: KeyVaultClientGetKeysOptionalParams = {
        maxresults: continuationState.maxPageSize,
        ...(options && options.requestOptions ? options.requestOptions : {})
      };
      const currentSetResponse = await this.client.getDeletedKeys(
        this.vaultEndpoint,
        optionsComplete
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      }
    }
    while (continuationState.continuationToken) {
      const currentSetResponse = await this.client.getDeletedKeys(
        continuationState.continuationToken,
        options
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      } else {
        break;
      }
    }
  }

  private async *listDeletedKeysAll(
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties> {
    const f = {};

    for await (const page of this.listDeletedKeysPage(f, options)) {
      for (const item of page) {
        yield item;
      }
    }
  }

  /**
   * Iterates the deleted keys in the vault.  The full key identifier and properties are provided
   * in the response. No values are returned for the keys. This operations requires the keys/list permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * for await (const keyAttr of client.listDeletedKeys()) {
   *   const deletedKey = await client.getKey(keyAttr.name);
   *   console.log("deleted key: ", deletedKey);
   * }
   * ```
   * @summary List all keys in the vault
   * @param [options] The optional parameters
   */
  public listDeletedKeys(
    options: ListKeysOptions = {}
  ): PagedAsyncIterableIterator<KeyProperties, KeyProperties[]> {
    const span = this.createSpan("listDeletedKeys", options.requestOptions);

    const updatedOptions: ListKeysOptions = {
      ...options,
      requestOptions: this.setParentSpan(span, options.requestOptions)
    };

    const iter = this.listDeletedKeysAll(updatedOptions);

    span.end();
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings: PageSettings = {}) => this.listDeletedKeysPage(settings, updatedOptions)
    };
  }

  private getKeyFromKeyBundle(keyBundle: KeyBundle): Key {
    const parsedId = parseKeyvaultEntityIdentifier(
      "keys",
      keyBundle.key ? keyBundle.key.kid : undefined
    );

    let resultObject;
    if (keyBundle.attributes) {
      resultObject = {
        keyMaterial: keyBundle.key,
        keyOperations: keyBundle.key ? keyBundle.key.keyOps : undefined,
        keyType: keyBundle.key ? keyBundle.key.kty : undefined,
        properties: {
          ...keyBundle,
          ...parsedId,
          ...keyBundle.attributes
        }
      };
      delete resultObject.properties.attributes;
    } else {
      resultObject = {
        keyMaterial: keyBundle.key,
        keyOperations: keyBundle.key ? keyBundle.key.keyOps : undefined,
        keyType: keyBundle.key ? keyBundle.key.kty : undefined,
        properties: {
          ...keyBundle,
          ...parsedId
        }
      };
    }

    return resultObject;
  }

  private getKeyPropertiesFromKeyItem(keyItem: KeyItem): KeyProperties {
    const parsedId = parseKeyvaultEntityIdentifier("keys", keyItem.kid);

    let resultObject;
    if (keyItem.attributes) {
      resultObject = {
        ...keyItem,
        ...parsedId,
        ...keyItem.attributes
      };
      delete resultObject.attributes;
    } else {
      resultObject = {
        ...keyItem,
        ...parsedId
      };
    }

    return resultObject;
  }

  /**
   * Creates a span using the tracer that was set by the user
   * @param methodName The name of the method for which the span is being created.
   * @param requestOptions The options for the underlying http request.
   */
  private createSpan(methodName: string, requestOptions?: RequestOptionsBase): Span {
    const tracer = getTracer();
    return tracer.startSpan(methodName, requestOptions && requestOptions.spanOptions);
  }

  /**
   * Returns updated HTTP options with the given span as the parent of future spans,
   * if applicable.
   * @param span The span for the current operation
   * @param options The options for the underlying http request
   */
  private setParentSpan(span: Span, options: RequestOptionsBase = {}): RequestOptionsBase {
    if (span.isRecordingEvents()) {
      return {
        ...options,
        spanOptions: {
          ...options.spanOptions,
          parent: span
        }
      };
    } else {
      return options;
    }
  }
}
