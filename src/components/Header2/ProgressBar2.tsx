import { useRef, useEffect } from "react";
import { useGameStore } from "../../store/gameStore";

function Progressbar2() {
  const { isTurnActive, endTurn, puasePlayTurn, statusGame, timer, tick } =
    useGameStore();
  const progressRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const progressMax = useRef(0);
  const maxTime = 60;
  const aumento = useRef(0);
  const clickedRef = useRef(false);

  if (barRef.current && statusGame === "start" && timer === 60) {
    barRef.current.style.width = "0px";
  }

  useEffect(() => {
    if (progressRef.current) {
      const computedStyle = window.getComputedStyle(progressRef.current);
      const maxWidth = parseFloat(computedStyle.width);
      const paddingX = parseFloat(computedStyle.paddingLeft) * 2;

      const innerWidth = maxWidth - paddingX;

      progressMax.current = Math.round(innerWidth * 100) / 100;
      aumento.current = innerWidth / maxTime;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTurnActive) return;

      // aggiorna la larghezza direttamente sul DOM
      if (barRef.current) {
        const currentWidth = parseFloat(
          barRef.current.style.width.replace("px", ""),
        );
        const newWidth = currentWidth + aumento.current;
        if (newWidth >= progressMax.current) {
          barRef.current.style.width = progressMax.current + "px";
        } else {
          barRef.current.style.width = `${newWidth}px`;
        }
      }

      if (timer > 0) tick();
      if (timer === 0) {
        endTurn();
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isTurnActive]);

  const handleToggle = () => {
    puasePlayTurn();
    clickedRef.current = true;
    setTimeout(() => {
      clickedRef.current = false;
    }, 200);
  };

  return (
    <div className="flex w-full flex-col items-center px-2 lg:w-1/3">
      <p className="text-center text-2xl font-bold">{formatTime(timer)}</p>
      <div
        className="progress h-5 w-full rounded-2xl bg-gray-300/90 p-1"
        role="progressbar"
        ref={progressRef}
      >
        <div ref={barRef} className="progress-bar bg-white"></div>
      </div>

      <div className="icon-button">
        <span
          className={`cursor-pointer ${
            statusGame === "active" || statusGame === "start"
              ? "ic--round-pause"
              : "ic--round-play-arrow"
          }`}
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

export default Progressbar2;
