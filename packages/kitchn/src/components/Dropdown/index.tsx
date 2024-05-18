/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { createPortal } from "react-dom";

import { withDecorator } from "../../hoc";
import {
  getRefRect,
  useClickAnyWhere,
  useDOMObserver,
  usePortal,
  useResize,
} from "../../hooks";
import { KitchnComponent } from "../../types";
import Container from "../Container";

interface Props {
  visible: boolean;
  disableMatchWidth?: boolean;
  parent?: React.MutableRefObject<HTMLElement | null> | undefined;
}

interface ReactiveDomReact {
  top: number;
  left: number;
  right: number;
  width: number;
}

const defaultRect: ReactiveDomReact = {
  top: -1000,
  left: -1000,
  right: -1000,
  width: 0,
};

export type DropdownProps = KitchnComponent<Props>;

const DropdownComponent: React.FC<DropdownProps> = React.memo(
  ({ visible, disableMatchWidth, children, parent }: DropdownProps) => {
    const el = usePortal("dropdown");
    const [rect, setRect] = React.useState<ReactiveDomReact>(defaultRect);

    if (!parent) return null;

    const updateRect = () => {
      const { top, left, right, width: nativeWidth } = getRefRect(parent);
      setRect({ top, left, right, width: nativeWidth });
    };

    useResize(updateRect);
    useClickAnyWhere(() => {
      const { top, left } = getRefRect(parent);
      const shouldUpdatePosition = top !== rect.top || left !== rect.left;
      if (!shouldUpdatePosition) return;
      updateRect();
    });
    useDOMObserver(parent, () => {
      updateRect();
    });

    React.useEffect(() => {
      if (!parent || !parent.current) return;
      parent.current.addEventListener("mouseenter", updateRect);
      return () => {
        if (!parent || !parent.current) return;
        parent.current.removeEventListener("mouseenter", updateRect);
      };
    }, [parent]);

    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      event.preventDefault();
    };
    const mouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
    };

    if (!el) return null;

    return createPortal(
      <Container
        display={visible ? "flex" : "none"}
        position={"absolute"}
        top={rect.top + 2}
        left={rect.left}
        zIndex={1000}
        width={!disableMatchWidth ? rect.width : "auto"}
        minWidth={disableMatchWidth ? rect.width : "auto"}
        onMouseDown={mouseDownHandler}
        onClick={clickHandler}
      >
        {children}
      </Container>,
      el,
    );
  },
);

DropdownComponent.displayName = "KitchenDropdown";
export const Dropdown = withDecorator(DropdownComponent);
export default Dropdown;
