import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";

interface SwipeCardProps {
  id?: number;
  image: string;
  color: string;
  affirmation?: string;
  onSwipe?: (direction: "left" | "right") => void;
}

export const SwipeCard: React.FC<SwipeCardProps> = ({
  image,
  color,
  affirmation,
  onSwipe,
}) => {
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offsetBoundary = 150;
    const direction = info.offset.x > 0 ? "right" : "left";

    if (Math.abs(info.offset.x) > offsetBoundary) {
      onSwipe?.(direction);
    }
  };

  return (
    <motion.div
      className="absolute top-2 w-100 aspect-100/150 rounded-lg shadow-lg p-4 bg-white flex flex-col items-center justify-between"
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
      onDragEnd={(event, info) => {
        handleDragEnd(event, info);
      }}
    >
      {affirmation && (
        <p className="mt-auto text-center text-lg font-semibold text-black">
          {affirmation}
        </p>
      )}
    </motion.div>
  );
};
