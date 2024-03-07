import React from "react";

export const isRefTarget = (
  eventOrRef:
    | React.MouseEvent<HTMLElement>
    | React.FocusEvent<HTMLElement>
    | React.MutableRefObject<HTMLElement>,
): eventOrRef is React.MutableRefObject<HTMLElement> => {
  return !!(eventOrRef as React.MutableRefObject<HTMLElement>)?.current;
};
