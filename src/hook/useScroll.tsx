import { useState, useEffect } from "react";

export const useScroll = () => {
  const [value, setValue] = useState({ height: 0 });
  const onScroll = () => {
    setValue({ height: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return value;
};
