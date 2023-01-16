import React from "react";
import { PREFIX } from "../constants";
import getId from "../utils/getId";
import useSSR from "./useSSR";

const createElement = (id: string): HTMLElement => {
  const el = document.createElement(id);
  return el;
};

const usePortal = (
  selectId: string = getId(),
  getContainer?: () => HTMLElement | null
): HTMLElement | null => {
  const id = `${PREFIX}-portal-${selectId}`;
  const { isBrowser } = useSSR();

  const [elSnapshot, setElSnapshot] = React.useState<HTMLElement | null>(
    isBrowser ? createElement(id) : null
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

export default usePortal;
