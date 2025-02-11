import React from "react";

import { getElementOffset } from "../utils/get-element-offset";

export interface ReactiveDomReact {
  top: number;
  left: number;
  right: number;
  width: number;
  height: number;
  elementTop: number;
}

const defaultRect: ReactiveDomReact = {
  top: -1000,
  left: -1000,
  right: -1000,
  width: 0,
  height: 0,
  elementTop: -1000,
};

const getRectFromDOMWithContainer = (
  domRect?: DOMRect,
  getContainer?: () => HTMLElement | null,
): ReactiveDomReact => {
  if (!domRect) return defaultRect;
  const container = getContainer ? getContainer() : null;
  const scrollElement = container || document.documentElement;
  const { top: offsetTop, left: offsetLeft } = getElementOffset(container);

  return {
    ...domRect,
    width: domRect.width || domRect.right - domRect.left,
    height: domRect.height || domRect.top - domRect.bottom,
    top: domRect.bottom + scrollElement.scrollTop - offsetTop,
    left: domRect.left + scrollElement.scrollLeft - offsetLeft,
    elementTop: domRect.top + scrollElement.scrollTop - offsetTop,
  };
};

export const getRefRect = (
  ref?: React.MutableRefObject<HTMLElement | null>,
  getContainer?: () => HTMLElement | null,
): ReactiveDomReact => {
  if (!ref || !ref.current) return defaultRect;
  const rect = ref.current.getBoundingClientRect();
  return getRectFromDOMWithContainer(rect, getContainer);
};

export const getEventRect = (
  event?: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
  getContainer?: () => HTMLElement | null,
) => {
  const rect = (event?.currentTarget as HTMLElement)?.getBoundingClientRect();
  if (!rect) return defaultRect;
  return getRectFromDOMWithContainer(rect, getContainer);
};

export const isUnplacedRect = (rect?: ReactiveDomReact): boolean => {
  if (!rect) return true;
  return rect.top === defaultRect.top && rect.left === defaultRect.left;
};

export const useRect = (
  initialState?: ReactiveDomReact | (() => ReactiveDomReact),
) => {
  const [rect, setRect] = React.useState<ReactiveDomReact>(
    initialState || defaultRect,
  );

  const updateRect = (
    event: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
    getContainer?: () => HTMLElement | null,
  ) => {
    setRect(getEventRect(event, getContainer));
  };

  const updateRectWithRef = (
    ref: React.MutableRefObject<HTMLElement | null>,
    getContainer?: () => HTMLElement | null,
  ) => {
    setRect(getRefRect(ref, getContainer));
  };

  return {
    rect,
    setRect: updateRect,
    setRectWithRef: updateRectWithRef,
  };
};
