import { useGameStore } from "../../store/gameStore";

function BugReportButton() {
  const { bugReport } = useGameStore();

  const handleClick = () => {
    bugReport();
  };

  return (
    <div className="tabooStyle p-1 px-2 text-center">
      <span
        className="icon-[solar--bug-line-duotone] size-8"
        onClick={handleClick}
      />
    </div>
  );
}
export default BugReportButton;
