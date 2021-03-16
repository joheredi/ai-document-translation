import { PipelineOptions } from "@azure/core-https";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { AnyRequired } from "./helperTypes";
import { SubmitBatchRequestParameters, GetOperationsParameters, GetDocumentStatusParameters, GetOperationStatusParameters, CancelOperationParameters, GetOperationDocumentsStatusParameters, RequestParameters } from "./parameters";
import { SubmitBatchRequest202Response, SubmitBatchRequest400Response, SubmitBatchRequest401Response, SubmitBatchRequest429Response, SubmitBatchRequest500Response, SubmitBatchRequest503Response, GetOperations200Response, GetOperations400Response, GetOperations401Response, GetOperations429Response, GetOperations500Response, GetOperations503Response, GetDocumentStatus200Response, GetDocumentStatus401Response, GetDocumentStatus404Response, GetDocumentStatus429Response, GetDocumentStatus500Response, GetDocumentStatus503Response, GetOperationStatus200Response, GetOperationStatus401Response, GetOperationStatus404Response, GetOperationStatus429Response, GetOperationStatus500Response, GetOperationStatus503Response, CancelOperation200Response, CancelOperation401Response, CancelOperation404Response, CancelOperation429Response, CancelOperation500Response, CancelOperation503Response, GetOperationDocumentsStatus200Response, GetOperationDocumentsStatus400Response, GetOperationDocumentsStatus401Response, GetOperationDocumentsStatus404Response, GetOperationDocumentsStatus429Response, GetOperationDocumentsStatus500Response, GetOperationDocumentsStatus503Response, GetDocumentFormats200Response, GetDocumentFormats429Response, GetDocumentFormats500Response, GetDocumentFormats503Response, GetGlossaryFormats200Response, GetGlossaryFormats429Response, GetGlossaryFormats500Response, GetGlossaryFormats503Response, GetDocumentStorageSource200Response, GetDocumentStorageSource429Response, GetDocumentStorageSource500Response, GetDocumentStorageSource503Response, RequestUncheckedResponse } from "./responses";
/**
 * Definition of each operation to help building their types
 */
interface Routes {
    "POST /batches": {
        options: SubmitBatchRequestParameters;
        response: Promise<SubmitBatchRequest202Response | SubmitBatchRequest400Response | SubmitBatchRequest401Response | SubmitBatchRequest429Response | SubmitBatchRequest500Response | SubmitBatchRequest503Response>;
        pathParameters: [];
    };
    "GET /batches": {
        options: GetOperationsParameters;
        response: Promise<GetOperations200Response | GetOperations400Response | GetOperations401Response | GetOperations429Response | GetOperations500Response | GetOperations503Response>;
        pathParameters: [];
    };
    "GET /batches/:id/documents/:documentId": {
        options: GetDocumentStatusParameters;
        response: Promise<GetDocumentStatus200Response | GetDocumentStatus401Response | GetDocumentStatus404Response | GetDocumentStatus429Response | GetDocumentStatus500Response | GetDocumentStatus503Response>;
        pathParameters: [string, string];
    };
    "GET /batches/:id": {
        options: GetOperationStatusParameters;
        response: Promise<GetOperationStatus200Response | GetOperationStatus401Response | GetOperationStatus404Response | GetOperationStatus429Response | GetOperationStatus500Response | GetOperationStatus503Response>;
        pathParameters: [string];
    };
    "DELETE /batches/:id": {
        options: CancelOperationParameters;
        response: Promise<CancelOperation200Response | CancelOperation401Response | CancelOperation404Response | CancelOperation429Response | CancelOperation500Response | CancelOperation503Response>;
        pathParameters: [string];
    };
    "GET /batches/:id/documents": {
        options: GetOperationDocumentsStatusParameters;
        response: Promise<GetOperationDocumentsStatus200Response | GetOperationDocumentsStatus400Response | GetOperationDocumentsStatus401Response | GetOperationDocumentsStatus404Response | GetOperationDocumentsStatus429Response | GetOperationDocumentsStatus500Response | GetOperationDocumentsStatus503Response>;
        pathParameters: [string];
    };
    "GET /documents/formats": {
        options: RequestParameters;
        response: Promise<GetDocumentFormats200Response | GetDocumentFormats429Response | GetDocumentFormats500Response | GetDocumentFormats503Response>;
        pathParameters: [];
    };
    "GET /glossaries/formats": {
        options: RequestParameters;
        response: Promise<GetGlossaryFormats200Response | GetGlossaryFormats429Response | GetGlossaryFormats500Response | GetGlossaryFormats503Response>;
        pathParameters: [];
    };
    "GET /storagesources": {
        options: RequestParameters;
        response: Promise<GetDocumentStorageSource200Response | GetDocumentStorageSource429Response | GetDocumentStorageSource500Response | GetDocumentStorageSource503Response>;
        pathParameters: [];
    };
}
declare type RouteParams<TRoute extends string> = TRoute extends `${infer _Head}{${infer _Param}}${infer Tail}` ? [pathParam: string, ...pathParam: RouteParams<Tail>] : TRoute extends `${infer _Head}{${infer _Param}}` ? [string] : [];
/**
 * Calculates the type of the options bag, also decides if it needs to be marked as required or optional.
 */
declare type RequestOptions<T extends keyof Routes> = AnyRequired<Routes[T]["options"]> extends false ? [options?: Routes[T]["options"]] : [options: Routes[T]["options"]];
/**
 * Request operation's arguments.
 * These arguments can be positional parameters to fill in the path template,
 * and also figures out if the options parameter should be marked as required or not
 * depending of whether or not there is a required property in the options
 */
declare type RequestArgs<T extends keyof Routes> = Routes[T]["pathParameters"] extends [
] ? RequestOptions<T> : AnyRequired<Routes[T]["options"]> extends false ? [
    ...pathParameters: Routes[T]["pathParameters"],
    options?: Routes[T]["options"]
] : [
    ...pathParameters: Routes[T]["pathParameters"],
    options: Routes[T]["options"]
];
/**
 * Type of the requestUnchecked function parameters. Figures out if it needs to add positional parameters for
 * filling out pathParameters by parsing the route string.
 */
declare type RequestUncheckedArgs<T extends string> = [
    ...pathParameters: RouteParams<T>,
    options?: RequestParameters
];
/**
 * Definition of the request function, it can include positional parameters
 * to fill out the url template.
 * It also adds the options bag to provide a body, queryParameters or headers
 */
declare type Request = {
    <T extends keyof Routes>(route: T, ...args: RequestArgs<T>): Routes[T]["response"];
};
/**
 * Definition of the requestUnchecked function, it can include positional parameters
 * to fill out the url template, by parsing the route provided.
 * It als adds an optional options bag to provide a body, queryParameters or headers
 */
declare type RequestUnchecked = {
    <T extends string>(route: T, ...args: RequestUncheckedArgs<T>): Promise<RequestUncheckedResponse>;
};
/**
 * Interface that defines the BatchDocumentTranslation client
 */
export interface BatchDocumentTranslationVerbFirst {
    request: Request;
    requestUnchecked: RequestUnchecked;
}
export declare function createBatchDocumentTranslationVerbFirst(endpoint: string, credentials: TokenCredential | KeyCredential, options?: PipelineOptions): BatchDocumentTranslationVerbFirst;
export {};
//# sourceMappingURL=batchDocumentTranslationVerbFirst.d.ts.map