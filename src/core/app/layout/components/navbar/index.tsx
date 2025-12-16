import { DialogLogin } from "@/shared/components/auth";
import { Button } from "@/shared/components/ui/button";
import { useAuthStore } from "@/store/auth";
import { HeartIcon, CompassIcon, BookCopy, LogOut } from "lucide-react";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: "likes",
    label: "Likes",
    icon: HeartIcon,
  },
  {
    id: "characters",
    label: "Personajes",
    icon: BookCopy,
  },
  {
    id: "explore",
    label: "Buscar",
    icon: CompassIcon,
  },
];

function NavbarComponent() {
  const { token, removeToken } = useAuthStore();

  const handleLogout = () => {
    removeToken();
    window.location.reload();
  };

  return (
    <nav className="border-b mx-auto flex justify-between items-center px-8 h-20">
      <div className="flex-1" />
      <div className="flex gap-6">
        {MENU_ITEMS.map(({ id, label, icon: Icon, onClick }) => (
          <Button
            key={id}
            variant="ghost"
            size="lg"
            aria-label={label}
            onClick={onClick}
            className="flex flex-col gap-1 pointer items-center justify-center p-2"
          >
            <Icon className="h-5 w-5" />
            {label}
          </Button>
        ))}
        {token ? (
          <Button
            variant="ghost"
            size="lg"
            aria-label="Cerrar sesión"
            className="flex flex-col gap-1 pointer items-center justify-center p-2"
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
