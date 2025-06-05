import { useEffect, useState } from "react";

interface ScreenSize {
  width: number;
  height: number;
}

export const useScreenSize = () => {
  const [size, setSize] = useState<ScreenSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      console.log("Resizing window", window.innerWidth, window.innerHeight);
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
