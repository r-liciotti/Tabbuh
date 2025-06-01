interface IRemovePointButtonProps {
  answerWrongEvent: () => void;
}
function RemovePonintButton({ answerWrongEvent }: IRemovePointButtonProps) {
  return (
    <button
      className="tabooStyle wrongButton flex h-full grow items-center justify-center"
      onClick={answerWrongEvent}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 384 512"
      >
        <path
          fill="#d63a3a"
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7L86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256L41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256z"
          strokeWidth="50"
          stroke="#d63a3a"
        />
      </svg>
    </button>
  );
}

export default RemovePonintButton;
