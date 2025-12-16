import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import charactersServices from "@/shared/services/characters";
import type { CreateCharacterRequest } from "@/shared/interfaces/characters.model";

export function useCreateCharacter() {
  const mutation = useMutation({
    mutationFn: (payload: CreateCharacterRequest) =>
      charactersServices.createCharacter(payload),

    onSuccess: () => {
      toast.success("Character created successfully");
    },

    onError: () => {
      toast.error("Failed to create character");
    },
  });

  return {
    createCharacter: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
