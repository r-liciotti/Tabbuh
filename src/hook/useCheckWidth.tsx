import { useEffect, useState } from "react";

export function useCheckWidth(minWidth: number): boolean {
  const [isMinWidth, setIsMinWidth] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= minWidth;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMinWidth(window.innerWidth >= minWidth);
    };

    handleResize(); // inizializza stato
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth]);

  return isMinWidth;
}
