interface IAddPointButtonIAddPointButtonProps {
  answerCorrectEvent: () => void;
}
function AddPointButton({
  answerCorrectEvent,
}: IAddPointButtonIAddPointButtonProps) {
  return (
    <button
      className="tabooStyle correctButton flex h-full grow items-center justify-center"
      onClick={answerCorrectEvent}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
      >
        <g fill="none" fillRule="evenodd">
          <path
            fill="#28b71f"
            d="M21.546 5.111a1.5 1.5 0 0 1 0 2.121L10.303 18.475a1.6 1.6 0 0 1-2.263 0L2.454 12.89a1.5 1.5 0 1 1 2.121-2.121l4.596 4.596L19.424 5.111a1.5 1.5 0 0 1 2.122 0"
            strokeWidth="2"
            stroke="#28b71f"
          />
        </g>
      </svg>
    </button>
  );
}

export default AddPointButton;
