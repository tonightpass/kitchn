import React from "react";

const isRefTarget = (
  eventOrRef:
    | React.MouseEvent<HTMLElement>
    | React.FocusEvent<HTMLElement>
    | React.MutableRefObject<HTMLElement>
): eventOrRef is React.MutableRefObject<HTMLElement> => {
  return (
    typeof (eventOrRef as React.MutableRefObject<HTMLElement>)?.current !==
    "undefined"
  );
};

export default isRefTarget;
