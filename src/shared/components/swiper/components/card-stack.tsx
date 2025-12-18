import { motion, AnimatePresence } from "framer-motion";
import { SwipeCard } from "./card";
import GameActionBtn from "./buttons";
import { useCardStack } from "./utils/use-card-stack";
import { cardVariants } from "./utils/card-variants";
import { useCharacterStack } from "@/shared/hooks/uses-character-stack";

export const CardStack = () => {
  const { isLoading } = useCharacterStack();

  const { handleSwipe, getCardPosition, cards } = useCardStack();

  if (isLoading) {
    return (
      <div className="relative flex justify-center items-center w-full h-full ">
        <div className="absolute top-2 w-100 aspect-100/150 rounded-lg shadow-lg p-4 flex flex-col items-center justify-between bg-zinc-400">
          <p className="mt-auto text-center text-lg font-semibold text-black">
            cargando...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center w-full h-full">
      <AnimatePresence initial={false}>
        {cards.map((card, i) => {
          const { isLast, isUpcoming } = getCardPosition(i);
          return (
            <motion.div
              key={card.customId}
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
                name={card.name}
                onSwipe={handleSwipe}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div className="absolute top-170 md:top-170 flex justify-between w-30">
        <GameActionBtn direction="right" />
        <GameActionBtn direction="left" />
      </div>
    </div>
  );
};
