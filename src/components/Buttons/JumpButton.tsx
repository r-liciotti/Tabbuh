interface IJumpButtonProps {
  skipCardEvent: () => void;
  skipsRemaining: number;
}
function JumpButton({ skipCardEvent, skipsRemaining }: IJumpButtonProps) {
  // Se si sono finiti i salta l'icona da gialla diventa grigia
  return (
    <button
      className={`tabooStyle jumpButton flex h-full grow items-center justify-center ${skipsRemaining === 0 ? "opacity-70" : ""}`}
      onClick={skipCardEvent}
      disabled={skipsRemaining === 0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 16 16"
      >
        <path
          fill="#f0d517"
          fillRule="evenodd"
          d="M3.5 9.75A2.75 2.75 0 0 1 6.25 7h5.19L9.22 9.22a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 1 0-1.06 1.06l2.22 2.22H6.25a4.25 4.25 0 0 0 0 8.5h1a.75.75 0 0 0 0-1.5h-1A2.75 2.75 0 0 1 3.5 9.75"
          clipRule="evenodd"
          strokeWidth="1.2"
          stroke="#f0d517"
        />
      </svg>
    </button>
  );
}

export default JumpButton;
