import { motion } from "framer-motion";
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
  onClick: () => void;
};

const SwipeButton = ({ direction, onClick }: Props) => {
  const Icon: React.ElementType = actionPropsMatrix[direction!].icon;

  return (
    <motion.button onClick={onClick} whileTap={{ scale: 0.9 }}>
      <motion.div
        className={`flex items-center justify-center w-2 h-2 rounded-full shadow ${
          actionPropsMatrix[direction!].bgColorClass
        }`}
        style={{ scale: 10 }}
      >
        <Icon className="w-1 h-1 text-white" />
      </motion.div>
    </motion.button>
  );
};

export default SwipeButton;
