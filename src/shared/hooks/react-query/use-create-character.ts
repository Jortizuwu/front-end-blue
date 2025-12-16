import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import charactersServices from "@/shared/services/characters";
import type { CreateCharacterRequest } from "@/shared/interfaces/characters.model";
import { AxiosError } from "axios";

export function useCreateCharacter() {
  const mutation = useMutation({
    mutationFn: (payload: CreateCharacterRequest) =>
      charactersServices.createCharacter(payload),

    onSuccess: () => {
      toast.success("Reaction created successfully", {
        style: { background: "#6FCF97", color: "#fff" },
      });
    },

    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data.message || "Failed to create reaction",
          {
            style: { background: "#E67071", color: "#fff" },
          }
        );
        return;
      }

      toast.error("Failed to create reaction", {
        style: { background: "#E67071", color: "#fff" },
      });
    },
  });

  return {
    createCharacter: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
