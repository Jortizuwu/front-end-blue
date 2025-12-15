import { useMotionValue, useTransform, type PanInfo } from "framer-motion";

export type SwipeDirection = "left" | "right";

interface UseSwipeCardProps {
  onSwipe?: (direction: SwipeDirection) => void;
  offsetBoundary?: number;
}

export const useSwipeCard = ({
  onSwipe,
  offsetBoundary = 150,
}: UseSwipeCardProps) => {
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-200, 200], [-20, 20]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) < offsetBoundary) return;

    const direction: SwipeDirection = info.offset.x > 0 ? "right" : "left";

    onSwipe?.(direction);
  };

  return {
    x,
    rotate,
    opacity,
    handleDragEnd,
  };
};
