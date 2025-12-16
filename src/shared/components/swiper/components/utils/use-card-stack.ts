import { useCharacterStack } from "@/shared/hooks/uses-character-stack";
import { useAuthStore } from "@/store/auth";

export type SwipeDirection = "left" | "right";

export const useCardStack = () => {
  const { cards, removeTopCard } = useCharacterStack();
  const { token, setOpenDialog } = useAuthStore();

  const handleSwipe = (direction: SwipeDirection) => {
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

  const getCardPosition = (index: number) => {
    const lastIndex = cards.length - 1;

    return {
      isLast: index === lastIndex,
      isUpcoming: index === lastIndex - 1,
    };
  };

  return {
    cards,
    handleSwipe,
    getCardPosition,
  };
};
