import { useGameStore } from "../../store/gameStore";

function HeaderLeft() {
  const { scores, activeTeam } = useGameStore();

  return (
    <div
      className={`hedaerLeft flex flex-col ${
        activeTeam === "red" ? "font-black" : "font-semibold"
      }`}
    >
      <p className="punteggio text-red-500 m-plus-rounded-1c-regular">
        Team Red
      </p>
      <p className="punteggio text-red-500 text-4xl">{scores.red}</p>
    </div>
  );
}

export default HeaderLeft;
