import type { BaseResponse } from "./response";

export interface CharactersResponse extends BaseResponse<Character> {
  id: string;
}
export interface Character {
  id: string;
  name: string;
  image: string;
  origin: TargetType;
  extra: Record<string, string | number>;
}

export interface CreateCharacterRequest {
  idExternalApi: string;
  type: TargetType;
  reactionType: ReactionType;
  name: string;
  image: string;
}

export type ReactionType = "LIKE" | "UNLIKE";
export type TargetType = "POKEMON" | "RICK_AND_MORTY" | "SUPER_HERO";
