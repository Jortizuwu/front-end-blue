import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es obligatorio"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export const RegisterSchema = LoginSchema.extend({
  confirmPassword: z.string().min(1, "Confirma tu contraseña"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Las contraseñas no coinciden",
});

export const getAuthSchema = (mode: "login" | "register") =>
  mode === "login" ? LoginSchema : RegisterSchema;

export type LoginFormType = z.infer<typeof LoginSchema>;
export type RegisterFormType = z.infer<typeof RegisterSchema>;
export type AuthFormType = LoginFormType | RegisterFormType;
