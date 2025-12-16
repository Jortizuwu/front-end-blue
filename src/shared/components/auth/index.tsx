import { AuthForm } from "./components/form";
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
import { useState } from "react";

export function DialogLogin() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");

  const handleModeChange = (newMode: "login" | "register") => {
    setMode(newMode);
  };

  const title = mode === "register" ? "Crear cuenta" : "Iniciar sesión";
  const description =
    mode === "register"
      ? "Ingresa tus datos para crear una cuenta"
      : "Ingresa tus credenciales para iniciar sesión";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <AuthForm mode={mode} onSuccess={() => setOpen(false)} />

        <div className="flex items-center justify-center gap-2">
          <span className="text-muted-foreground">
            {mode === "login"
              ? "No tienes una cuenta?"
              : "Ya tienes una cuenta?"}
          </span>
          <Button
            variant="link"
            size="sm"
            onClick={() =>
              handleModeChange(mode === "login" ? "register" : "login")
            }
          >
            {mode === "login" ? "Crear cuenta" : "Iniciar sesión"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
