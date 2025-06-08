import { useState, useRef, useEffect } from "react";
import { useGameStore } from "../../store/gameStore";

function Progressbar() {
  const { isTurnActive, endTurn, puasePlayTurn, statusGame, timer, tick } =
    useGameStore();
  const [width, setWidth] = useState(0);
  const [clicked, setClicked] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressMax = useRef(0);
  const aumento = useRef(0);
  const maxTime = 60;

  useEffect(() => {
    if (progressRef.current) {
      progressMax.current = progressRef.current.getBoundingClientRect().width;
      aumento.current = progressMax.current / maxTime;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTurnActive) return;

      setWidth((prevWidth) => {
        const nextWidth = prevWidth + aumento.current;
        return nextWidth >= progressMax.current
          ? progressMax.current
          : nextWidth;
      });
      if (timer > 0) tick();
      if (timer === 0) {
        endTurn();
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isTurnActive]);

  const handleToggle = () => {
    puasePlayTurn();
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  return (
    <div className="flex w-1/2 flex-col items-center gap-2 lg:w-1/3">
      <p className="text-center text-2xl font-bold">{formatTime(timer)}</p>
      <div
        className="progress h-6 grow rounded-2xl bg-gray-300/90 p-1"
        role="progressbar"
        ref={progressRef}
      >
        <div
          className="progress-bar bg-white transition-all duration-1000"
          style={{ width: `${width}px` }}
        ></div>
      </div>

      <div className="icon-button w-fit">
        <span
          className={`cursor-pointer text-4xl ${
            statusGame === "pause" || statusGame === "prep"
              ? "ic--round-play-arrow"
              : statusGame === "active" || statusGame === "start"
                ? "ic--round-pause"
                : ""
          } ${clicked ? "animate-click" : ""}`}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export default Progressbar;
