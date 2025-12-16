import { useCharacterStack } from "@/shared/hooks/uses-character-stack";
import { useAuthStore } from "@/store/auth";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const actionPropsMatrix = {
  left: {
    bgColorClass: "bg-green-500",
    icon: ThumbsUp,
  },
  right: {
    bgColorClass: "bg-red-500",
    icon: ThumbsDown,
  },
};

type Props = {
  direction: "left" | "right";
};

const SwipeButton = ({ direction }: Props) => {
  const { removeTopCard } = useCharacterStack();
  const Icon: React.ElementType = actionPropsMatrix[direction!].icon;
  const { token, setOpenDialog } = useAuthStore();

  const onClick = () => {
    if (!token) {
      setOpenDialog(true);
      return;
    }

    if (direction === "left") {
      removeTopCard("left");
      return;
    }

    if (direction === "right") {
      removeTopCard("right");
      return;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center transform transition-transform hover:scale-120 justify-center w-2 h-2 rounded-full shadow ${
        actionPropsMatrix[direction!].bgColorClass
      }`}
      style={{ scale: 10 }}
    >
      <Icon className="w-1 h-1 text-white" />
    </button>
  );
};

export default SwipeButton;
