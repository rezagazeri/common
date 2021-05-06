/**
 * @description IErrorResponse for http error response.
 */
export interface IErrorResponse {
  readonly code: number;
  readonly timestamp: string;
  readonly path?: string;
  readonly method?: string;
  readonly message: any;
}
