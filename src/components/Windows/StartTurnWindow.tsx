import { useGameStore } from "../../store/gameStore";
import GeneralButton from "../Buttons/GeneralButton";
import HeaderWidonws from "./HeaderWindows";

function StartTurnWindow() {
  const { activeTeam, startTurn } = useGameStore();
  return (
    <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-row items-center justify-center border-2 bg-black/40">
      <div className="tabooStyle relative flex h-auto min-h-3/8 w-5/6 flex-col gap-4 bg-white p-4 lg:h-2/5 lg:w-1/3">
        <HeaderWidonws title="Turno successivo" />

        <div className="mt-14 flex h-full w-full flex-col gap-4">
          <p className="text-center text-lg font-black">Tocca al Team</p>
          <p
            className={`text-center text-8xl font-black text-${activeTeam}-500`}
          >
            {activeTeam}
          </p>
          <div className="mb-3 flex w-full grow items-end justify-center">
            <GeneralButton
              title="GIOCA"
              onClick={() => startTurn()}
              classList="h-16  w-full"
              bgColor="#00c950"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartTurnWindow;
