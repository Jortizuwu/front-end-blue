import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/shared/constans/query-keys";
import userServices from "@/shared/services/user";
import type { ListUserReactions } from "@/shared/interfaces/user.model";

interface UseListUserReactionsOptions {
  enabled?: boolean;
}

export function useListUserReactions(options?: UseListUserReactionsOptions) {
  return useQuery<ListUserReactions>({
    queryKey: [QUERY_KEYS.USER, "list"],
    queryFn: () => userServices.listReactions(),
    enabled: options?.enabled ?? true,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
