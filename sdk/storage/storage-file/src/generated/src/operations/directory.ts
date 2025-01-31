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
import * as Mappers from "../models/directoryMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Directory. */
export class Directory {
  private readonly client: StorageClientContext;

  /**
   * Create a Directory.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Creates a new directory under the specified share or parent directory.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectoryCreateResponse>
   */
  create(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.DirectoryCreateOptionalParams): Promise<Models.DirectoryCreateResponse>;
  /**
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param callback The callback
   */
  create(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options: Models.DirectoryCreateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  create(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.DirectoryCreateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.DirectoryCreateResponse> {
    return this.client.sendOperationRequest(
      {
        fileAttributes,
        fileCreatedOn,
        fileLastWriteOn,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.DirectoryCreateResponse>;
  }

  /**
   * Returns all system properties for the specified directory, and can also be used to check the
   * existence of a directory. The data returned does not include the files in the directory or any
   * subdirectories.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectoryGetPropertiesResponse>
   */
  getProperties(options?: Models.DirectoryGetPropertiesOptionalParams): Promise<Models.DirectoryGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(options: Models.DirectoryGetPropertiesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  getProperties(options?: Models.DirectoryGetPropertiesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.DirectoryGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.DirectoryGetPropertiesResponse>;
  }

  /**
   * Removes the specified empty directory. Note that the directory must be empty before it can be
   * deleted.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectoryDeleteResponse>
   */
  deleteMethod(options?: Models.DirectoryDeleteMethodOptionalParams): Promise<Models.DirectoryDeleteResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: Models.DirectoryDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(options?: Models.DirectoryDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.DirectoryDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.DirectoryDeleteResponse>;
  }

  /**
   * Sets properties on the directory.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectorySetPropertiesResponse>
   */
  setProperties(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.DirectorySetPropertiesOptionalParams): Promise<Models.DirectorySetPropertiesResponse>;
  /**
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param callback The callback
   */
  setProperties(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param options The optional parameters
   * @param callback The callback
   */
  setProperties(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options: Models.DirectorySetPropertiesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setProperties(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.DirectorySetPropertiesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.DirectorySetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        fileAttributes,
        fileCreatedOn,
        fileLastWriteOn,
        options
      },
      setPropertiesOperationSpec,
      callback) as Promise<Models.DirectorySetPropertiesResponse>;
  }

  /**
   * Updates user defined metadata for the specified directory.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectorySetMetadataResponse>
   */
  setMetadata(options?: Models.DirectorySetMetadataOptionalParams): Promise<Models.DirectorySetMetadataResponse>;
  /**
   * @param callback The callback
   */
  setMetadata(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setMetadata(options: Models.DirectorySetMetadataOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setMetadata(options?: Models.DirectorySetMetadataOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.DirectorySetMetadataResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setMetadataOperationSpec,
      callback) as Promise<Models.DirectorySetMetadataResponse>;
  }

  /**
   * Returns a list of files or directories under the specified share or directory. It lists the
   * contents only for a single level of the directory hierarchy.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectoryListFilesAndDirectoriesSegmentResponse>
   */
  listFilesAndDirectoriesSegment(options?: Models.DirectoryListFilesAndDirectoriesSegmentOptionalParams): Promise<Models.DirectoryListFilesAndDirectoriesSegmentResponse>;
  /**
   * @param callback The callback
   */
  listFilesAndDirectoriesSegment(callback: coreHttp.ServiceCallback<Models.ListFilesAndDirectoriesSegmentResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listFilesAndDirectoriesSegment(options: Models.DirectoryListFilesAndDirectoriesSegmentOptionalParams, callback: coreHttp.ServiceCallback<Models.ListFilesAndDirectoriesSegmentResponse>): void;
  listFilesAndDirectoriesSegment(options?: Models.DirectoryListFilesAndDirectoriesSegmentOptionalParams | coreHttp.ServiceCallback<Models.ListFilesAndDirectoriesSegmentResponse>, callback?: coreHttp.ServiceCallback<Models.ListFilesAndDirectoriesSegmentResponse>): Promise<Models.DirectoryListFilesAndDirectoriesSegmentResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listFilesAndDirectoriesSegmentOperationSpec,
      callback) as Promise<Models.DirectoryListFilesAndDirectoriesSegmentResponse>;
  }

  /**
   * Lists handles for directory.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectoryListHandlesResponse>
   */
  listHandles(options?: Models.DirectoryListHandlesOptionalParams): Promise<Models.DirectoryListHandlesResponse>;
  /**
   * @param callback The callback
   */
  listHandles(callback: coreHttp.ServiceCallback<Models.ListHandlesResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listHandles(options: Models.DirectoryListHandlesOptionalParams, callback: coreHttp.ServiceCallback<Models.ListHandlesResponse>): void;
  listHandles(options?: Models.DirectoryListHandlesOptionalParams | coreHttp.ServiceCallback<Models.ListHandlesResponse>, callback?: coreHttp.ServiceCallback<Models.ListHandlesResponse>): Promise<Models.DirectoryListHandlesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listHandlesOperationSpec,
      callback) as Promise<Models.DirectoryListHandlesResponse>;
  }

  /**
   * Closes all handles open for given directory.
   * @param handleId Specifies handle ID opened on the file or directory to be closed. Asterix (‘*’)
   * is a wildcard that specifies all handles.
   * @param [options] The optional parameters
   * @returns Promise<Models.DirectoryForceCloseHandlesResponse>
   */
  forceCloseHandles(handleId: string, options?: Models.DirectoryForceCloseHandlesOptionalParams): Promise<Models.DirectoryForceCloseHandlesResponse>;
  /**
   * @param handleId Specifies handle ID opened on the file or directory to be closed. Asterix (‘*’)
   * is a wildcard that specifies all handles.
   * @param callback The callback
   */
  forceCloseHandles(handleId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param handleId Specifies handle ID opened on the file or directory to be closed. Asterix (‘*’)
   * is a wildcard that specifies all handles.
   * @param options The optional parameters
   * @param callback The callback
   */
  forceCloseHandles(handleId: string, options: Models.DirectoryForceCloseHandlesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  forceCloseHandles(handleId: string, options?: Models.DirectoryForceCloseHandlesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.DirectoryForceCloseHandlesResponse> {
    return this.client.sendOperationRequest(
      {
        handleId,
        options
      },
      forceCloseHandlesOperationSpec,
      callback) as Promise<Models.DirectoryForceCloseHandlesResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn
  ],
  responses: {
    201: {
      headersMapper: Mappers.DirectoryCreateHeaders
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
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.shareSnapshot,
    Parameters.timeoutInSeconds,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.DirectoryGetPropertiesHeaders
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
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    202: {
      headersMapper: Mappers.DirectoryDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const setPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn
  ],
  responses: {
    200: {
      headersMapper: Mappers.DirectorySetPropertiesHeaders
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
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.DirectorySetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const listFilesAndDirectoriesSegmentOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.prefix,
    Parameters.shareSnapshot,
    Parameters.marker,
    Parameters.maxResults,
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp1
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListFilesAndDirectoriesSegmentResponse,
      headersMapper: Mappers.DirectoryListFilesAndDirectoriesSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const listHandlesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.marker,
    Parameters.maxResults,
    Parameters.timeoutInSeconds,
    Parameters.shareSnapshot,
    Parameters.comp7
  ],
  headerParameters: [
    Parameters.recursive,
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListHandlesResponse,
      headersMapper: Mappers.DirectoryListHandlesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const forceCloseHandlesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.shareSnapshot,
    Parameters.comp8
  ],
  headerParameters: [
    Parameters.handleId,
    Parameters.recursive,
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.DirectoryForceCloseHandlesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
