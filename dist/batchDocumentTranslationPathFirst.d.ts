import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { PipelineOptions, PipelineResponse } from "@azure/core-https";
import { SubmitBatchRequestParameters, GetOperationsParameters, GetDocumentStatusParameters, GetOperationStatusParameters, CancelOperationParameters, GetOperationDocumentsStatusParameters, RequestParameters } from "./parameters";
import { SubmitBatchRequest202Response, SubmitBatchRequest400Response, SubmitBatchRequest401Response, SubmitBatchRequest429Response, SubmitBatchRequest500Response, SubmitBatchRequest503Response, GetOperations200Response, GetOperations400Response, GetOperations401Response, GetOperations429Response, GetOperations500Response, GetOperations503Response, GetDocumentStatus200Response, GetDocumentStatus401Response, GetDocumentStatus404Response, GetDocumentStatus429Response, GetDocumentStatus500Response, GetDocumentStatus503Response, GetOperationStatus200Response, GetOperationStatus401Response, GetOperationStatus404Response, GetOperationStatus429Response, GetOperationStatus500Response, GetOperationStatus503Response, CancelOperation200Response, CancelOperation401Response, CancelOperation404Response, CancelOperation429Response, CancelOperation500Response, CancelOperation503Response, GetOperationDocumentsStatus200Response, GetOperationDocumentsStatus400Response, GetOperationDocumentsStatus401Response, GetOperationDocumentsStatus404Response, GetOperationDocumentsStatus429Response, GetOperationDocumentsStatus500Response, GetOperationDocumentsStatus503Response, GetDocumentFormats200Response, GetDocumentFormats429Response, GetDocumentFormats500Response, GetDocumentFormats503Response, GetGlossaryFormats200Response, GetGlossaryFormats429Response, GetGlossaryFormats500Response, GetGlossaryFormats503Response, GetDocumentStorageSource200Response, GetDocumentStorageSource429Response, GetDocumentStorageSource500Response, GetDocumentStorageSource503Response } from "./responses";
interface Routes {
    "/batches": {
        post(options?: SubmitBatchRequestParameters): Promise<SubmitBatchRequest202Response | SubmitBatchRequest400Response | SubmitBatchRequest401Response | SubmitBatchRequest429Response | SubmitBatchRequest500Response | SubmitBatchRequest503Response>;
        get(options?: GetOperationsParameters): Promise<GetOperations200Response | GetOperations400Response | GetOperations401Response | GetOperations429Response | GetOperations500Response | GetOperations503Response>;
    };
    "/batches/:id/documents/:documentId": {
        get(options?: GetDocumentStatusParameters): Promise<GetDocumentStatus200Response | GetDocumentStatus401Response | GetDocumentStatus404Response | GetDocumentStatus429Response | GetDocumentStatus500Response | GetDocumentStatus503Response>;
    };
    "/batches/:id": {
        get(options?: GetOperationStatusParameters): Promise<GetOperationStatus200Response | GetOperationStatus401Response | GetOperationStatus404Response | GetOperationStatus429Response | GetOperationStatus500Response | GetOperationStatus503Response>;
        delete(options?: CancelOperationParameters): Promise<CancelOperation200Response | CancelOperation401Response | CancelOperation404Response | CancelOperation429Response | CancelOperation500Response | CancelOperation503Response>;
    };
    "/batches/:id/documents": {
        get(options?: GetOperationDocumentsStatusParameters): Promise<GetOperationDocumentsStatus200Response | GetOperationDocumentsStatus400Response | GetOperationDocumentsStatus401Response | GetOperationDocumentsStatus404Response | GetOperationDocumentsStatus429Response | GetOperationDocumentsStatus500Response | GetOperationDocumentsStatus503Response>;
    };
    "/documents/formats": {
        get(options?: RequestParameters): Promise<GetDocumentFormats200Response | GetDocumentFormats429Response | GetDocumentFormats500Response | GetDocumentFormats503Response>;
    };
    "/glossaries/formats": {
        get(options?: RequestParameters): Promise<GetGlossaryFormats200Response | GetGlossaryFormats429Response | GetGlossaryFormats500Response | GetGlossaryFormats503Response>;
    };
    "/storagesources": {
        get(options?: RequestParameters): Promise<GetDocumentStorageSource200Response | GetDocumentStorageSource429Response | GetDocumentStorageSource500Response | GetDocumentStorageSource503Response>;
    };
}
declare type RouteParams<TRoute extends string> = TRoute extends `:${infer _Param}/${infer Tail}` ? [string, ...RouteParams<Tail>] : TRoute extends `:${infer _Param}` ? [string] : TRoute extends `${infer _Prefix}:${infer Tail}` ? RouteParams<`:${Tail}`> : [];
declare type PathClient = <T extends keyof Routes>(path: T, ...args: RouteParams<T>) => PathReturn<T>;
declare type PathUncheckedResponse = PipelineResponse & {
    body: any;
};
declare type PathUnchecked = <T extends string>(path: T, ...args: RouteParams<T>) => {
    post(options?: RequestParameters): Promise<PathUncheckedResponse>;
    put(options?: RequestParameters): Promise<PathUncheckedResponse>;
    patch(options?: RequestParameters): Promise<PathUncheckedResponse>;
    get(options?: RequestParameters): Promise<PathUncheckedResponse>;
    delete(options?: RequestParameters): Promise<PathUncheckedResponse>;
};
export declare type BatchDocumentTranslationPathFirst = (creds: TokenCredential | KeyCredential, endpoint: string, options?: PipelineOptions) => {
    path: PathClient;
    pathUnckecked: PathUnchecked;
};
/**
 * Path return contains subclients if there are any subpaths available
 * Plus all the verbs supported by the path
 */
declare type PathReturn<T extends keyof Routes> = AllSubPaths<T> extends never ? Routes[T] : {
    subClient: <SubPath extends AllSubPaths<T>>(subPath: SubPath, ...args: RouteParams<SubPath>) => `${T}${SubPath}` extends keyof Routes ? PathReturn<`${T}${SubPath}`> : never;
} & Routes[T];
/** Gets all leaf nodes starting from BasePath */
declare type AllSubPaths<BasePath extends keyof Routes> = HasSubPaths<BasePath, keyof Routes>;
declare type HasSubPaths<BasePath extends keyof Routes, LeafRoutes extends keyof Routes> = LeafRoutes extends `${BasePath}/${infer SubRoute}` ? `/${SubRoute}` : never;
export declare const createBatchDocumentTranslationPathFirst: BatchDocumentTranslationPathFirst;
export {};
//# sourceMappingURL=batchDocumentTranslationPathFirst.d.ts.map