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
    "flex flex-col gap-1 items-center justify-center p-2 transition-colors",
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
    <nav className="border-b mx-auto flex justify-between items-center px-8 h-20">
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
            aria-label="Cerrar sesión"
            className="flex flex-col gap-1 items-center justify-center p-2"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </Button>
        ) : (
          <DialogLogin />
        )}
      </div>
      <div className="flex-1" />
    </nav>
  );
}

export default NavbarComponent;
