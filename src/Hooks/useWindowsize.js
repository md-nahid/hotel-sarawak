import { useEffect, useState } from "react";

export default function useWindowsize() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function screenSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", screenSize);
    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  return width;
}
