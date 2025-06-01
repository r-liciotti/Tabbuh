interface IButtonProps {
  title: string;
  onClick?: () => void;
  classList?: string;
  bgColor?: string; // es. "#3498db"
}

function darkenHexColor(hex: string, factor: number): string {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const newR = Math.max(0, Math.floor(r * factor));
  const newG = Math.max(0, Math.floor(g * factor));
  const newB = Math.max(0, Math.floor(b * factor));

  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}

function GeneralButton({
  title,
  onClick,
  classList,
  bgColor = "#e5e7eb",
}: IButtonProps) {
  const pressedBgColor = darkenHexColor(bgColor, 0.85);

  return (
    <button
      onClick={onClick}
      className={`tabooStyle flex justify-center items-center ${classList || ""}`}
    >
      <p>{title}</p>
      <style>{`
        button {
          transition:
            background-color 0.45s,
            transform 0.15s;
          transform-origin: center;
        }
        button:hover {
          background-color: ${bgColor};
        }
        button:active {
          background-color: ${pressedBgColor};
          transform: scale(0.95);
        }
      `}</style>
    </button>
  );
}

export default GeneralButton;
