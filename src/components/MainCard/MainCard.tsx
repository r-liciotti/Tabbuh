import {
  motion,
  useTransform,
  useAnimation,
  type PanInfo,
} from "framer-motion";

import { MotionValue } from "framer-motion";
import type { ICard } from "../../interfaces/Interfaces";
import { useCheckWidth } from "../../hook/useCheckWidth";

type Props = {
  onSwipe: (dir: "left" | "right" | "up" | "down") => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
  tabooCard: ICard;
  skipsRemaining: number;
};

function MainCard({ onSwipe, x, y, tabooCard, skipsRemaining }: Props) {
  const isAbove720 = useCheckWidth(720);
  const rotate = useTransform(x, [-200, 0, 200], [-10, 0, 10]);
  const controls = useAnimation();
  // Calcolo le dimensioni del testo
  const { h5Size, h6Size } = getTextSizes(tabooCard, isAbove720);

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
      className="tabooStyle card h-auto min-h-10/12 w-full md:w-2/3 lg:h-4/6 lg:w-2/3 xl:w-1/3"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ x, y, rotate }}
      animate={controls}
      whileDrag={{ scale: 1.05 }}
      onDragEnd={handleDragEnd}
    >
      <div className="card-body flex flex-col items-center justify-center">
        <h5
          className={`card-title word text-neutral mb-8 text-center break-all ${h5Size}`}
        >
          {tabooCard.keyword}
        </h5>
        {tabooCard.tabooWords.map((tabooWord, idx) => (
          <h6 key={idx} className={`word ${h6Size}`}>
            {tabooWord}
          </h6>
        ))}
      </div>
    </motion.div>
  );
}

function getTextSizes(tabooCard: ICard, isAbove720: boolean) {
  let h5Size = "text-4xl";
  let h6Size = "text-3xl";

  if (isAbove720) {
    h5Size = "text-5xl";
    h6Size = "text-4xl";
  } else if (tabooCard.keyword.length > 8) {
    h5Size = "text-3xl";
    h6Size = "text-2xl";
  } else {
    for (const word of tabooCard.tabooWords) {
      if (word.length > 8) {
        h6Size = "text-2xl";
        break;
      }
    }
  }

  return { h5Size, h6Size };
}

export default MainCard;
