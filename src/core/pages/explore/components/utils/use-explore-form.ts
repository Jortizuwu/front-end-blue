import { useCallback, useState } from "react";
import charactersServices from "@/shared/services/characters";

import type { Character } from "@/shared/interfaces/user.model";
import { toast } from "sonner";
import { AxiosError } from "axios";

export function useExploreForm() {
  const [data, setData] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = useCallback(async (query: string) => {
    try {
      setIsLoading(true);
      setData(null);

      const response = await charactersServices.findCharacterByName(query);
      setData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || "character not found", {
          style: { background: "#E67071", color: "#fff" },
        });
        return;
      }

      toast.error("character not found", {
        style: { background: "#E67071", color: "#fff" },
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    search,
    data,
    isLoading,
  };
}
