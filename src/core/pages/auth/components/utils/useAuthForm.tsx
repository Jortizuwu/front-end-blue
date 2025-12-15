import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "sonner";

import authServices from "@/shared/services/auth";
import { useAuthStore } from "@/store/auth";

export const FormSchema = z.object({
  username: z.string().min(1, {
    message: "El nombre de usuario es obligatorio",
  }),
  password: z.string().min(1, {
    message: "La contraseña es obligatoria",
  }),
});

export type FormType = z.infer<typeof FormSchema>;

const initialValues = {
  username: "",
  password: "",
};

export function useAuthForm(mode: "login" | "register") {
  const { setToken } = useAuthStore();

  const login = useCallback(
    async ({ username, password }: FormType) => {
      try {
        const { status } = await authServices.login(username, password);
        setToken({
          status: status,
        });

        toast("Iniciando sesión", {
          description: "Iniciando sesión",
          style: { background: "#6FCF97", color: "#fff" },
        });
      } catch (error) {
        toast("Error al iniciar sesión", {
          description: "error al iniciar sesión, intente de nuevo",
          style: { background: "#E67071", color: "#fff" },
        });
        console.error(error);
      }
    },
    [setToken]
  );

  const register = useCallback(
    async ({ username, password }: FormType) => {
      try {
        const { status } = await authServices.login(username, password);
        setToken({
          status: status,
        });
        toast("Registro exitoso", {
          description: "Cuenta creada correctamente",
          style: { background: "#6FCF97", color: "#fff" },
        });
      } catch (error) {
        toast("Error al registrar", {
          description: "error al registrar, intente de nuevo",
          style: { background: "#E67071", color: "#fff" },
        });
        console.error(error);
      }
    },
    [setToken]
  );

  const mutationFn = mode === "login" ? login : register;
  const { mutateAsync, isPending: isLoading } = useMutation({ mutationFn });
  return {
    isLoading,
    submit: mutateAsync,
    formValues: {
      defaultValues: initialValues,
    },
  };
}
