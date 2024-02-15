import React from "react";

export const useResize = (
  callback: () => unknown,
  immediatelyInvoke: boolean = true,
): void => {
  React.useEffect(() => {
    const fn = () => callback();
    if (immediatelyInvoke) {
      fn();
    }
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
};
