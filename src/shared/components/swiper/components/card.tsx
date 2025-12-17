// src/shared/components/swiper/components/card.tsx
import React from "react";
import { motion } from "framer-motion";
import { useSwipeCard } from "./utils/use-swipe-card";

interface SwipeCardProps {
  id?: string;
  image: string;
  color: string;
  name?: string;
  onSwipe?: (direction: "left" | "right") => void;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({
  image,
  color,
  name,
  onSwipe,
}) => {
  const { x, rotate, opacity, handleDragEnd } = useSwipeCard({
    onSwipe,
  });

  return (
    <motion.div
      className="absolute top-2 w-100 aspect-100/150 rounded-lg shadow-lg p-4 flex flex-col items-center justify-between"
      style={{
        x,
        rotate,
        opacity,
        backgroundColor: color,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      {name && (
        <p className="mt-auto text-center text-lg font-semibold text-black">
          {name}
        </p>
      )}
    </motion.div>
  );
};
