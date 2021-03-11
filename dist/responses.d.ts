import { ErrorResponseV2, BatchStatusResponse, DocumentStatusDetail, BatchStatusDetail, DocumentStatusResponse, FileFormatListResult, StorageSourceListResult } from "./models";
import { PipelineResponse as PipelineResponseInternal, HttpHeaders } from "@azure/core-https";
export declare type PipelineResponse = PipelineResponseInternal & {
    body: unknown;
};
export declare type RequestUncheckedResponse = PipelineResponse & {
    body: any;
};
interface SubmitBatchRequest202Headers {
    "operation-location"?: string;
}
export declare type SubmitBatchRequest202Response = SubmitBatchRequest202Properties & PipelineResponse;
interface SubmitBatchRequest202Properties {
    status: 202;
    headers: SubmitBatchRequest202Headers & HttpHeaders;
}
export declare type SubmitBatchRequest400Response = SubmitBatchRequest400Properties & PipelineResponse;
interface SubmitBatchRequest400Properties {
    status: 400;
    body: ErrorResponseV2;
}
export declare type SubmitBatchRequest401Response = SubmitBatchRequest401Properties & PipelineResponse;
interface SubmitBatchRequest401Properties {
    status: 401;
    body: ErrorResponseV2;
}
export declare type SubmitBatchRequest429Response = SubmitBatchRequest429Properties & PipelineResponse;
interface SubmitBatchRequest429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type SubmitBatchRequest500Response = SubmitBatchRequest500Properties & PipelineResponse;
interface SubmitBatchRequest500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type SubmitBatchRequest503Response = SubmitBatchRequest503Properties & PipelineResponse;
interface SubmitBatchRequest503Properties {
    status: 503;
    body: ErrorResponseV2;
}
interface GetOperations200Headers {
    "Retry-After"?: string;
    ETag?: string;
}
export declare type GetOperations200Response = GetOperations200Properties & PipelineResponse;
interface GetOperations200Properties {
    status: 200;
    body: BatchStatusResponse;
    headers: GetOperations200Headers & HttpHeaders;
}
export declare type GetOperations400Response = GetOperations400Properties & PipelineResponse;
interface GetOperations400Properties {
    status: 400;
    body: ErrorResponseV2;
}
export declare type GetOperations401Response = GetOperations401Properties & PipelineResponse;
interface GetOperations401Properties {
    status: 401;
    body: ErrorResponseV2;
}
export declare type GetOperations429Response = GetOperations429Properties & PipelineResponse;
interface GetOperations429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type GetOperations500Response = GetOperations500Properties & PipelineResponse;
interface GetOperations500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type GetOperations503Response = GetOperations503Properties & PipelineResponse;
interface GetOperations503Properties {
    status: 503;
    body: ErrorResponseV2;
}
interface GetDocumentStatus200Headers {
    "Retry-After"?: string;
    ETag?: string;
}
export declare type GetDocumentStatus200Response = GetDocumentStatus200Properties & PipelineResponse;
interface GetDocumentStatus200Properties {
    status: 200;
    body: DocumentStatusDetail;
    headers: GetDocumentStatus200Headers & HttpHeaders;
}
export declare type GetDocumentStatus401Response = GetDocumentStatus401Properties & PipelineResponse;
interface GetDocumentStatus401Properties {
    status: 401;
    body: ErrorResponseV2;
}
export declare type GetDocumentStatus404Response = GetDocumentStatus404Properties & PipelineResponse;
interface GetDocumentStatus404Properties {
    status: 404;
    body: ErrorResponseV2;
}
export declare type GetDocumentStatus429Response = GetDocumentStatus429Properties & PipelineResponse;
interface GetDocumentStatus429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type GetDocumentStatus500Response = GetDocumentStatus500Properties & PipelineResponse;
interface GetDocumentStatus500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type GetDocumentStatus503Response = GetDocumentStatus503Properties & PipelineResponse;
interface GetDocumentStatus503Properties {
    status: 503;
    body: ErrorResponseV2;
}
interface GetOperationStatus200Headers {
    "Retry-After"?: string;
    ETag?: string;
}
export declare type GetOperationStatus200Response = GetOperationStatus200Properties & PipelineResponse;
interface GetOperationStatus200Properties {
    status: 200;
    body: BatchStatusDetail;
    headers: GetOperationStatus200Headers & HttpHeaders;
}
export declare type GetOperationStatus401Response = GetOperationStatus401Properties & PipelineResponse;
interface GetOperationStatus401Properties {
    status: 401;
    body: ErrorResponseV2;
}
export declare type GetOperationStatus404Response = GetOperationStatus404Properties & PipelineResponse;
interface GetOperationStatus404Properties {
    status: 404;
    body: ErrorResponseV2;
}
export declare type GetOperationStatus429Response = GetOperationStatus429Properties & PipelineResponse;
interface GetOperationStatus429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type GetOperationStatus500Response = GetOperationStatus500Properties & PipelineResponse;
interface GetOperationStatus500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type GetOperationStatus503Response = GetOperationStatus503Properties & PipelineResponse;
interface GetOperationStatus503Properties {
    status: 503;
    body: ErrorResponseV2;
}
export declare type CancelOperation200Response = CancelOperation200Properties & PipelineResponse;
interface CancelOperation200Properties {
    status: 200;
    body: BatchStatusDetail;
}
export declare type CancelOperation401Response = CancelOperation401Properties & PipelineResponse;
interface CancelOperation401Properties {
    status: 401;
    body: ErrorResponseV2;
}
export declare type CancelOperation404Response = CancelOperation404Properties & PipelineResponse;
interface CancelOperation404Properties {
    status: 404;
    body: ErrorResponseV2;
}
export declare type CancelOperation429Response = CancelOperation429Properties & PipelineResponse;
interface CancelOperation429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type CancelOperation500Response = CancelOperation500Properties & PipelineResponse;
interface CancelOperation500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type CancelOperation503Response = CancelOperation503Properties & PipelineResponse;
interface CancelOperation503Properties {
    status: 503;
    body: ErrorResponseV2;
}
interface GetOperationDocumentsStatus200Headers {
    "Retry-After"?: string;
    ETag?: string;
}
export declare type GetOperationDocumentsStatus200Response = GetOperationDocumentsStatus200Properties & PipelineResponse;
interface GetOperationDocumentsStatus200Properties {
    status: 200;
    body: DocumentStatusResponse;
    headers: GetOperationDocumentsStatus200Headers & HttpHeaders;
}
export declare type GetOperationDocumentsStatus400Response = GetOperationDocumentsStatus400Properties & PipelineResponse;
interface GetOperationDocumentsStatus400Properties {
    status: 400;
    body: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus401Response = GetOperationDocumentsStatus401Properties & PipelineResponse;
interface GetOperationDocumentsStatus401Properties {
    status: 401;
    body: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus404Response = GetOperationDocumentsStatus404Properties & PipelineResponse;
interface GetOperationDocumentsStatus404Properties {
    status: 404;
    body: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus429Response = GetOperationDocumentsStatus429Properties & PipelineResponse;
interface GetOperationDocumentsStatus429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus500Response = GetOperationDocumentsStatus500Properties & PipelineResponse;
interface GetOperationDocumentsStatus500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type GetOperationDocumentsStatus503Response = GetOperationDocumentsStatus503Properties & PipelineResponse;
interface GetOperationDocumentsStatus503Properties {
    status: 503;
    body: ErrorResponseV2;
}
export declare type GetDocumentFormats200Response = GetDocumentFormats200Properties & PipelineResponse;
interface GetDocumentFormats200Properties {
    status: 200;
    body: FileFormatListResult;
}
export declare type GetDocumentFormats429Response = GetDocumentFormats429Properties & PipelineResponse;
interface GetDocumentFormats429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type GetDocumentFormats500Response = GetDocumentFormats500Properties & PipelineResponse;
interface GetDocumentFormats500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type GetDocumentFormats503Response = GetDocumentFormats503Properties & PipelineResponse;
interface GetDocumentFormats503Properties {
    status: 503;
    body: ErrorResponseV2;
}
export declare type GetGlossaryFormats200Response = GetGlossaryFormats200Properties & PipelineResponse;
interface GetGlossaryFormats200Properties {
    status: 200;
    body: FileFormatListResult;
}
export declare type GetGlossaryFormats429Response = GetGlossaryFormats429Properties & PipelineResponse;
interface GetGlossaryFormats429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type GetGlossaryFormats500Response = GetGlossaryFormats500Properties & PipelineResponse;
interface GetGlossaryFormats500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type GetGlossaryFormats503Response = GetGlossaryFormats503Properties & PipelineResponse;
interface GetGlossaryFormats503Properties {
    status: 503;
    body: ErrorResponseV2;
}
export declare type GetDocumentStorageSource200Response = GetDocumentStorageSource200Properties & PipelineResponse;
interface GetDocumentStorageSource200Properties {
    status: 200;
    body: StorageSourceListResult;
}
export declare type GetDocumentStorageSource429Response = GetDocumentStorageSource429Properties & PipelineResponse;
interface GetDocumentStorageSource429Properties {
    status: 429;
    body: ErrorResponseV2;
}
export declare type GetDocumentStorageSource500Response = GetDocumentStorageSource500Properties & PipelineResponse;
interface GetDocumentStorageSource500Properties {
    status: 500;
    body: ErrorResponseV2;
}
export declare type GetDocumentStorageSource503Response = GetDocumentStorageSource503Properties & PipelineResponse;
interface GetDocumentStorageSource503Properties {
    status: 503;
    body: ErrorResponseV2;
}
export {};
//# sourceMappingURL=responses.d.ts.map