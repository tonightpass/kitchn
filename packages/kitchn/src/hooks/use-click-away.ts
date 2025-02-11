import React from "react";

export type ClickAwayGetContainer = () => HTMLElement | null;

export const useClickAway = (
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: (event: Event) => void,
) => {
  const handlerRef = React.useRef(handler);
  React.useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const callback = (event: MouseEvent) => {
      const el = ref.current;
      if (!event || !el || el.contains(event.target as Node)) return;
      handlerRef.current(event);
    };

    document.addEventListener("click", callback);
    return () => document.removeEventListener("click", callback);
  }, [ref]);
};
