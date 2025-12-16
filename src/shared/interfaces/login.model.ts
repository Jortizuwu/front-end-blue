import type { BaseResponse } from "./response";

export interface LoginResponse
  extends BaseResponse<{
    accessToken: string;
  }> {
  accessToken: string;
}
