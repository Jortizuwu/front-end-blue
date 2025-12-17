import { api } from "../api";
import type {
  CharactersResponse,
  CreateCharacterRequest,
} from "../interfaces/characters.model";

const charactersServices = {
  getRandomCharacter: async () => {
    const response = await api.get<CharactersResponse>(`/characters/random`);
    return response.data;
  },

  findCharacterByName: async (name: string) => {
    const response = await api.get<CharactersResponse>(
      `/characters/search?name=${name}`
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
