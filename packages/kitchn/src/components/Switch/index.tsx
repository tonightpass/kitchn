import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/with-decorator";
import { useRect } from "../../hooks/use-rect";
import { isString } from "../../utils";
import { capitalize } from "../../utils/capitalize";
import Highlight from "../Highlight";
import { TabProps, TabsProps } from "../Tabs";

export type ControlProps = TabProps;

export type SwitchProps = TabsProps;

const SwitchComponent = styled(
  ({
    tabs,
    disabled = false,
    selected,
    setSelected,
    hoverHeightRatio = 1,
    hoverWidthRatio = 1,
    highlight = true,
    ...props
  }: SwitchProps) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [displayHighlight, setDisplayHighlight] =
      React.useState<boolean>(false);
    const { rect, setRect } = useRect();

    const tabItemMouseOverHandler = (
      event: React.MouseEvent<HTMLDivElement>,
    ) => {
      if (!event.target) return;
      setRect(event, () => containerRef.current);
      if (highlight) {
        setDisplayHighlight(true);
      }
    };

    const handleClick = (
      event: React.MouseEvent<HTMLDivElement>,
      tab: ControlProps,
    ) => {
      disabled ? event.preventDefault() : setSelected(tab.value);
    };

    return (
      <div
        role={"tablist"}
        ref={containerRef}
        onMouseLeave={() => setDisplayHighlight(false)}
        {...props}
      >
        <Highlight
          rect={rect}
          visible={displayHighlight}
          hoverHeightRatio={hoverHeightRatio}
          hoverWidthRatio={hoverWidthRatio}
        />
        {tabs &&
          tabs.map((tab) => (
            <Control
              role={"tab"}
              key={tab.value}
              onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                handleClick(event, tab)
              }
              active={selected === tab.value}
              onMouseOver={tabItemMouseOverHandler}
              disabled={disabled}
              {...tab}
            >
              <>{tab.icon && tab.icon}</>
              <>
                {isString(tab.title)
                  ? capitalize(tab.title as string)
                  : tab.title}
              </>
            </Control>
          ))}
      </div>
    );
  },
)<SwitchProps>`
  position: relative;
  display: flex;
  flex-grow: 0;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent.dark};
  font-weight: ${({ theme }) => theme.weight.medium};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.layout.dark}; // because border will add 2px to the hightlight rect
  border-radius: ${({ theme }) => theme.radius.square};
  padding: 4px;
  gap: 1px;
`;

export const Control = styled.div<{ active?: boolean; disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  color: ${({ theme, active, disabled }) => {
    if (disabled) return theme.colors.text.darker;
    if (active) return theme.colors.text.lightest;
    return theme.colors.text.light;
  }};
  user-select: none;
  padding: 6px ${({ theme }) => theme.gap.small};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  outline: 0;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radius.square};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.layout.dark : "transparent"};
  transition: all 0.2s;
  z-index: 1;

  svg {
    max-height: 1em;
    margin-right: ${({ theme }) => theme.gap.tiny};
  }

  &:hover {
    color: ${({ theme, disabled }) =>
      !disabled ? theme.colors.text.lightest : theme.colors.text.darker};
  }
`;

SwitchComponent.displayName = "KitchnSwitch";
export const Switch = withDecorator(SwitchComponent);
export default Switch;
