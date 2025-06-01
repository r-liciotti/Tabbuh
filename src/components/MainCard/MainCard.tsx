import {
  motion,
  useTransform,
  useAnimation,
  type PanInfo,
} from "framer-motion";
import { MotionValue } from "framer-motion";
import type { ICard } from "../../interfaces/Interfaces";

type Props = {
  onSwipe: (dir: "left" | "right" | "up" | "down") => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
  tabooCard: ICard;
  skipsRemaining: number;
};

function MainCard({ onSwipe, x, y, tabooCard, skipsRemaining }: Props) {
  const rotate = useTransform(x, [-200, 0, 200], [-10, 0, 10]);
  const controls = useAnimation();

  const handleDragEnd = async (
    // @ts-ignore
    event: MouseEvent | TouchEvent | PointerEvent, // necessario per la firma della funzione
    info: PanInfo,
  ) => {
    const offsetX = info.offset.x;
    const offsetY = info.offset.y;

    if (offsetX > 150) {
      await controls.start({
        x: 1000,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      onSwipe("right");
    } else if (offsetX < -150) {
      await controls.start({
        x: -1000,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      onSwipe("left");
    } else if (offsetY > 150) {
      if (skipsRemaining === 0) return;
      await controls.start({
        y: 1000,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      onSwipe("down");
    } else if (offsetY < -150) {
      if (skipsRemaining === 0) return;

      await controls.start({
        y: -1000,
        opacity: 0,
        transition: { duration: 0.3 },
      });
      onSwipe("up");
    } else {
      // torna indietro se non supera la soglia
      controls.start({ x: 0, y: 0, rotate: 0 });
    }
  };

  return (
    <motion.div
      className="tabooStyle card h-9/12 w-full lg:h-4/6 lg:w-1/3"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ x, y, rotate }}
      animate={controls}
      whileDrag={{ scale: 1.05 }}
      onDragEnd={handleDragEnd}
    >
      <div className="card-body flex flex-col items-center justify-center">
        <h5 className="card-title word text-neutral mb-8 text-center text-4xl">
          {tabooCard.keyword}
        </h5>
        {tabooCard.tabooWords.map((tabooWord, idx) => (
          <h6 key={idx} className="word text-3xl">
            {tabooWord}
          </h6>
        ))}
      </div>
    </motion.div>
  );
}

export default MainCard;
