import type { BaseResponse } from "./response";

export interface CharactersResponse extends BaseResponse<Character> {
  id: string;
}
export interface Character {
  id: string;
  name: string;
  image: string;
  origin: string;
  extra: Record<string, string | number>;
}
