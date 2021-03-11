import { HttpHeaders } from "@azure/core-https";
import { KeyCredential } from "@azure/core-auth";
import { PipelineOptions } from "@azure/core-https";
import { PipelineResponse as PipelineResponse_2 } from "@azure/core-https";
import { TokenCredential } from "@azure/core-auth";

/** Gets all leaf nodes starting from BasePath */
declare type AllSubPaths<BasePath extends keyof Routes_2> = HasSubPaths<
  BasePath,
  keyof Routes_2
>;

declare type AnyRequired<T> = {} extends T ? false : true;

export declare type BatchDocumentTranslationPathFirst = (
  creds: TokenCredential | KeyCredential,
  endpoint: string,
  options?: PipelineOptions
) => {
  path: PathClient;
  pathUnckecked: PathUnchecked;
};

/**
 * Interface that defines the BatchDocumentTranslation client
 */
export declare interface BatchDocumentTranslationVerbFirst {
  request: Request_2;
  requestUnchecked: RequestUnchecked;
}

export declare interface BatchRequest {
  source: SourceInput;
  targets: TargetInput[];
  storageType?: StorageInputType;
}

export declare interface BatchStatusDetail {
  id: string;
  createdDateTimeUtc: Date;
  lastActionDateTimeUtc: Date;
  status: Status;
  error?: ErrorV2;
  summary: StatusSummary;
}

export declare interface BatchStatusResponse {
  value: BatchStatusDetail[];
  nextLink?: string;
}

export declare interface BatchSubmissionRequest {
  inputs: BatchRequest[];
}

declare interface CancelOperation200Properties {
  status: 200;
  body: BatchStatusDetail;
}

export declare type CancelOperation200Response = CancelOperation200Properties &
  PipelineResponse;

declare interface CancelOperation401Properties {
  status: 401;
  body: ErrorResponseV2;
}

export declare type CancelOperation401Response = CancelOperation401Properties &
  PipelineResponse;

declare interface CancelOperation404Properties {
  status: 404;
  body: ErrorResponseV2;
}

export declare type CancelOperation404Response = CancelOperation404Properties &
  PipelineResponse;

declare interface CancelOperation429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type CancelOperation429Response = CancelOperation429Properties &
  PipelineResponse;

declare interface CancelOperation500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type CancelOperation500Response = CancelOperation500Properties &
  PipelineResponse;

declare interface CancelOperation503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type CancelOperation503Response = CancelOperation503Properties &
  PipelineResponse;

export declare type CancelOperationParameters = RequestParameters;

export declare const createBatchDocumentTranslationPathFirst: BatchDocumentTranslationPathFirst;

export declare function createBatchDocumentTranslationVerbFirst(
  credentials: TokenCredential | KeyCredential,
  endpoint: string,
  options?: PipelineOptions
): BatchDocumentTranslationVerbFirst;

export declare interface DocumentFilter {
  prefix?: string;
  suffix?: string;
}

export declare interface DocumentStatusDetail {
  path: string;
  createdDateTimeUtc: Date;
  lastActionDateTimeUtc: Date;
  status: Status;
  to: string;
  error?: ErrorV2;
  progress: number;
  id: string;
  characterCharged?: number;
}

export declare interface DocumentStatusResponse {
  value: DocumentStatusDetail[];
  nextLink?: string;
}

export declare type ErrorCodeV2 = string;

export declare interface ErrorResponseV2 {
  error?: ErrorV2;
}

export declare interface ErrorV2 {
  code?: ErrorCodeV2;
  message: string;
  target?: string;
  innerError?: InnerErrorV2;
}

export declare interface FileFormat {
  format?: string;
  fileExtensions?: string[];
  contentTypes?: string[];
  versions?: string[];
}

export declare interface FileFormatListResult {
  value: FileFormat[];
}

declare interface GetDocumentFormats200Properties {
  status: 200;
  body: FileFormatListResult;
}

export declare type GetDocumentFormats200Response = GetDocumentFormats200Properties &
  PipelineResponse;

