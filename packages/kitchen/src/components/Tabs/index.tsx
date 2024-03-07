import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { useRect } from "../../hooks/useRect";
import { KitchenComponent } from "../../types";
import { capitalize } from "../../utils/capitalize";
import Highlight from "../Highlight";

export type TabProps = {
  title: string;
  value: string;
  icon?: JSX.Element;
} & React.HTMLProps<HTMLDivElement>;

type Props = {
  tabs: TabProps[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  active?: boolean;
  disabled?: boolean;
  hoverHeightRatio?: number;
  hoverWidthRatio?: number;
  highlight?: boolean;
};

export type TabsProps = KitchenComponent<Props>;

const TabsComponent = styled(
  ({
    tabs,
    disabled = false,
    selected,
    setSelected,
    hoverHeightRatio = 0.7,
    hoverWidthRatio = 1.05,
    highlight = true,
    ...props
  }: TabsProps) => {
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
      tab: TabProps,
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
            <Tab
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
              <>{capitalize(tab.title)}</>
            </Tab>
          ))}
      </div>
    );
  },
)<TabsProps>`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  color: ${({ theme }) => theme.colors.accent.dark};
  font-weight: ${({ theme }) => theme.weight.medium};
  padding-bottom: 1px;
  box-shadow: 0 -1px 0 ${({ theme }) => theme.colors.layout.dark} inset;
`;

export const Tab = styled.div<{ active?: boolean; disabled: boolean }>`
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
  margin: 0 0 -1px;
  user-select: none;
  padding: 6px ${({ theme }) => theme.gap.small};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  margin-bottom: -1px;
  outline: 0;
  white-space: nowrap;
  border-bottom: ${({ theme, active }) =>
    `1px solid ${active ? theme.colors.layout.lightest : "transparent"}`};
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

TabsComponent.displayName = "KitchenTabs";
export const Tabs = withDecorator(TabsComponent);
export default Tabs;
