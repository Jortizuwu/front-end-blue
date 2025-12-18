import { cn } from "@/lib/utils";
import { DialogLogin } from "@/shared/components/auth";
import { Button } from "@/shared/components/ui/button";
import { useAuthStore } from "@/store/auth";
import { HeartIcon, CompassIcon, BookCopy, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  to: string;
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: "characters",
    label: "Personajes",
    icon: BookCopy,
    to: "/",
  },
  {
    id: "reactions",
    label: "Tus Reacciones",
    icon: HeartIcon,
    to: "/reactions",
  },
  {
    id: "explore",
    label: "Buscar",
    icon: CompassIcon,
    to: "/explore",
  },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "flex flex-col items-center justify-center gap-1 transition-colors",
    "px-3 py-2",
    isActive
      ? "text-primary font-semibold"
      : "text-muted-foreground hover:text-foreground"
  );

function NavbarComponent() {
  const { token, removeToken } = useAuthStore();

  const handleLogout = () => {
    removeToken();
    window.sessionStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <nav className="hidden md:flex w-full border-b mx-auto items-center justify-between px-8 h-20">
        <div className="flex-1" />

        <div className="flex gap-8 items-center">
          {MENU_ITEMS.map(({ id, label, icon: Icon, to }) => (
            <NavLink key={id} to={to} className={navLinkClass}>
              <Icon className="h-5 w-5" />
              <span className="text-xs">{label}</span>
            </NavLink>
          ))}

          {token ? (
            <Button
              variant="ghost"
              size="lg"
              className="flex flex-col items-center gap-1"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              <span className="text-xs">Salir</span>
            </Button>
          ) : (
            <DialogLogin />
          )}
        </div>

        <div className="flex-1" />
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background">
        <div className="flex justify-around items-center h-16">
          {MENU_ITEMS.map(({ id, icon: Icon, to }) => (
            <NavLink key={id} to={to} className={navLinkClass}>
              <Icon className="h-6 w-6" />
            </NavLink>
          ))}

          {token ? (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cerrar sesión"
              onClick={handleLogout}
            >
              <LogOut className="h-6 w-6" />
            </Button>
          ) : (
            <DialogLogin />
          )}
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
