import { AuthForm, type AuthFormProps } from "./components/form";
import { useLocation } from "react-router-dom";

export default function AuthenticationPage() {
  // TODO: change to modal later
  const location = useLocation();

  const mode: AuthFormProps["mode"] = location.pathname.includes("register")
    ? "register"
    : "login";

  const title = mode === "register" ? "Crear cuenta" : "Iniciar sesión";
  const description =
    mode === "register"
      ? "Ingresa tus datos para crear una cuenta"
      : "Ingresa tus credenciales para iniciar sesión";

  return (
    <div className="relative flex shrink-0 items-center justify-center">
      <div className="flex items-center justify-center h-screen">
        <div className="mx-auto flex w-full flex-col justify-center border border-muted-foreground/10 px-6 py-8 rounded-2xl gap-6 sm:w-87.5">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
          <AuthForm mode={mode} />
        </div>
      </div>
    </div>
  );
}
