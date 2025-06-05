import { motion, useMotionValue, useTransform } from "framer-motion";
import MainCard from "./MainCard";
import { useGameStore } from "../../store/gameStore";

function MainCardContainer() {
  const { skipsRemaining, currentCard, skipCard, answerCorrect, answerWrong } =
    useGameStore();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Sfondo in base al drag X e Y
  const bgColor = useTransform([x, y], (values) => {
    const [latestX, latestY] = values as [number, number];

    if (Math.abs(latestY) > Math.abs(latestX)) {
      const alpha = Math.min(Math.abs(latestY) / 200, 0.6);
      return `rgba(255, 255, 0, ${alpha})`; // Giallo
    } else if (latestX < 0) {
      const alpha = Math.min(Math.abs(latestX) / 200, 0.6);
      return `rgba(255, 0, 0, ${alpha})`; // Rosso
    } else if (latestX > 0) {
      const alpha = Math.min(latestX / 200, 0.6);
      return `rgba(0, 255, 0, ${alpha})`; // Verde
    } else {
      return "#ffffff00";
    }
  });

  const handleSwipe = (direction: "left" | "right" | "up" | "down") => {
    // reset motion values
    x.set(0);
    y.set(0);
    console.log("direction", direction);

    if (direction === "left") answerWrong();
    else if (direction === "right") answerCorrect();
    else if (direction === "up" || (direction === "down" && skipsRemaining > 0))
      skipCard();
  };

  return (
    <motion.div
      className="flex h-full w-full flex-col items-center gap-8 overflow-hidden p-16 py-8 lg:p-8"
      style={{ backgroundColor: bgColor }}
    >
      {/* <h1 className="text-5xl font-bold">Team Blu</h1> */}
      <MainCard
        key={currentCard.keyword}
        onSwipe={handleSwipe}
        x={x}
        y={y}
        tabooCard={currentCard}
        skipsRemaining={skipsRemaining}
      />
    </motion.div>
  );
}

export default MainCardContainer;