declare interface GetDocumentFormats429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type GetDocumentFormats429Response = GetDocumentFormats429Properties &
  PipelineResponse;

declare interface GetDocumentFormats500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type GetDocumentFormats500Response = GetDocumentFormats500Properties &
  PipelineResponse;

declare interface GetDocumentFormats503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type GetDocumentFormats503Response = GetDocumentFormats503Properties &
  PipelineResponse;

declare interface GetDocumentStatus200Headers {
  "Retry-After"?: string;
  ETag?: string;
}

declare interface GetDocumentStatus200Properties {
  status: 200;
  body: DocumentStatusDetail;
  headers: GetDocumentStatus200Headers & HttpHeaders;
}

export declare type GetDocumentStatus200Response = GetDocumentStatus200Properties &
  PipelineResponse;

declare interface GetDocumentStatus401Properties {
  status: 401;
  body: ErrorResponseV2;
}

export declare type GetDocumentStatus401Response = GetDocumentStatus401Properties &
  PipelineResponse;

declare interface GetDocumentStatus404Properties {
  status: 404;
  body: ErrorResponseV2;
}

export declare type GetDocumentStatus404Response = GetDocumentStatus404Properties &
  PipelineResponse;

declare interface GetDocumentStatus429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type GetDocumentStatus429Response = GetDocumentStatus429Properties &
  PipelineResponse;

declare interface GetDocumentStatus500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type GetDocumentStatus500Response = GetDocumentStatus500Properties &
  PipelineResponse;

declare interface GetDocumentStatus503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type GetDocumentStatus503Response = GetDocumentStatus503Properties &
  PipelineResponse;

export declare type GetDocumentStatusParameters = RequestParameters;

declare interface GetDocumentStorageSource200Properties {
  status: 200;
  body: StorageSourceListResult;
}

export declare type GetDocumentStorageSource200Response = GetDocumentStorageSource200Properties &
  PipelineResponse;

declare interface GetDocumentStorageSource429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type GetDocumentStorageSource429Response = GetDocumentStorageSource429Properties &
  PipelineResponse;

declare interface GetDocumentStorageSource500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type GetDocumentStorageSource500Response = GetDocumentStorageSource500Properties &
  PipelineResponse;

declare interface GetDocumentStorageSource503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type GetDocumentStorageSource503Response = GetDocumentStorageSource503Properties &
  PipelineResponse;

declare interface GetGlossaryFormats200Properties {
  status: 200;
  body: FileFormatListResult;
}

export declare type GetGlossaryFormats200Response = GetGlossaryFormats200Properties &
  PipelineResponse;

declare interface GetGlossaryFormats429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type GetGlossaryFormats429Response = GetGlossaryFormats429Properties &
  PipelineResponse;

declare interface GetGlossaryFormats500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type GetGlossaryFormats500Response = GetGlossaryFormats500Properties &
  PipelineResponse;

declare interface GetGlossaryFormats503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type GetGlossaryFormats503Response = GetGlossaryFormats503Properties &
  PipelineResponse;

declare interface GetOperationDocumentsStatus200Headers {
  "Retry-After"?: string;
  ETag?: string;
}

declare interface GetOperationDocumentsStatus200Properties {
  status: 200;
  body: DocumentStatusResponse;
  headers: GetOperationDocumentsStatus200Headers & HttpHeaders;
}

export declare type GetOperationDocumentsStatus200Response = GetOperationDocumentsStatus200Properties &
  PipelineResponse;

