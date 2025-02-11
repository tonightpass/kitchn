import React from "react";

import { useSSR } from "./use-ssr";
import { PREFIX } from "../constants";
import { getId } from "../utils/getId";

export const createElement = (id: string): HTMLElement => {
  const el = document.createElement(id);
  return el;
};

export const usePortal = (
  selectId: string = getId(),
  getContainer?: () => HTMLElement | null,
): HTMLElement | null => {
  const id = `${PREFIX}-portal-${selectId}`;
  const { isBrowser } = useSSR();

  const [elSnapshot, setElSnapshot] = React.useState<HTMLElement | null>(
    isBrowser ? createElement(id) : null,
  );

  React.useEffect(() => {
    const customContainer = getContainer ? getContainer() : null;
    const parentElement = customContainer || document.body;
    const hasElement = parentElement.querySelector<HTMLElement>(id);
    const el = hasElement || createElement(id);

    if (!hasElement) {
      parentElement.appendChild(el);
    }
    setElSnapshot(el);
  }, [getContainer, id]);

  return elSnapshot;
};
