import { api } from "../api";
import type { CharactersResponse } from "../interfaces/characters.model";

const charactersServices = {
  getRandomCharacter: async () => {
    const req = await api.get<CharactersResponse>(`/characters/random`);
    return req.data;
  },
};

export default charactersServices;