declare interface GetOperationDocumentsStatus400Properties {
  status: 400;
  body: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus400Response = GetOperationDocumentsStatus400Properties &
  PipelineResponse;

declare interface GetOperationDocumentsStatus401Properties {
  status: 401;
  body: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus401Response = GetOperationDocumentsStatus401Properties &
  PipelineResponse;

declare interface GetOperationDocumentsStatus404Properties {
  status: 404;
  body: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus404Response = GetOperationDocumentsStatus404Properties &
  PipelineResponse;

declare interface GetOperationDocumentsStatus429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus429Response = GetOperationDocumentsStatus429Properties &
  PipelineResponse;

declare interface GetOperationDocumentsStatus500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus500Response = GetOperationDocumentsStatus500Properties &
  PipelineResponse;

declare interface GetOperationDocumentsStatus503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus503Response = GetOperationDocumentsStatus503Properties &
  PipelineResponse;

export declare type GetOperationDocumentsStatusParameters = RequestParameters &
  GetOperationDocumentsStatusQueryParam;

declare interface GetOperationDocumentsStatusQueryParam {
  queryParameters?: GetOperationDocumentsStatusQueryParamProperties;
}

declare interface GetOperationDocumentsStatusQueryParamProperties {
  $top?: number;
  $skip?: number;
}

declare interface GetOperations200Headers {
  "Retry-After"?: string;
  ETag?: string;
}

declare interface GetOperations200Properties {
  status: 200;
  body: BatchStatusResponse;
  headers: GetOperations200Headers & HttpHeaders;
}

export declare type GetOperations200Response = GetOperations200Properties &
  PipelineResponse;

declare interface GetOperations400Properties {
  status: 400;
  body: ErrorResponseV2;
}

export declare type GetOperations400Response = GetOperations400Properties &
  PipelineResponse;

declare interface GetOperations401Properties {
  status: 401;
  body: ErrorResponseV2;
}

export declare type GetOperations401Response = GetOperations401Properties &
  PipelineResponse;

declare interface GetOperations429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type GetOperations429Response = GetOperations429Properties &
  PipelineResponse;

declare interface GetOperations500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type GetOperations500Response = GetOperations500Properties &
  PipelineResponse;

declare interface GetOperations503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type GetOperations503Response = GetOperations503Properties &
  PipelineResponse;

export declare type GetOperationsParameters = RequestParameters &
  GetOperationsQueryParam;

declare interface GetOperationsQueryParam {
  queryParameters?: GetOperationsQueryParamProperties;
}

declare interface GetOperationsQueryParamProperties {
  $top?: number;
  $skip?: number;
}

declare interface GetOperationStatus200Headers {
  "Retry-After"?: string;
  ETag?: string;
}

declare interface GetOperationStatus200Properties {
  status: 200;
  body: BatchStatusDetail;
  headers: GetOperationStatus200Headers & HttpHeaders;
}

export declare type GetOperationStatus200Response = GetOperationStatus200Properties &
  PipelineResponse;

declare interface GetOperationStatus401Properties {
  status: 401;
  body: ErrorResponseV2;
}

export declare type GetOperationStatus401Response = GetOperationStatus401Properties &
  PipelineResponse;

declare interface GetOperationStatus404Properties {
  status: 404;
  body: ErrorResponseV2;
}

export declare type GetOperationStatus404Response = GetOperationStatus404Properties &
  PipelineResponse;

declare interface GetOperationStatus429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type GetOperationStatus429Response = GetOperationStatus429Properties &
  PipelineResponse;

declare interface GetOperationStatus500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type GetOperationStatus500Response = GetOperationStatus500Properties &
  PipelineResponse;

declare interface GetOperationStatus503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type GetOperationStatus503Response = GetOperationStatus503Properties &
  PipelineResponse;

export declare type GetOperationStatusParameters = RequestParameters;

export declare interface Glossary {
  glossaryUrl: string;
  format?: string;
  version?: string;
  storageSource?: StorageSource;
}

declare type HasSubPaths<
  BasePath extends keyof Routes_2,
  LeafRoutes extends keyof Routes_2
> = LeafRoutes extends `${BasePath}/${infer SubRoute}` ? `/${SubRoute}` : never;

export declare interface InnerErrorV2 {
  code: string;
  message: string;
  target?: string;
  innerError?: InnerErrorV2;
}

declare type PathClient = <T extends keyof Routes_2>(
  path: T,
  ...args: RouteParams_2<T>
) => PathReturn<T>;

/**
 * Path return contains subclients if there are any subpaths available
 * Plus all the verbs supported by the path
 */
declare type PathReturn<T extends keyof Routes_2> = AllSubPaths<T> extends never
  ? Routes_2[T]
  : {
      subClient: <SubPath extends AllSubPaths<T>>(
        subPath: SubPath,
        ...args: RouteParams_2<SubPath>
      ) => `${T}${SubPath}` extends keyof Routes_2
        ? PathReturn<`${T}${SubPath}`>
        : never;
    } & Routes_2[T];

declare type PathUnchecked = <T extends string>(
  path: T,
  ...args: RouteParams_2<T>
) => {
  post(options?: RequestParameters): Promise<PathUncheckedResponse>;
  put(options?: RequestParameters): Promise<PathUncheckedResponse>;
  patch(options?: RequestParameters): Promise<PathUncheckedResponse>;
  get(options?: RequestParameters): Promise<PathUncheckedResponse>;
  delete(options?: RequestParameters): Promise<PathUncheckedResponse>;
};

declare type PathUncheckedResponse = PipelineResponse_2 & {
  body: any;
};

export declare type PipelineResponse = PipelineResponse_2 & {
  body: unknown;
};

/**
 * Definition of the request function, it can include positional parameters
 * to fill out the url template.
 * It also adds the options bag to provide a body, queryParameters or headers
 */
declare type Request_2 = {
  <T extends keyof Routes>(
    route: T,
    ...args: RequestArgs<T>
  ): Routes[T]["response"];
};

/**
 * Request operation's arguments.
 * These arguments can be positional parameters to fill in the path template,
 * and also figures out if the options parameter should be marked as required or not
 * depending of whether or not there is a required property in the options
 */
declare type RequestArgs<
  T extends keyof Routes
> = Routes[T]["pathParameters"] extends []
  ? RequestOptions<T>
  : AnyRequired<Routes[T]["options"]> extends false
  ? [
      ...pathParameters: Routes[T]["pathParameters"],
      options?: Routes[T]["options"]
    ]
  : [
      ...pathParameters: Routes[T]["pathParameters"],
      options: Routes[T]["options"]
    ];

/**
 * Calculates the type of the options bag, also decides if it needs to be marked as required or optional.
 */
declare type RequestOptions<T extends keyof Routes> = AnyRequired<
  Routes[T]["options"]
> extends false
  ? [options?: Routes[T]["options"]]
  : [options: Routes[T]["options"]];

export declare type RequestParameters = {
  timeout?: number;
  headers?: HttpHeaders;
  body?: unknown;
  queryParameters?: {
    [key: string]: any;
  };
};

/**
 * Definition of the requestUnchecked function, it can include positional parameters
 * to fill out the url template, by parsing the route provided.
 * It als adds an optional options bag to provide a body, queryParameters or headers
 */
declare type RequestUnchecked = {
  <T extends string>(
    route: T,
    ...args: RequestUncheckedArgs<T>
  ): Promise<RequestUncheckedResponse>;
};

/**
 * Type of the requestUnchecked function parameters. Figures out if it needs to add positional parameters for
 * filling out pathParameters by parsing the route string.
 */
declare type RequestUncheckedArgs<T extends string> = [
  ...pathParameters: RouteParams<T>,
  options?: RequestParameters
];

export declare type RequestUncheckedResponse = PipelineResponse & {
  body: any;
};

declare type RouteParams<
  TRoute extends string
> = TRoute extends `${infer _Head}{${infer _Param}}${infer Tail}`
  ? [pathParam: string, ...pathParam: RouteParams<Tail>]
  : TRoute extends `${infer _Head}{${infer _Param}}`
  ? [string]
  : [];

declare type RouteParams_2<
  TRoute extends string
> = TRoute extends `:${infer _Param}/${infer Tail}`
  ? [string, ...RouteParams_2<Tail>]
  : TRoute extends `:${infer _Param}`
  ? [string]
  : TRoute extends `${infer _Prefix}:${infer Tail}`
  ? RouteParams_2<`:${Tail}`>
  : [];

/**
 * Definition of each operation to help building their types
 */
declare interface Routes {
  "POST /batches": {
    options: SubmitBatchRequestParameters;
    response: Promise<
      | SubmitBatchRequest202Response
      | SubmitBatchRequest400Response
      | SubmitBatchRequest401Response
      | SubmitBatchRequest429Response
      | SubmitBatchRequest500Response
      | SubmitBatchRequest503Response
    >;
    pathParameters: [];
  };
  "GET /batches": {
    options: GetOperationsParameters;
    response: Promise<
      | GetOperations200Response
      | GetOperations400Response
      | GetOperations401Response
      | GetOperations429Response
      | GetOperations500Response
      | GetOperations503Response
    >;
    pathParameters: [];
  };
  "GET /batches/:id/documents/:documentId": {
    options: GetDocumentStatusParameters;
    response: Promise<
      | GetDocumentStatus200Response
      | GetDocumentStatus401Response
      | GetDocumentStatus404Response
      | GetDocumentStatus429Response
      | GetDocumentStatus500Response
      | GetDocumentStatus503Response
    >;
    pathParameters: [string, string];
  };
  "GET /batches/:id": {
    options: GetOperationStatusParameters;
    response: Promise<
      | GetOperationStatus200Response
      | GetOperationStatus401Response
      | GetOperationStatus404Response
      | GetOperationStatus429Response
      | GetOperationStatus500Response
      | GetOperationStatus503Response
    >;
    pathParameters: [string];
  };
  "DELETE /batches/:id": {
    options: CancelOperationParameters;
    response: Promise<
      | CancelOperation200Response
      | CancelOperation401Response
      | CancelOperation404Response
      | CancelOperation429Response
      | CancelOperation500Response
      | CancelOperation503Response
    >;
    pathParameters: [string];
  };
  "GET /batches/:id/documents": {
    options: GetOperationDocumentsStatusParameters;
    response: Promise<
      | GetOperationDocumentsStatus200Response
      | GetOperationDocumentsStatus400Response
      | GetOperationDocumentsStatus401Response
      | GetOperationDocumentsStatus404Response
      | GetOperationDocumentsStatus429Response
      | GetOperationDocumentsStatus500Response
      | GetOperationDocumentsStatus503Response
    >;
    pathParameters: [string];
  };
  "GET /documents/formats": {
    options: RequestParameters;
    response: Promise<
      | GetDocumentFormats200Response
      | GetDocumentFormats429Response
      | GetDocumentFormats500Response
      | GetDocumentFormats503Response
    >;
    pathParameters: [];
  };
  "GET /glossaries/formats": {
    options: RequestParameters;
    response: Promise<
      | GetGlossaryFormats200Response
      | GetGlossaryFormats429Response
      | GetGlossaryFormats500Response
      | GetGlossaryFormats503Response
    >;
    pathParameters: [];
  };
  "GET /storagesources": {
    options: RequestParameters;
    response: Promise<
      | GetDocumentStorageSource200Response
      | GetDocumentStorageSource429Response
      | GetDocumentStorageSource500Response
      | GetDocumentStorageSource503Response
    >;
    pathParameters: [];
  };
}

declare interface Routes_2 {
  "/batches": {
    post(
      options?: SubmitBatchRequestParameters
    ): Promise<
      | SubmitBatchRequest202Response
      | SubmitBatchRequest400Response
      | SubmitBatchRequest401Response
      | SubmitBatchRequest429Response
      | SubmitBatchRequest500Response
      | SubmitBatchRequest503Response
    >;
    get(
      options?: GetOperationsParameters
    ): Promise<
      | GetOperations200Response
      | GetOperations400Response
      | GetOperations401Response
      | GetOperations429Response
      | GetOperations500Response
      | GetOperations503Response
    >;
  };
  "/batches/:id/documents/:documentId": {
    get(
      options?: GetDocumentStatusParameters
    ): Promise<
      | GetDocumentStatus200Response
      | GetDocumentStatus401Response
      | GetDocumentStatus404Response
      | GetDocumentStatus429Response
      | GetDocumentStatus500Response
      | GetDocumentStatus503Response
    >;
  };
  "/batches/:id": {
    get(
      options?: GetOperationStatusParameters
    ): Promise<
      | GetOperationStatus200Response
      | GetOperationStatus401Response
      | GetOperationStatus404Response
      | GetOperationStatus429Response
      | GetOperationStatus500Response
      | GetOperationStatus503Response
    >;
    delete(
      options?: CancelOperationParameters
    ): Promise<
      | CancelOperation200Response
      | CancelOperation401Response
      | CancelOperation404Response
      | CancelOperation429Response
      | CancelOperation500Response
      | CancelOperation503Response
    >;
  };
  "/batches/:id/documents": {
    get(
      options?: GetOperationDocumentsStatusParameters
    ): Promise<
      | GetOperationDocumentsStatus200Response
      | GetOperationDocumentsStatus400Response
      | GetOperationDocumentsStatus401Response
      | GetOperationDocumentsStatus404Response
      | GetOperationDocumentsStatus429Response
      | GetOperationDocumentsStatus500Response
      | GetOperationDocumentsStatus503Response
    >;
  };
  "/documents/formats": {
    get(
      options?: RequestParameters
    ): Promise<
      | GetDocumentFormats200Response
      | GetDocumentFormats429Response
      | GetDocumentFormats500Response
      | GetDocumentFormats503Response
    >;
  };
  "/glossaries/formats": {
    get(
      options?: RequestParameters
    ): Promise<
      | GetGlossaryFormats200Response
      | GetGlossaryFormats429Response
      | GetGlossaryFormats500Response
      | GetGlossaryFormats503Response
    >;
  };
  "/storagesources": {
    get(
      options?: RequestParameters
    ): Promise<
      | GetDocumentStorageSource200Response
      | GetDocumentStorageSource429Response
      | GetDocumentStorageSource500Response
      | GetDocumentStorageSource503Response
    >;
  };
}

export declare interface SourceInput {
  sourceUrl: string;
  filter?: DocumentFilter;
  language?: string;
  storageSource?: StorageSource;
}

export declare type Status = string;

export declare interface StatusSummary {
  total: number;
  failed: number;
  success: number;
  inProgress: number;
  notYetStarted: number;
  cancelled: number;
  totalCharacterCharged: number;
}

export declare type StorageInputType = string;

export declare type StorageSource = string;

export declare interface StorageSourceListResult {
  value: "" | "one";
}

declare interface SubmitBatchRequest202Headers {
  "operation-location"?: string;
}

declare interface SubmitBatchRequest202Properties {
  status: 202;
  headers: SubmitBatchRequest202Headers & HttpHeaders;
}

export declare type SubmitBatchRequest202Response = SubmitBatchRequest202Properties &
  PipelineResponse;

declare interface SubmitBatchRequest400Properties {
  status: 400;
  body: ErrorResponseV2;
}

export declare type SubmitBatchRequest400Response = SubmitBatchRequest400Properties &
  PipelineResponse;

declare interface SubmitBatchRequest401Properties {
  status: 401;
  body: ErrorResponseV2;
}

export declare type SubmitBatchRequest401Response = SubmitBatchRequest401Properties &
  PipelineResponse;

declare interface SubmitBatchRequest429Properties {
  status: 429;
  body: ErrorResponseV2;
}

export declare type SubmitBatchRequest429Response = SubmitBatchRequest429Properties &
  PipelineResponse;

declare interface SubmitBatchRequest500Properties {
  status: 500;
  body: ErrorResponseV2;
}

export declare type SubmitBatchRequest500Response = SubmitBatchRequest500Properties &
  PipelineResponse;

declare interface SubmitBatchRequest503Properties {
  status: 503;
  body: ErrorResponseV2;
}

export declare type SubmitBatchRequest503Response = SubmitBatchRequest503Properties &
  PipelineResponse;

declare interface SubmitBatchRequestBodyParam {
  body?: BatchSubmissionRequest;
}

export declare type SubmitBatchRequestParameters = RequestParameters &
  SubmitBatchRequestBodyParam;

export declare interface TargetInput {
  targetUrl: string;
  category?: string;
  language: string;
  glossaries?: Glossary[];
  storageSource?: StorageSource;
}

export {};
