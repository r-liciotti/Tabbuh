import { useGameStore } from "../../store/gameStore";
import Progressbar2 from "./ProgressBar2";

function HeaderTop() {
  const { scores, activeTeam } = useGameStore();

  return (
    <div className="flex w-full items-center justify-between">
      <div
        className={`m-plus-rounded-1c-regular punteggio flex w-4/12 flex-col ${activeTeam === "red" ? "text-xl font-black" : "text-md font-bold"} text-red-500`}
      >
        <p className={`${activeTeam === "red" ? "leading-5" : "leading-4"} `}>
          Team <br /> RED
        </p>
        <p className={`${activeTeam === "red" ? "text-4xl" : ""} `}>
          {scores.red}
        </p>
      </div>
      <Progressbar2 />
      <div
        className={`m-plus-rounded-1c-regular punteggio flex w-4/12 flex-col ${activeTeam === "blue" ? "text-xl font-black" : "text-md font-bold"} text-blue-500`}
      >
        <p className={`${activeTeam === "blue" ? "leading-5" : "leading-4"} `}>
          Team <br /> BLUE
        </p>
        <p className={`${activeTeam === "blue" ? "text-4xl" : ""} `}>
          {scores.blue}
        </p>
      </div>
    </div>
  );
}

export default HeaderTop;
