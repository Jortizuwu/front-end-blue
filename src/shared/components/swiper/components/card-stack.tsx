// src/components/CardStack.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SwipeCard } from "./card";
import GameActionBtn from "./buttons";

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
  const [cards, setCards] = useState(initialCards);

  const cardVariants = {
    current: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    upcoming: {
      opacity: 0.5,
      y: 20,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
    remainings: { opacity: 0, y: 10, scale: 0.9 },
  };

  const handleSwipe = (dir: "left" | "right") => {
    console.log(dir);
    setCards((prev) => prev.slice(0, -1));
  };

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <AnimatePresence initial={false}>
        {cards.map((card, i) => {
          const isLast = i === cards.length - 1;
          const isUpcoming = i === cards.length - 2;
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
