import type { BaseResponse } from "./response";

export interface LoginResponse
  extends BaseResponse<{
    token: string;
  }> {
  token: string;
}
