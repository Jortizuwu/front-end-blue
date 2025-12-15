import { useState } from "react";

export type SwipeDirection = "left" | "right";

export interface CardData {
  id: number;
  image: string;
  color: string;
  affirmation?: string;
}

export const useCardStack = (initialCards: CardData[]) => {
  const [cards, setCards] = useState<CardData[]>(initialCards);

  const handleSwipe = (direction: SwipeDirection) => {
    console.log("Swiped:", direction);
    setCards((prev) => prev.slice(0, -1));
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
