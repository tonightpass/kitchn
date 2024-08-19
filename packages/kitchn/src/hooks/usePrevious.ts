import React from "react";

export const usePrevious = <T>(state: T): T | undefined | null => {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    ref.current = state;
  });

  return ref ? ref.current : null;
};
