import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/constans/query-keys";
import charactersServices from "@/shared/services/characters";
import type { CharactersAllDataResponse } from "@/shared/interfaces/characters.model";

interface UseGetMostRecentReactionOptions {
  enabled?: boolean;
}

export function useGetMostRecentReactionCharacter(
  options?: UseGetMostRecentReactionOptions
) {
  return useQuery<CharactersAllDataResponse>({
    queryKey: [QUERY_KEYS.REACTIONS, "most-recent"],
    queryFn: () => charactersServices.getMostRecentReactionCharacter(),
    enabled: options?.enabled ?? true,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
