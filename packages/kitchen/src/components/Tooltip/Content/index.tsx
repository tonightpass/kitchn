import React from "react";
import { createPortal } from "react-dom";
import styled, { RuleSet } from "styled-components";

import { TooltipPlacement, TooltipTypes } from "..";
import { useClickAnyWhere, usePortal } from "../../../hooks";
import { useResize } from "../../../hooks/useResize";
import { KitchenComponent } from "../../../types";
import {
  TooltipPosition,
  defaultTooltipPosition,
  getPosition,
  getTooltipRect,
} from "../../../utils";
import { convertRGBToRGBA } from "../../../utils/convertRGBToRGBA";
import TooltipIcon from "../Icon";

export type TooltipIconOffset = {
  x: string;
  y: string;
};

type Props = {
  parent?: React.MutableRefObject<HTMLElement | null> | undefined;
  placement: TooltipPlacement;
  type: TooltipTypes;
  visible: boolean;
  hideArrow: boolean;
  offset: number;
  iconOffset: TooltipIconOffset;
  portalCss: RuleSet<object>;
};

export type TooltipContainerProps = KitchenComponent<Props>;

const TooltipContent = styled(
  ({
    children,
    parent,
    visible,
    offset,
    iconOffset,
    placement,
    type,
    hideArrow,
    portalCss,
    ...props
  }: TooltipContainerProps) => {
    const el = usePortal("tooltip");
    const selfRef = React.useRef<HTMLDivElement>(null);
    const [rect, setRect] = React.useState<TooltipPosition>(
      defaultTooltipPosition,
    );

    if (!parent) return null;

    const updateRect = () => {
      const position = getPosition(placement, getTooltipRect(parent), offset);
      setRect(position);
    };

    useResize(updateRect);
    useClickAnyWhere(() => updateRect());

    React.useEffect(() => {
      updateRect();
    }, [visible]);

    const preventHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    };

    if (!el) return null;

    return createPortal(
      <TooltipContentContainer
        ref={selfRef}
        onClick={preventHandler}
        rect={rect}
        visible={visible}
        type={type}
        portalCss={portalCss}
        {...props}
      >
        <TooltipContentInner>
          {!hideArrow && (
            <TooltipIcon
              placement={placement}
              iconOffset={iconOffset}
              type={type}
            />
          )}
          {children}
        </TooltipContentInner>
      </TooltipContentContainer>,
      el,
    );
  },
)`
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  z-index: 1000;
  width: auto;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.square};
  background-color: ${({ theme, type }) => {
    switch (type) {
      case "danger":
        return theme.colors.accent.danger;
      case "warning":
        return theme.colors.accent.warning;
      case "info":
        return theme.colors.accent.info;
      case "success":
        return theme.colors.accent.success;
      case "secondary":
        return theme.colors.layout.light;
      case "primary":
      default:
        return theme.colors.layout.darkest;
    }
  }};
  border: 1px solid
    ${({ theme, type }) => {
      switch (type) {
        case "danger":
          return convertRGBToRGBA(theme.colors.accent.danger, 0.5);
        case "warning":
          return convertRGBToRGBA(theme.colors.accent.warning, 0.5);
        case "info":
          return convertRGBToRGBA(theme.colors.accent.info, 0.5);
        case "success":
          return convertRGBToRGBA(theme.colors.accent.success, 0.5);
        case "secondary":
          return theme.colors.layout.lighter;
        case "primary":
        default:
          return theme.colors.layout.dark;
      }
    }};
  ${({ portalCss }) => portalCss};
`;

export const TooltipContentContainer = styled.div<{
  rect: TooltipPosition;
  hasShadow: boolean;
  visible: boolean;
  type: TooltipTypes;
}>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  top: ${({ rect }) => rect.top};
  left: ${({ rect }) => rect.left};
  transform: ${({ rect }) => rect.transform};
`;

export const TooltipContentInner = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  padding: 0.5em 0.75em;
`;

export default TooltipContent;
