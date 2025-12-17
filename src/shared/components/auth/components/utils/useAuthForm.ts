import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import authServices from "@/shared/services/auth";
import { useAuthStore } from "@/store/auth";
import { getAuthSchema, type AuthFormType } from "./schemas";

const getInitialValues = (mode: "login" | "register") => ({
  username: "",
  password: "",
  ...(mode === "register" && { confirmPassword: "" }),
});

export function useAuthForm(
  mode: "login" | "register",
  onSuccess?: () => void
) {
  const { setToken } = useAuthStore();

  const login = useCallback(
    async (data: AuthFormType) => {
      const { username, password } = data;

      const {
        data: { accessToken },
      } = await authServices.login(username, password);

      window.sessionStorage.setItem("token", accessToken);
      setToken(accessToken);

      toast.success("Iniciando sesión", {
        style: { background: "#6FCF97", color: "#fff" },
      });
    },
    [setToken]
  );

  const register = useCallback(async (data: AuthFormType) => {
    const { username, password } = data;

    await authServices.register(username, password);

    toast.success("Registro exitoso", {
      description: "Cuenta creada correctamente",
      style: { background: "#6FCF97", color: "#fff" },
    });
  }, []);

  const mutationFn = mode === "login" ? login : register;

  const {
    mutateAsync: submit,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn,
    onSuccess: () => {
      onSuccess?.();
    },
    onError: () => {
      toast.error(
        mode === "login" ? "Error al iniciar sesión" : "Error al registrar",
        {
          style: { background: "#E67071", color: "#fff" },
        }
      );
    },
  });

  return {
    schema: getAuthSchema(mode),
    isLoading,
    isSuccess,
    submit,
    formValues: {
      defaultValues: getInitialValues(mode),
    },
  };
}
