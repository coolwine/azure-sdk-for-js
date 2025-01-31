/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/shareMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Share. */
export class Share {
  private readonly client: StorageClientContext;

  /**
   * Create a Share.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Creates a new share under the specified account. If the share with the same name already exists,
   * the operation fails.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareCreateResponse>
   */
  create(options?: Models.ShareCreateOptionalParams): Promise<Models.ShareCreateResponse>;
  /**
   * @param callback The callback
   */
  create(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  create(options: Models.ShareCreateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  create(options?: Models.ShareCreateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareCreateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ShareCreateResponse>;
  }

  /**
   * Returns all user-defined metadata and system properties for the specified share or share
   * snapshot. The data returned does not include the share's list of files.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareGetPropertiesResponse>
   */
  getProperties(options?: Models.ShareGetPropertiesOptionalParams): Promise<Models.ShareGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(options: Models.ShareGetPropertiesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  getProperties(options?: Models.ShareGetPropertiesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.ShareGetPropertiesResponse>;
  }

  /**
   * Operation marks the specified share or share snapshot for deletion. The share or share snapshot
   * and any files contained within it are later deleted during garbage collection.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareDeleteResponse>
   */
  deleteMethod(options?: Models.ShareDeleteMethodOptionalParams): Promise<Models.ShareDeleteResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: Models.ShareDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(options?: Models.ShareDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.ShareDeleteResponse>;
  }

  /**
   * Creates a read-only snapshot of a share.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareCreateSnapshotResponse>
   */
  createSnapshot(options?: Models.ShareCreateSnapshotOptionalParams): Promise<Models.ShareCreateSnapshotResponse>;
  /**
   * @param callback The callback
   */
  createSnapshot(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createSnapshot(options: Models.ShareCreateSnapshotOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  createSnapshot(options?: Models.ShareCreateSnapshotOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareCreateSnapshotResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createSnapshotOperationSpec,
      callback) as Promise<Models.ShareCreateSnapshotResponse>;
  }

  /**
   * Create a permission (a security descriptor).
   * @param permission Permission(a security descriptor) described in the SDDL.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareCreatePermissionResponse>
   */
  createPermission(permission: Models.Permission, options?: Models.ShareCreatePermissionOptionalParams): Promise<Models.ShareCreatePermissionResponse>;
  /**
   * @param permission Permission(a security descriptor) described in the SDDL.
   * @param callback The callback
   */
  createPermission(permission: Models.Permission, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param permission Permission(a security descriptor) described in the SDDL.
   * @param options The optional parameters
   * @param callback The callback
   */
  createPermission(permission: Models.Permission, options: Models.ShareCreatePermissionOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  createPermission(permission: Models.Permission, options?: Models.ShareCreatePermissionOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareCreatePermissionResponse> {
    return this.client.sendOperationRequest(
      {
        permission,
        options
      },
      createPermissionOperationSpec,
      callback) as Promise<Models.ShareCreatePermissionResponse>;
  }

  /**
   * Returns the permission (security descriptor) for a given key
   * @param filePermissionKey Key of the permission to be set for the directory/file. Note: Only one
   * of the x-ms-file-permission or x-ms-file-permission-key should be specified.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareGetPermissionResponse>
   */
  getPermission(filePermissionKey: string, options?: Models.ShareGetPermissionOptionalParams): Promise<Models.ShareGetPermissionResponse>;
  /**
   * @param filePermissionKey Key of the permission to be set for the directory/file. Note: Only one
   * of the x-ms-file-permission or x-ms-file-permission-key should be specified.
   * @param callback The callback
   */
  getPermission(filePermissionKey: string, callback: coreHttp.ServiceCallback<Models.Permission>): void;
  /**
   * @param filePermissionKey Key of the permission to be set for the directory/file. Note: Only one
   * of the x-ms-file-permission or x-ms-file-permission-key should be specified.
   * @param options The optional parameters
   * @param callback The callback
   */
  getPermission(filePermissionKey: string, options: Models.ShareGetPermissionOptionalParams, callback: coreHttp.ServiceCallback<Models.Permission>): void;
  getPermission(filePermissionKey: string, options?: Models.ShareGetPermissionOptionalParams | coreHttp.ServiceCallback<Models.Permission>, callback?: coreHttp.ServiceCallback<Models.Permission>): Promise<Models.ShareGetPermissionResponse> {
    return this.client.sendOperationRequest(
      {
        filePermissionKey,
        options
      },
      getPermissionOperationSpec,
      callback) as Promise<Models.ShareGetPermissionResponse>;
  }

  /**
   * Sets quota for the specified share.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareSetQuotaResponse>
   */
  setQuota(options?: Models.ShareSetQuotaOptionalParams): Promise<Models.ShareSetQuotaResponse>;
  /**
   * @param callback The callback
   */
  setQuota(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setQuota(options: Models.ShareSetQuotaOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setQuota(options?: Models.ShareSetQuotaOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareSetQuotaResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setQuotaOperationSpec,
      callback) as Promise<Models.ShareSetQuotaResponse>;
  }

  /**
   * Sets one or more user-defined name-value pairs for the specified share.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareSetMetadataResponse>
   */
  setMetadata(options?: Models.ShareSetMetadataOptionalParams): Promise<Models.ShareSetMetadataResponse>;
  /**
   * @param callback The callback
   */
  setMetadata(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setMetadata(options: Models.ShareSetMetadataOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setMetadata(options?: Models.ShareSetMetadataOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareSetMetadataResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setMetadataOperationSpec,
      callback) as Promise<Models.ShareSetMetadataResponse>;
  }

  /**
   * Returns information about stored access policies specified on the share.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareGetAccessPolicyResponse>
   */
  getAccessPolicy(options?: Models.ShareGetAccessPolicyOptionalParams): Promise<Models.ShareGetAccessPolicyResponse>;
  /**
   * @param callback The callback
   */
  getAccessPolicy(callback: coreHttp.ServiceCallback<Models.SignedIdentifier[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAccessPolicy(options: Models.ShareGetAccessPolicyOptionalParams, callback: coreHttp.ServiceCallback<Models.SignedIdentifier[]>): void;
  getAccessPolicy(options?: Models.ShareGetAccessPolicyOptionalParams | coreHttp.ServiceCallback<Models.SignedIdentifier[]>, callback?: coreHttp.ServiceCallback<Models.SignedIdentifier[]>): Promise<Models.ShareGetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAccessPolicyOperationSpec,
      callback) as Promise<Models.ShareGetAccessPolicyResponse>;
  }

  /**
   * Sets a stored access policy for use with shared access signatures.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareSetAccessPolicyResponse>
   */
  setAccessPolicy(options?: Models.ShareSetAccessPolicyOptionalParams): Promise<Models.ShareSetAccessPolicyResponse>;
  /**
   * @param callback The callback
   */
  setAccessPolicy(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setAccessPolicy(options: Models.ShareSetAccessPolicyOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setAccessPolicy(options?: Models.ShareSetAccessPolicyOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ShareSetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setAccessPolicyOperationSpec,
      callback) as Promise<Models.ShareSetAccessPolicyResponse>;
  }

  /**
   * Retrieves statistics related to the share.
   * @param [options] The optional parameters
   * @returns Promise<Models.ShareGetStatisticsResponse>
   */
  getStatistics(options?: Models.ShareGetStatisticsOptionalParams): Promise<Models.ShareGetStatisticsResponse>;
  /**
   * @param callback The callback
   */
  getStatistics(callback: coreHttp.ServiceCallback<Models.ShareStats>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getStatistics(options: Models.ShareGetStatisticsOptionalParams, callback: coreHttp.ServiceCallback<Models.ShareStats>): void;
  getStatistics(options?: Models.ShareGetStatisticsOptionalParams | coreHttp.ServiceCallback<Models.ShareStats>, callback?: coreHttp.ServiceCallback<Models.ShareStats>): Promise<Models.ShareGetStatisticsResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getStatisticsOperationSpec,
      callback) as Promise<Models.ShareGetStatisticsResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.quota,
    Parameters.version
  ],
  responses: {
    201: {
      headersMapper: Mappers.ShareCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.shareSnapshot,
    Parameters.timeoutInSeconds,
    Parameters.restype1
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.ShareGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.shareSnapshot,
    Parameters.timeoutInSeconds,
    Parameters.restype1
  ],
  headerParameters: [
    Parameters.version,
    Parameters.deleteSnapshots
  ],
  responses: {
    202: {
      headersMapper: Mappers.ShareDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const createSnapshotOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp2
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version
  ],
  responses: {
    201: {
      headersMapper: Mappers.ShareCreateSnapshotHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const createPermissionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp3
  ],
  headerParameters: [
    Parameters.version
  ],
  requestBody: {
    parameterPath: "permission",
    mapper: {
      ...Mappers.Permission,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {
      headersMapper: Mappers.ShareCreatePermissionHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: false,
  serializer
};

const getPermissionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp3
  ],
  headerParameters: [
    Parameters.filePermissionKey0,
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Permission,
      headersMapper: Mappers.ShareGetPermissionHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const setQuotaOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version,
    Parameters.quota
  ],
  responses: {
    200: {
      headersMapper: Mappers.ShareSetQuotaHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const setMetadataOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.ShareSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp5
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "SignedIdentifier",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignedIdentifier"
            }
          }
        }
      },
      headersMapper: Mappers.ShareGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const setAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp5
  ],
  headerParameters: [
    Parameters.version
  ],
  requestBody: {
    parameterPath: [
      "options",
      "shareAcl"
    ],
    mapper: {
      xmlName: "SignedIdentifiers",
      xmlElementName: "SignedIdentifier",
      serializedName: "shareAcl",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "SignedIdentifier"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.ShareSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getStatisticsOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype1,
    Parameters.comp6
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ShareStats,
      headersMapper: Mappers.ShareGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
