import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/shared/components/ui/form";

import { useAuthForm } from "./utils/useAuthForm";
import { AUTH_FIELDS } from "./utils/auth-form.config";

import {
  LoginSchema,
  RegisterSchema,
  type AuthFormType,
} from "./utils/schemas";

interface AuthFormProps {
  mode?: "login" | "register";
  onSuccess?: () => void;
}

export function AuthForm({ mode = "login", onSuccess }: AuthFormProps) {
  const { isLoading, submit, formValues } = useAuthForm(mode, onSuccess);

  const handleSubmit = (data: AuthFormType) => {
    submit(data);
  };

  const form = useForm<AuthFormType>({
    resolver: zodResolver(mode === "login" ? LoginSchema : RegisterSchema),
    defaultValues: formValues.defaultValues,
  });

  const fields = AUTH_FIELDS[mode];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name as keyof AuthFormType}
            render={({ field: rhfField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    type={field.type}
                    placeholder={field.placeholder}
                    disabled={isLoading}
                    {...rhfField}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" disabled={isLoading} className="w-full">
          {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
          {isLoading && <span>...</span>}
        </Button>
      </form>
    </Form>
  );
}
