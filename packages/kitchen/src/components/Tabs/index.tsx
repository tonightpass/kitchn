import React from "react";
import { IconType } from "react-icons/lib";
import styled from "styled-components";
import useRect from "../../hooks/useRect";
import { KitchenComponent } from "../../types";
import Highlight from "../Highlight";
import Icon from "../Icon";

export type Tab = {
  title: string;
  value: string;
  icon?: IconType;
};

export type TabsProps = KitchenComponent & {
  /**
   * The titles, values and icons of the tabs.
   */
  tabs: Tab[];

  selected: string;

  setSelected: React.Dispatch<React.SetStateAction<string>>;

  active?: boolean;

  disabled?: boolean;

  hoverHeightRatio: 0.7;
  hoverWidthRatio: 1.15;
  highlight?: boolean;
};

const Tabs = styled(
  ({
    tabs,
    disabled = false,
    selected,
    setSelected,
    hoverHeightRatio = 0.7,
    hoverWidthRatio = 1.15,
    highlight = true,
    ...props
  }: TabsProps) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [displayHighlight, setDisplayHighlight] =
      React.useState<boolean>(false);
    const { rect, setRect } = useRect();

    const tabItemMouseOverHandler = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      if (!event.target) return;
      setRect(event, () => containerRef.current);
      if (highlight) {
        setDisplayHighlight(true);
      }
    };

    const handleClick = (event: React.MouseEvent<HTMLDivElement>, tab: Tab) => {
      disabled ? event.preventDefault() : setSelected(tab.value);
    };

    return (
      <div
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
              key={tab.value}
              onClick={(event) => handleClick(event, tab)}
              active={selected === tab.value}
              onMouseOver={tabItemMouseOverHandler}
              disabled={disabled}
            >
              {tab.icon && (
                <IconTab>
                  <Icon icon={tab.icon} />
                </IconTab>
              )}
              {tab.title}
            </Tab>
          ))}
      </div>
    );
  }
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

const Tab = styled.div<{ active?: boolean; disabled: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
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
  border-bottom: ${({ theme, active }) =>
    `1px solid ${active ? theme.colors.layout.lightest : "transparent"}`};
  transition: all 0.2s;

  :hover {
    color: ${({ theme, disabled }) =>
      !disabled ? theme.colors.text.lightest : theme.colors.text.darker};
  }
`;

const IconTab = styled.div`
  margin-right: 6px;
`;

export default Tabs;
