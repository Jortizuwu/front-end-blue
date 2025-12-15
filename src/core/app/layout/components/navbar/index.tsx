import { Button } from "@/shared/components/ui/button";
import { UserIcon, HeartIcon, CompassIcon } from "lucide-react";

type MenuItem = {
  id: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: "user",
    label: "Usuario",
    icon: UserIcon,
  },
  {
    id: "likes",
    label: "Likes",
    icon: HeartIcon,
  },
  {
    id: "explore",
    label: "Buscar",
    icon: CompassIcon,
  },
];

function NavbarComponent() {
  return (
    <nav className="border-b mx-auto flex justify-between items-center px-8 h-20">
      <div className="flex-1" />
      <div className="flex gap-6">
        {MENU_ITEMS.map(({ id, label, icon: Icon, onClick }) => (
          <Button
            key={id}
            variant="ghost"
            size="icon-lg"
            aria-label={label}
            onClick={onClick}
            className="flex flex-col gap-1 pointer items-center justify-center p-2"
          >
            <Icon className="h-5 w-5" />
            <p>{label}</p>
          </Button>
        ))}
      </div>
      <div className="flex-1" />
    </nav>
  );
}

export default NavbarComponent;
