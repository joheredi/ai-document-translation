import { ErrorResponseV2, BatchStatusResponse, DocumentStatusDetail, BatchStatusDetail, DocumentStatusResponse, FileFormatListResult, StorageSourceListResult } from "./models";
import { HttpResponse } from "@azure-rest/core-client";
import { RawHttpHeaders } from "@azure/core-rest-pipeline";
export interface SubmitBatchRequest202Headers {
    /** Location of batch the operation */
    "operation-location"?: string;
}
export declare type SubmitBatchRequest202Response = SubmitBatchRequest202Properties & HttpResponse;
export interface SubmitBatchRequest202Properties {
    status: 202;
    headers: SubmitBatchRequest202Headers & RawHttpHeaders;
}
export declare type SubmitBatchRequest400Response = SubmitBatchRequest400Properties & HttpResponse;
export interface SubmitBatchRequest400Properties {
    status: 400;
    parsedBody: ErrorResponseV2;
}
export declare type SubmitBatchRequest401Response = SubmitBatchRequest401Properties & HttpResponse;
export interface SubmitBatchRequest401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}
export declare type SubmitBatchRequest429Response = SubmitBatchRequest429Properties & HttpResponse;
export interface SubmitBatchRequest429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type SubmitBatchRequest500Response = SubmitBatchRequest500Properties & HttpResponse;
export interface SubmitBatchRequest500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type SubmitBatchRequest503Response = SubmitBatchRequest503Properties & HttpResponse;
export interface SubmitBatchRequest503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export interface GetOperations200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}
export declare type GetOperations200Response = GetOperations200Properties & HttpResponse;
export interface GetOperations200Properties {
    status: 200;
    parsedBody: BatchStatusResponse;
    headers: GetOperations200Headers & RawHttpHeaders;
}
export declare type GetOperations400Response = GetOperations400Properties & HttpResponse;
export interface GetOperations400Properties {
    status: 400;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperations401Response = GetOperations401Properties & HttpResponse;
export interface GetOperations401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperations429Response = GetOperations429Properties & HttpResponse;
export interface GetOperations429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperations500Response = GetOperations500Properties & HttpResponse;
export interface GetOperations500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperations503Response = GetOperations503Properties & HttpResponse;
export interface GetOperations503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export interface GetDocumentStatus200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}
export declare type GetDocumentStatus200Response = GetDocumentStatus200Properties & HttpResponse;
export interface GetDocumentStatus200Properties {
    status: 200;
    parsedBody: DocumentStatusDetail;
    headers: GetDocumentStatus200Headers & RawHttpHeaders;
}
export declare type GetDocumentStatus401Response = GetDocumentStatus401Properties & HttpResponse;
export interface GetDocumentStatus401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentStatus404Response = GetDocumentStatus404Properties & HttpResponse;
export interface GetDocumentStatus404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentStatus429Response = GetDocumentStatus429Properties & HttpResponse;
export interface GetDocumentStatus429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentStatus500Response = GetDocumentStatus500Properties & HttpResponse;
export interface GetDocumentStatus500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentStatus503Response = GetDocumentStatus503Properties & HttpResponse;
export interface GetDocumentStatus503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export interface GetOperationStatus200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}
export declare type GetOperationStatus200Response = GetOperationStatus200Properties & HttpResponse;
export interface GetOperationStatus200Properties {
    status: 200;
    parsedBody: BatchStatusDetail;
    headers: GetOperationStatus200Headers & RawHttpHeaders;
}
export declare type GetOperationStatus401Response = GetOperationStatus401Properties & HttpResponse;
export interface GetOperationStatus401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationStatus404Response = GetOperationStatus404Properties & HttpResponse;
export interface GetOperationStatus404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationStatus429Response = GetOperationStatus429Properties & HttpResponse;
export interface GetOperationStatus429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationStatus500Response = GetOperationStatus500Properties & HttpResponse;
export interface GetOperationStatus500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationStatus503Response = GetOperationStatus503Properties & HttpResponse;
export interface GetOperationStatus503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export declare type CancelOperation200Response = CancelOperation200Properties & HttpResponse;
export interface CancelOperation200Properties {
    status: 200;
    parsedBody: BatchStatusDetail;
}
export declare type CancelOperation401Response = CancelOperation401Properties & HttpResponse;
export interface CancelOperation401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}
export declare type CancelOperation404Response = CancelOperation404Properties & HttpResponse;
export interface CancelOperation404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}
export declare type CancelOperation429Response = CancelOperation429Properties & HttpResponse;
export interface CancelOperation429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type CancelOperation500Response = CancelOperation500Properties & HttpResponse;
export interface CancelOperation500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type CancelOperation503Response = CancelOperation503Properties & HttpResponse;
export interface CancelOperation503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export interface GetOperationDocumentsStatus200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}
export declare type GetOperationDocumentsStatus200Response = GetOperationDocumentsStatus200Properties & HttpResponse;
export interface GetOperationDocumentsStatus200Properties {
    status: 200;
    parsedBody: DocumentStatusResponse;
    headers: GetOperationDocumentsStatus200Headers & RawHttpHeaders;
}
export declare type GetOperationDocumentsStatus400Response = GetOperationDocumentsStatus400Properties & HttpResponse;
export interface GetOperationDocumentsStatus400Properties {
    status: 400;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus401Response = GetOperationDocumentsStatus401Properties & HttpResponse;
export interface GetOperationDocumentsStatus401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus404Response = GetOperationDocumentsStatus404Properties & HttpResponse;
export interface GetOperationDocumentsStatus404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus429Response = GetOperationDocumentsStatus429Properties & HttpResponse;
export interface GetOperationDocumentsStatus429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus500Response = GetOperationDocumentsStatus500Properties & HttpResponse;
export interface GetOperationDocumentsStatus500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus503Response = GetOperationDocumentsStatus503Properties & HttpResponse;
export interface GetOperationDocumentsStatus503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export interface GetDocumentFormats200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}
export declare type GetDocumentFormats200Response = GetDocumentFormats200Properties & HttpResponse;
export interface GetDocumentFormats200Properties {
    status: 200;
    parsedBody: FileFormatListResult;
    headers: GetDocumentFormats200Headers & RawHttpHeaders;
}
export declare type GetDocumentFormats429Response = GetDocumentFormats429Properties & HttpResponse;
export interface GetDocumentFormats429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentFormats500Response = GetDocumentFormats500Properties & HttpResponse;
export interface GetDocumentFormats500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentFormats503Response = GetDocumentFormats503Properties & HttpResponse;
export interface GetDocumentFormats503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export interface GetGlossaryFormats200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}
export declare type GetGlossaryFormats200Response = GetGlossaryFormats200Properties & HttpResponse;
export interface GetGlossaryFormats200Properties {
    status: 200;
    parsedBody: FileFormatListResult;
    headers: GetGlossaryFormats200Headers & RawHttpHeaders;
}
export declare type GetGlossaryFormats429Response = GetGlossaryFormats429Properties & HttpResponse;
export interface GetGlossaryFormats429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type GetGlossaryFormats500Response = GetGlossaryFormats500Properties & HttpResponse;
export interface GetGlossaryFormats500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type GetGlossaryFormats503Response = GetGlossaryFormats503Properties & HttpResponse;
export interface GetGlossaryFormats503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
export interface GetDocumentStorageSource200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}
export declare type GetDocumentStorageSource200Response = GetDocumentStorageSource200Properties & HttpResponse;
export interface GetDocumentStorageSource200Properties {
    status: 200;
    parsedBody: StorageSourceListResult;
    headers: GetDocumentStorageSource200Headers & RawHttpHeaders;
}
export declare type GetDocumentStorageSource429Response = GetDocumentStorageSource429Properties & HttpResponse;
export interface GetDocumentStorageSource429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentStorageSource500Response = GetDocumentStorageSource500Properties & HttpResponse;
export interface GetDocumentStorageSource500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}
export declare type GetDocumentStorageSource503Response = GetDocumentStorageSource503Properties & HttpResponse;
export interface GetDocumentStorageSource503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}
//# sourceMappingURL=responses.d.ts.map