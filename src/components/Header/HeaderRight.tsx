import { useGameStore } from "../../store/gameStore";

function HeaderRight() {
  const { scores, activeTeam } = useGameStore();

  return (
    <div
      className={`hedaerLeft flex flex-col ${
        activeTeam === "blue" ? "font-black" : "font-semibold"
      }`}
    >
      <p className="punteggio text-blue-500">Team Blue</p>
      <p className="punteggio text-blue-500 text-4xl">{scores.blue}</p>
    </div>
  );
}

export default HeaderRight;
