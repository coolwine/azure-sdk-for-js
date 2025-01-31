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
import * as Mappers from "../models/fileMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a File. */
export class File {
  private readonly client: StorageClientContext;

  /**
   * Create a File.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Creates a new file or replaces a file. Note it only initializes the file with no content.
   * @param fileContentLength Specifies the maximum size for the file, up to 1 TB.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileCreateResponse>
   */
  create(fileContentLength: number, fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.FileCreateOptionalParams): Promise<Models.FileCreateResponse>;
  /**
   * @param fileContentLength Specifies the maximum size for the file, up to 1 TB.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param callback The callback
   */
  create(fileContentLength: number, fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param fileContentLength Specifies the maximum size for the file, up to 1 TB.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(fileContentLength: number, fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options: Models.FileCreateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  create(fileContentLength: number, fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.FileCreateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileCreateResponse> {
    return this.client.sendOperationRequest(
      {
        fileContentLength,
        fileAttributes,
        fileCreatedOn,
        fileLastWriteOn,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.FileCreateResponse>;
  }

  /**
   * Reads or downloads a file from the system, including its metadata and properties.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileDownloadResponse>
   */
  download(options?: Models.FileDownloadOptionalParams): Promise<Models.FileDownloadResponse>;
  /**
   * @param callback The callback
   */
  download(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  download(options: Models.FileDownloadOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  download(options?: Models.FileDownloadOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileDownloadResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      downloadOperationSpec,
      callback) as Promise<Models.FileDownloadResponse>;
  }

  /**
   * Returns all user-defined metadata, standard HTTP properties, and system properties for the file.
   * It does not return the content of the file.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileGetPropertiesResponse>
   */
  getProperties(options?: Models.FileGetPropertiesOptionalParams): Promise<Models.FileGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(options: Models.FileGetPropertiesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  getProperties(options?: Models.FileGetPropertiesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.FileGetPropertiesResponse>;
  }

  /**
   * removes the file from the storage account.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileDeleteResponse>
   */
  deleteMethod(options?: Models.FileDeleteMethodOptionalParams): Promise<Models.FileDeleteResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: Models.FileDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(options?: Models.FileDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.FileDeleteResponse>;
  }

  /**
   * Sets HTTP headers on the file.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSetHTTPHeadersResponse>
   */
  setHTTPHeaders(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.FileSetHTTPHeadersOptionalParams): Promise<Models.FileSetHTTPHeadersResponse>;
  /**
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param callback The callback
   */
  setHTTPHeaders(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   * ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param fileCreatedOn Creation time for the file/directory.
   * @param fileLastWriteOn Last write time for the file/directory.
   * @param options The optional parameters
   * @param callback The callback
   */
  setHTTPHeaders(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options: Models.FileSetHTTPHeadersOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setHTTPHeaders(fileAttributes: string, fileCreatedOn: string, fileLastWriteOn: string, options?: Models.FileSetHTTPHeadersOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileSetHTTPHeadersResponse> {
    return this.client.sendOperationRequest(
      {
        fileAttributes,
        fileCreatedOn,
        fileLastWriteOn,
        options
      },
      setHTTPHeadersOperationSpec,
      callback) as Promise<Models.FileSetHTTPHeadersResponse>;
  }

  /**
   * Updates user-defined metadata for the specified file.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSetMetadataResponse>
   */
  setMetadata(options?: Models.FileSetMetadataOptionalParams): Promise<Models.FileSetMetadataResponse>;
  /**
   * @param callback The callback
   */
  setMetadata(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setMetadata(options: Models.FileSetMetadataOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setMetadata(options?: Models.FileSetMetadataOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileSetMetadataResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setMetadataOperationSpec,
      callback) as Promise<Models.FileSetMetadataResponse>;
  }

  /**
   * Upload a range of bytes to a file.
   * @param range Specifies the range of bytes to be written. Both the start and end of the range
   * must be specified. For an update operation, the range can be up to 4 MB in size. For a clear
   * operation, the range can be up to the value of the file's full size. The File service accepts
   * only a single byte range for the Range and 'x-ms-range' headers, and the byte range must be
   * specified in the following format: bytes=startByte-endByte.
   * @param fileRangeWrite Specify one of the following options: - Update: Writes the bytes specified
   * by the request body into the specified range. The Range and Content-Length headers must match to
   * perform the update. - Clear: Clears the specified range and releases the space used in storage
   * for that range. To clear a range, set the Content-Length header to zero, and set the Range
   * header to a value that indicates the range to clear, up to maximum file size. Possible values
   * include: 'update', 'clear'
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When
   * the x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileUploadRangeResponse>
   */
  uploadRange(range: string, fileRangeWrite: Models.FileRangeWriteType, contentLength: number, options?: Models.FileUploadRangeOptionalParams): Promise<Models.FileUploadRangeResponse>;
  /**
   * @param range Specifies the range of bytes to be written. Both the start and end of the range
   * must be specified. For an update operation, the range can be up to 4 MB in size. For a clear
   * operation, the range can be up to the value of the file's full size. The File service accepts
   * only a single byte range for the Range and 'x-ms-range' headers, and the byte range must be
   * specified in the following format: bytes=startByte-endByte.
   * @param fileRangeWrite Specify one of the following options: - Update: Writes the bytes specified
   * by the request body into the specified range. The Range and Content-Length headers must match to
   * perform the update. - Clear: Clears the specified range and releases the space used in storage
   * for that range. To clear a range, set the Content-Length header to zero, and set the Range
   * header to a value that indicates the range to clear, up to maximum file size. Possible values
   * include: 'update', 'clear'
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When
   * the x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param callback The callback
   */
  uploadRange(range: string, fileRangeWrite: Models.FileRangeWriteType, contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param range Specifies the range of bytes to be written. Both the start and end of the range
   * must be specified. For an update operation, the range can be up to 4 MB in size. For a clear
   * operation, the range can be up to the value of the file's full size. The File service accepts
   * only a single byte range for the Range and 'x-ms-range' headers, and the byte range must be
   * specified in the following format: bytes=startByte-endByte.
   * @param fileRangeWrite Specify one of the following options: - Update: Writes the bytes specified
   * by the request body into the specified range. The Range and Content-Length headers must match to
   * perform the update. - Clear: Clears the specified range and releases the space used in storage
   * for that range. To clear a range, set the Content-Length header to zero, and set the Range
   * header to a value that indicates the range to clear, up to maximum file size. Possible values
   * include: 'update', 'clear'
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When
   * the x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadRange(range: string, fileRangeWrite: Models.FileRangeWriteType, contentLength: number, options: Models.FileUploadRangeOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  uploadRange(range: string, fileRangeWrite: Models.FileRangeWriteType, contentLength: number, options?: Models.FileUploadRangeOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileUploadRangeResponse> {
    return this.client.sendOperationRequest(
      {
        range,
        fileRangeWrite,
        contentLength,
        options
      },
      uploadRangeOperationSpec,
      callback) as Promise<Models.FileUploadRangeResponse>;
  }

  /**
   * Upload a range of bytes to a file where the contents are read from a URL.
   * @param range Writes data to the specified byte range in the file.
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a
   * file to another file within the same storage account, you may use Shared Key to authenticate the
   * source file. If you are copying a file from another storage account, or if you are copying a
   * blob from the same storage account or another storage account, then you must authenticate the
   * source file or blob using a shared access signature. If the source is a public blob, no
   * authentication is required to perform the copy operation. A file in a share snapshot can also be
   * specified as a copy source.
   * @param sourceRange Bytes of source data in the specified range.
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When
   * the x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileUploadRangeFromURLResponse>
   */
  uploadRangeFromURL(range: string, copySource: string, sourceRange: string, contentLength: number, options?: Models.FileUploadRangeFromURLOptionalParams): Promise<Models.FileUploadRangeFromURLResponse>;
  /**
   * @param range Writes data to the specified byte range in the file.
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a
   * file to another file within the same storage account, you may use Shared Key to authenticate the
   * source file. If you are copying a file from another storage account, or if you are copying a
   * blob from the same storage account or another storage account, then you must authenticate the
   * source file or blob using a shared access signature. If the source is a public blob, no
   * authentication is required to perform the copy operation. A file in a share snapshot can also be
   * specified as a copy source.
   * @param sourceRange Bytes of source data in the specified range.
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When
   * the x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param callback The callback
   */
  uploadRangeFromURL(range: string, copySource: string, sourceRange: string, contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param range Writes data to the specified byte range in the file.
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a
   * file to another file within the same storage account, you may use Shared Key to authenticate the
   * source file. If you are copying a file from another storage account, or if you are copying a
   * blob from the same storage account or another storage account, then you must authenticate the
   * source file or blob using a shared access signature. If the source is a public blob, no
   * authentication is required to perform the copy operation. A file in a share snapshot can also be
   * specified as a copy source.
   * @param sourceRange Bytes of source data in the specified range.
   * @param contentLength Specifies the number of bytes being transmitted in the request body. When
   * the x-ms-write header is set to clear, the value of this header must be set to zero.
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadRangeFromURL(range: string, copySource: string, sourceRange: string, contentLength: number, options: Models.FileUploadRangeFromURLOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  uploadRangeFromURL(range: string, copySource: string, sourceRange: string, contentLength: number, options?: Models.FileUploadRangeFromURLOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileUploadRangeFromURLResponse> {
    return this.client.sendOperationRequest(
      {
        range,
        copySource,
        sourceRange,
        contentLength,
        options
      },
      uploadRangeFromURLOperationSpec,
      callback) as Promise<Models.FileUploadRangeFromURLResponse>;
  }

  /**
   * Returns the list of valid ranges for a file.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileGetRangeListResponse>
   */
  getRangeList(options?: Models.FileGetRangeListOptionalParams): Promise<Models.FileGetRangeListResponse>;
  /**
   * @param callback The callback
   */
  getRangeList(callback: coreHttp.ServiceCallback<Models.Range[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRangeList(options: Models.FileGetRangeListOptionalParams, callback: coreHttp.ServiceCallback<Models.Range[]>): void;
  getRangeList(options?: Models.FileGetRangeListOptionalParams | coreHttp.ServiceCallback<Models.Range[]>, callback?: coreHttp.ServiceCallback<Models.Range[]>): Promise<Models.FileGetRangeListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getRangeListOperationSpec,
      callback) as Promise<Models.FileGetRangeListResponse>;
  }

  /**
   * Copies a blob or file to a destination file within the storage account.
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a
   * file to another file within the same storage account, you may use Shared Key to authenticate the
   * source file. If you are copying a file from another storage account, or if you are copying a
   * blob from the same storage account or another storage account, then you must authenticate the
   * source file or blob using a shared access signature. If the source is a public blob, no
   * authentication is required to perform the copy operation. A file in a share snapshot can also be
   * specified as a copy source.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileStartCopyResponse>
   */
  startCopy(copySource: string, options?: Models.FileStartCopyOptionalParams): Promise<Models.FileStartCopyResponse>;
  /**
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a
   * file to another file within the same storage account, you may use Shared Key to authenticate the
   * source file. If you are copying a file from another storage account, or if you are copying a
   * blob from the same storage account or another storage account, then you must authenticate the
   * source file or blob using a shared access signature. If the source is a public blob, no
   * authentication is required to perform the copy operation. A file in a share snapshot can also be
   * specified as a copy source.
   * @param callback The callback
   */
  startCopy(copySource: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param copySource Specifies the URL of the source file or blob, up to 2 KB in length. To copy a
   * file to another file within the same storage account, you may use Shared Key to authenticate the
   * source file. If you are copying a file from another storage account, or if you are copying a
   * blob from the same storage account or another storage account, then you must authenticate the
   * source file or blob using a shared access signature. If the source is a public blob, no
   * authentication is required to perform the copy operation. A file in a share snapshot can also be
   * specified as a copy source.
   * @param options The optional parameters
   * @param callback The callback
   */
  startCopy(copySource: string, options: Models.FileStartCopyOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  startCopy(copySource: string, options?: Models.FileStartCopyOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileStartCopyResponse> {
    return this.client.sendOperationRequest(
      {
        copySource,
        options
      },
      startCopyOperationSpec,
      callback) as Promise<Models.FileStartCopyResponse>;
  }

  /**
   * Aborts a pending Copy File operation, and leaves a destination file with zero length and full
   * metadata.
   * @param copyId The copy identifier provided in the x-ms-copy-id header of the original Copy File
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileAbortCopyResponse>
   */
  abortCopy(copyId: string, options?: Models.FileAbortCopyOptionalParams): Promise<Models.FileAbortCopyResponse>;
  /**
   * @param copyId The copy identifier provided in the x-ms-copy-id header of the original Copy File
   * operation.
   * @param callback The callback
   */
  abortCopy(copyId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param copyId The copy identifier provided in the x-ms-copy-id header of the original Copy File
   * operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  abortCopy(copyId: string, options: Models.FileAbortCopyOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  abortCopy(copyId: string, options?: Models.FileAbortCopyOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileAbortCopyResponse> {
    return this.client.sendOperationRequest(
      {
        copyId,
        options
      },
      abortCopyOperationSpec,
      callback) as Promise<Models.FileAbortCopyResponse>;
  }

  /**
   * Lists handles for file
   * @param [options] The optional parameters
   * @returns Promise<Models.FileListHandlesResponse>
   */
  listHandles(options?: Models.FileListHandlesOptionalParams): Promise<Models.FileListHandlesResponse>;
  /**
   * @param callback The callback
   */
  listHandles(callback: coreHttp.ServiceCallback<Models.ListHandlesResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listHandles(options: Models.FileListHandlesOptionalParams, callback: coreHttp.ServiceCallback<Models.ListHandlesResponse>): void;
  listHandles(options?: Models.FileListHandlesOptionalParams | coreHttp.ServiceCallback<Models.ListHandlesResponse>, callback?: coreHttp.ServiceCallback<Models.ListHandlesResponse>): Promise<Models.FileListHandlesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listHandlesOperationSpec,
      callback) as Promise<Models.FileListHandlesResponse>;
  }

  /**
   * Closes all handles open for given file
   * @param handleId Specifies handle ID opened on the file or directory to be closed. Asterix (‘*’)
   * is a wildcard that specifies all handles.
   * @param [options] The optional parameters
   * @returns Promise<Models.FileForceCloseHandlesResponse>
   */
  forceCloseHandles(handleId: string, options?: Models.FileForceCloseHandlesOptionalParams): Promise<Models.FileForceCloseHandlesResponse>;
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
  forceCloseHandles(handleId: string, options: Models.FileForceCloseHandlesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  forceCloseHandles(handleId: string, options?: Models.FileForceCloseHandlesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.FileForceCloseHandlesResponse> {
    return this.client.sendOperationRequest(
      {
        handleId,
        options
      },
      forceCloseHandlesOperationSpec,
      callback) as Promise<Models.FileForceCloseHandlesResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.version,
    Parameters.fileContentLength0,
    Parameters.fileTypeConstant,
    Parameters.metadata,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn,
    Parameters.fileContentType,
    Parameters.fileContentEncoding,
    Parameters.fileContentLanguage,
    Parameters.fileCacheControl,
    Parameters.fileContentMD5,
    Parameters.fileContentDisposition
  ],
  responses: {
    201: {
      headersMapper: Mappers.FileCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const downloadOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.version,
    Parameters.range0,
    Parameters.rangeGetContentMD5
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      },
      headersMapper: Mappers.FileDownloadHeaders
    },
    206: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      },
      headersMapper: Mappers.FileDownloadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "HEAD",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.shareSnapshot,
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.FileGetPropertiesHeaders
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
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    202: {
      headersMapper: Mappers.FileDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const setHTTPHeadersOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version,
    Parameters.fileContentLength1,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn,
    Parameters.fileContentType,
    Parameters.fileContentEncoding,
    Parameters.fileContentLanguage,
    Parameters.fileCacheControl,
    Parameters.fileContentMD5,
    Parameters.fileContentDisposition
  ],
  responses: {
    200: {
      headersMapper: Mappers.FileSetHTTPHeadersHeaders
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
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.FileSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const uploadRangeOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp9
  ],
  headerParameters: [
    Parameters.range1,
    Parameters.fileRangeWrite,
    Parameters.contentLength,
    Parameters.contentMD5,
    Parameters.version
  ],
  requestBody: {
    parameterPath: [
      "options",
      "optionalbody"
    ],
    mapper: {
      serializedName: "optionalbody",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    201: {
      headersMapper: Mappers.FileUploadRangeHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const uploadRangeFromURLOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp9
  ],
  headerParameters: [
    Parameters.range1,
    Parameters.copySource,
    Parameters.sourceRange,
    Parameters.fileRangeWriteFromUrl,
    Parameters.contentLength,
    Parameters.sourceContentCrc64,
    Parameters.version,
    Parameters.sourceIfMatchCrc64,
    Parameters.sourceIfNoneMatchCrc64
  ],
  responses: {
    201: {
      headersMapper: Mappers.FileUploadRangeFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getRangeListOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.shareSnapshot,
    Parameters.timeoutInSeconds,
    Parameters.comp10
  ],
  headerParameters: [
    Parameters.version,
    Parameters.range0
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "Range",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Range"
            }
          }
        }
      },
      headersMapper: Mappers.FileGetRangeListHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const startCopyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.version,
    Parameters.metadata,
    Parameters.copySource
  ],
  responses: {
    202: {
      headersMapper: Mappers.FileStartCopyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const abortCopyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{shareName}/{directory}/{fileName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.copyId,
    Parameters.timeoutInSeconds,
    Parameters.comp11
  ],
  headerParameters: [
    Parameters.copyActionAbortConstant,
    Parameters.version
  ],
  responses: {
    204: {
      headersMapper: Mappers.FileAbortCopyHeaders
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
  path: "{shareName}/{directory}/{fileName}",
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
    Parameters.version
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListHandlesResponse,
      headersMapper: Mappers.FileListHandlesHeaders
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
  path: "{shareName}/{directory}/{fileName}",
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
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.FileForceCloseHandlesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
