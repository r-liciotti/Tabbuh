import { useGameStore } from "../../store/gameStore";
import AddPointButton from "../Buttons/AddPointButton";
import JumpButton from "../Buttons/JumpButton";
import RemovePonintButton from "../Buttons/RemovePonintButton";

function Footer() {
  const { skipsRemaining, skipCard, answerCorrect, answerWrong } =
    useGameStore();
  return (
    <div className="footer absolute bottom-3 flex w-full justify-around gap-4 p-4">
      <RemovePonintButton answerWrongEvent={answerWrong} />
      <JumpButton skipCardEvent={skipCard} skipsRemaining={skipsRemaining} />
      <AddPointButton answerCorrectEvent={answerCorrect} />
    </div>
  );
}

export default Footer;
