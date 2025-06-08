import { useGameStore } from "../../store/gameStore";
import AddPointButton from "../Buttons/AddPointButton";
import BugReportButton from "../Buttons/BugReportButton";
import JumpButton from "../Buttons/JumpButton";
import RemovePonintButton from "../Buttons/RemovePonintButton";

function Footer() {
  const { skipsRemaining, skipCard, answerCorrect, answerWrong } =
    useGameStore();
  return (
    <div className="footer relative bottom-3 flex w-full flex-col justify-around gap-8 p-4">
      <div className="absolute bottom-25 left-0 flex w-full justify-end px-4">
        <BugReportButton />
      </div>
      <div className="flex w-full justify-between">
        <RemovePonintButton answerWrongEvent={answerWrong} />
        <JumpButton skipCardEvent={skipCard} skipsRemaining={skipsRemaining} />
        <AddPointButton answerCorrectEvent={answerCorrect} />
      </div>
    </div>
  );
}

export default Footer;
