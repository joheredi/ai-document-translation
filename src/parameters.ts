import { BatchSubmissionRequest } from "./models";
import { RawHttpHeaders } from "@azure/core-https";

export type RequestParameters = {
  timeout?: number;
  headers?: RawHttpHeaders;
  body?: unknown;
  queryParameters?: { [key: string]: any };
};

interface SubmitBatchRequestBodyParam {
  body: BatchSubmissionRequest;
}

export type SubmitBatchRequestParameters = RequestParameters &
  SubmitBatchRequestBodyParam;

interface GetOperationsQueryParamProperties {
  $top?: number;
  $skip?: number;
}

interface GetOperationsQueryParam {
  queryParameters?: GetOperationsQueryParamProperties;
}

export type GetOperationsParameters = RequestParameters &
  GetOperationsQueryParam;
export type GetDocumentStatusParameters = RequestParameters;
export type GetOperationStatusParameters = RequestParameters;
export type CancelOperationParameters = RequestParameters;

interface GetOperationDocumentsStatusQueryParamProperties {
  $top?: number;
  $skip?: number;
}

interface GetOperationDocumentsStatusQueryParam {
  queryParameters?: GetOperationDocumentsStatusQueryParamProperties;
}

export type GetOperationDocumentsStatusParameters = RequestParameters &
  GetOperationDocumentsStatusQueryParam;
