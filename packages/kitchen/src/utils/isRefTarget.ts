import React from "react";

const isRefTarget = (
  eventOrRef:
    | React.MouseEvent<HTMLElement>
    | React.FocusEvent<HTMLElement>
    | React.MutableRefObject<HTMLElement | null>
): eventOrRef is React.MutableRefObject<HTMLElement | null> => {
  return typeof (eventOrRef as any)?.target === "undefined";
};

export default isRefTarget;
