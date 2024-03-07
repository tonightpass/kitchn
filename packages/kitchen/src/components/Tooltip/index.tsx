import React from "react";
import styled, { RuleSet, css } from "styled-components";

import TooltipContent, { TooltipIconOffset } from "./Content";
import { withDecorator } from "../../hoc";
import { useClickAway } from "../../hooks";
import { AccentColors, KitchenComponent, TriggerTypes } from "../../types";
import { Placement, getTooltipRect } from "../../utils/tooltip";

export type TooltipOnVisibleChange = (visible: boolean) => void;
export type TooltipTypes = keyof AccentColors;
export type TooltipPlacement = Placement;
export type TooltipTriggers = TriggerTypes;

type Props = {
  text: React.ReactNode;
  placement?: TooltipPlacement;
  type?: TooltipTypes;
  visible?: boolean;
  initialVisible?: boolean;
  hideArrow?: boolean;
  trigger?: TooltipTriggers;
  enterDelay?: number;
  leaveDelay?: number;
  offset?: number;
  className?: string;
  portalCss?: RuleSet<object>;
  onVisibleChange?: TooltipOnVisibleChange;
};

export type TooltipProps = KitchenComponent<Props>;

const TooltipComponent = styled(
  ({
    children,
    initialVisible = false,
    text,
    offset = 12,
    placement = "top",
    enterDelay = 150,
    leaveDelay = 150,
    trigger = "hover",
    onVisibleChange = () => {},
    hideArrow = false,
    type = "primary",
    visible: customVisible,
    portalCss = css``,
    ...props
  }: TooltipProps) => {
    const timer = React.useRef<number>();
    const ref = React.useRef<HTMLDivElement>(null);
    const [visible, setVisible] = React.useState<boolean>(initialVisible);
    const iconOffset = React.useMemo<TooltipIconOffset>(() => {
      if (!ref?.current) return { x: "0.75em", y: "0.75em" };
      const rect = getTooltipRect(ref);
      return {
        x: `${rect.width ? rect.width / 2 : 0}px`,
        y: `${rect.height ? rect.height / 2 : 0}px`,
      };
    }, [ref?.current]);

    const contentProps = {
      type,
      visible,
      offset,
      placement,
      hideArrow,
      iconOffset,
      parent: ref,
      portalCss,
    };

    const changeVisible = (nextState: boolean) => {
      const clear = () => {
        clearTimeout(timer.current);
        timer.current = undefined;
      };
      const handler = (nextState: boolean) => {
        setVisible(nextState);
        onVisibleChange(nextState);
        clear();
      };
      clear();
      if (nextState) {
        timer.current = window.setTimeout(() => handler(true), enterDelay);
        return;
      }
      const leaveDelayWithoutClick = trigger === "click" ? 0 : leaveDelay;
      timer.current = window.setTimeout(
        () => handler(false),
        leaveDelayWithoutClick,
      );
    };

    const mouseEventHandler = (next: boolean) =>
      trigger === "hover" && changeVisible(next);
    const clickEventHandler = () =>
      trigger === "click" && changeVisible(!visible);

    useClickAway(ref, () => trigger === "click" && changeVisible(false));
    React.useEffect(() => {
      if (customVisible === undefined) return;
      changeVisible(customVisible);
    }, [customVisible]);

    return (
      <div
        ref={ref}
        onClick={clickEventHandler}
        onMouseEnter={() => mouseEventHandler(true)}
        onMouseLeave={() => mouseEventHandler(false)}
        {...props}
      >
        {children}
        <TooltipContent {...contentProps}>{text}</TooltipContent>
      </div>
    );
  },
)`
  width: max-content;
  display: inline-block;
  user-select: none;
`;

TooltipComponent.displayName = "KitchenTooltip";
export const Tooltip = withDecorator(TooltipComponent);
export default Tooltip;
