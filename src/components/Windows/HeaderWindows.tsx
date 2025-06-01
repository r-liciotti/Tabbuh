import { useGameStore } from "../../store/gameStore";

interface IHedaerWindowsProps {
  title: string;
  showTurn?: boolean;
}
function HeaderWidonws({ title, showTurn }: IHedaerWindowsProps) {
  const { turns } = useGameStore();

  return (
    <div
      id="heder-windows"
      className="absolute -top-9 left-1/2 flex w-max -translate-x-1/2 flex-col items-center rounded-4xl bg-blue-500 p-2 p-3 px-6 text-white"
    >
      <h1 className="text-xl font-bold lg:text-3xl">{title}</h1>
      {showTurn && <h1 className="text-md">Turno {turns}</h1>}
    </div>
  );
}

export default HeaderWidonws;
