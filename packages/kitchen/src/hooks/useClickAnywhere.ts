import React from "react";

export const useClickAnyWhere = (handler: (event: Event) => void) => {
  React.useEffect(() => {
    const callback = (event: Event) => handler(event);

    document.addEventListener("click", callback);
    return () => document.removeEventListener("click", callback);
  }, [handler]);
};
