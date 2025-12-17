import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/constans/query-keys";
import charactersServices from "@/shared/services/characters";
import type { CharactersResponse } from "@/shared/interfaces/characters.model";

interface UseGetRandomCharacterOptions {
  enabled?: boolean;
}

export function useGetMostLikeCharacter(options?: UseGetRandomCharacterOptions) {
  return useQuery<CharactersResponse>({
    queryKey: [QUERY_KEYS.CHARACTERS, "most-like"],
    queryFn: () => charactersServices.getMostLikedCharacter(),
    enabled: options?.enabled ?? true,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
