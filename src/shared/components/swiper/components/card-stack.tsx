// src/components/CardStack.tsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SwipeCard } from "./card";
import GameActionBtn from "./buttons";
import { useCardStack } from "./utils/use-card-stack";
import { cardVariants } from "./utils/card-variants";

interface CardData {
  id: number;
  image: string;
  color: string;
  affirmation?: string;
}

interface CardStackProps {
  cards: CardData[];
}

export const CardStack: React.FC<CardStackProps> = ({
  cards: initialCards,
}) => {
  const { cards, handleSwipe, getCardPosition } = useCardStack(initialCards);

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <AnimatePresence initial={false}>
        {cards.map((card, i) => {
          const { isLast, isUpcoming } = getCardPosition(i);
          return (
            <motion.div
              key={card.id}
              className="absolute top-0 w-full h-full flex justify-center items-center"
              variants={cardVariants}
              initial="remainings"
              animate={
                isLast ? "current" : isUpcoming ? "upcoming" : "remainings"
              }
              exit="exit"
            >
              <SwipeCard
                id={card.id}
                image={card.image}
                color={card.color}
                affirmation={card.affirmation}
                onSwipe={handleSwipe}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div className="absolute top-60 h-screen mt-4 flex justify-between w-40">
        <GameActionBtn direction="left" onClick={() => console.log("rigth")} />
        <GameActionBtn direction="right" onClick={() => console.log("rigth")} />
      </div>
    </div>
  );
};
