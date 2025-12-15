import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared//components/ui/input";
import { Spinner } from "@/shared//components/ui/spinner";
import { FormSchema, useAuthForm, type FormType } from "./utils/useAuthForm";

export interface AuthFormProps {
  mode?: "login" | "register";
}
export function AuthForm({ mode = "login" }: AuthFormProps) {
  const { isLoading, submit, formValues } = useAuthForm(mode);

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: formValues.defaultValues,
  });

  const onSubmit = (data: FormType) => {
    submit(data);
  };

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <span>Loading ...</span>
      </div>
    );

  return (
    <div className={cn("grid gap-6")}>
      <form {...form} onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Field>
            <FieldLabel className="sr-only" htmlFor="username">
              Nombre de usuario
            </FieldLabel>
            <Input
              id="username"
              placeholder="Ingresa tu nombre de usuario"
              type="username"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              value={formValues.defaultValues.username}
            />
          </Field>

          <Field>
            <FieldLabel className="sr-only" htmlFor="password">
              Contraseña
            </FieldLabel>
            <Input
              id="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              value={formValues.defaultValues.password}
            />
          </Field>

          {mode === "register" && (
            <Field>
              <FieldLabel className="sr-only" htmlFor="confirmPassword">
                Confirmar contraseña
              </FieldLabel>
              <Input
                id="confirmPassword"
                placeholder="Confirma tu contraseña"
                type="password"
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                disabled={isLoading}
                value={formValues.defaultValues.password}
              />
            </Field>
          )}

          <Field>
            <Button disabled={isLoading}>
              {isLoading && <Spinner />}
              {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
