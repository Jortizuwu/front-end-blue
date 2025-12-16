import type { BaseResponse } from "./response";

export interface ListUserReactions extends BaseResponse<Reaction[]> {
  id: string;
}
export interface Reaction {
  _id: string;
  userId: string;
  custom_id: string;
  createdAt: Date;
  reaction: ReactionType;
  updatedAt: Date;
  character: Character;
}

export type ReactionType = "LIKE" | "UNLIKE";
export type TargetType = "POKEMON" | "RICK_AND_MORTY" | "SUPER_HERO";

export interface Character {
  _id: string;
  custom_id: string;
  createdAt: Date;
  dislikesCount: number;
  idExternalApi: string;
  likesCount: number;
  type: TargetType;
  updatedAt: Date;
}
