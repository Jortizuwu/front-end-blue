import { api } from "../api";
import type {
  CharactersAllDataResponse,
  CharactersResponse,
  CreateCharacterRequest,
} from "../interfaces/characters.model";

const charactersServices = {
  getRandomCharacter: async () => {
    const response = await api.get<CharactersResponse>(`/characters/random`);
    return response.data;
  },

  findCharacterByName: async (name: string) => {
    const response = await api.get<CharactersAllDataResponse>(
      `/characters/search?name=${name}`
    );
    return response.data;
  },

  getMostLikedCharacter: async () => {
    const response = await api.get<CharactersAllDataResponse>(
      `/characters/most-liked`
    );
    return response.data;
  },

  getMostDislikedCharacter: async () => {
    const response = await api.get<CharactersAllDataResponse>(
      `/characters/most-disliked`
    );
    return response.data;
  },

  getMostRecentReactionCharacter: async () => {
    const response = await api.get<CharactersAllDataResponse>(
      `reactions/last-reacted`
    );
    return response.data;
  },

  createCharacter: async (request: CreateCharacterRequest) => {
    const response = await api.post<CharactersResponse>(`/characters/create`, {
      ...request,
    });
    return response.data;
  },
};

export default charactersServices;
