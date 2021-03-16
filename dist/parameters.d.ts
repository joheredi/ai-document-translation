import { BatchSubmissionRequest } from "./models";
import { RawHttpHeaders } from "@azure/core-https";
export declare type RequestParameters = {
    timeout?: number;
    headers?: RawHttpHeaders;
    body?: unknown;
    queryParameters?: {
        [key: string]: any;
    };
};
interface SubmitBatchRequestBodyParam {
    body: BatchSubmissionRequest;
}
export declare type SubmitBatchRequestParameters = RequestParameters & SubmitBatchRequestBodyParam;
interface GetOperationsQueryParamProperties {
    $top?: number;
    $skip?: number;
}
interface GetOperationsQueryParam {
    queryParameters?: GetOperationsQueryParamProperties;
}
export declare type GetOperationsParameters = RequestParameters & GetOperationsQueryParam;
export declare type GetDocumentStatusParameters = RequestParameters;
export declare type GetOperationStatusParameters = RequestParameters;
export declare type CancelOperationParameters = RequestParameters;
interface GetOperationDocumentsStatusQueryParamProperties {
    $top?: number;
    $skip?: number;
}
interface GetOperationDocumentsStatusQueryParam {
    queryParameters?: GetOperationDocumentsStatusQueryParamProperties;
}
export declare type GetOperationDocumentsStatusParameters = RequestParameters & GetOperationDocumentsStatusQueryParam;
export {};
//# sourceMappingURL=parameters.d.ts.map