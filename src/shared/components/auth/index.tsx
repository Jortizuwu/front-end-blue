import { AuthForm, type AuthFormProps } from "./components/form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { UserIcon } from "lucide-react";

export function DialogLogin({ mode }: { mode: AuthFormProps["mode"] }) {
  const title = mode === "register" ? "Crear cuenta" : "Iniciar sesión";
  const description =
    mode === "register"
      ? "Ingresa tus datos para crear una cuenta"
      : "Ingresa tus credenciales para iniciar sesión";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="flex flex-col gap-1 pointer items-center justify-center p-2"
        >
          <UserIcon className="h-5 w-5" />
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-106.25">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <AuthForm mode={mode} />
      </DialogContent>
    </Dialog>
  );
}
