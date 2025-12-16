export interface BaseResponse<T> {
  data: T;
  isArray: boolean;
  path: string;
  method: string;
  duration: string;
  statusCode: number;
}
