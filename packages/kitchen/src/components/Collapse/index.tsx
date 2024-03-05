import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import styled from "styled-components";

import { withScale } from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import Icon from "../Icon";

type Props = {
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  card?: boolean;
  size?: "normal" | "small" | "medium";
};

export type CollapseProps = KitchenComponent<Props>;

const CollapseComponent = styled(
  ({
    title,
    subtitle,
    children,
    defaultExpanded = false,
    size = "medium",
    ...props
  }: CollapseProps) => {
    const contentContainerRef = React.useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = React.useState<boolean>(defaultExpanded);
    const [height, setHeight] = React.useState<number | undefined>(
      defaultExpanded ? undefined : 0,
    );

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    React.useEffect(() => {
      if (!height || !isOpen || !contentContainerRef.current) return undefined;
      const resizeObserver = new ResizeObserver((el) => {
        setHeight(el[0].contentRect.height);
      });
      resizeObserver.observe(contentContainerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }, [height, isOpen]);

    React.useEffect(() => {
      if (isOpen && contentContainerRef.current)
        setHeight(contentContainerRef.current.getBoundingClientRect().height);
      else setHeight(0);
    }, [isOpen]);

    return (
      <div role={"region"} aria-expanded={isOpen} {...props}>
        <CollapseHeader onClick={handleClick} isOpen={isOpen}>
          <CollapseHeaderContent>
            <CollapseTitle size={size}>{title}</CollapseTitle>
            {subtitle && <CollapseSubtitle>{subtitle}</CollapseSubtitle>}
          </CollapseHeaderContent>
          <Icon icon={RiArrowDownSLine} />
        </CollapseHeader>
        <CollapseContent height={height}>
          <CollapseContentContainer ref={contentContainerRef}>
            {children}
          </CollapseContentContainer>
        </CollapseContent>
      </div>
    );
  },
)<CollapseProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.layout.dark};
  }

  ${({ card, theme }) =>
    card &&
    `
  border: 1px solid ${theme.colors.layout.dark};
  border-radius: 5px;
  background: ${theme.colors.layout.darker};
  margin-bottom: 10px;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`}
`;

const CollapseHeader = styled.button<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  ${Icon} {
    transition: transform 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const CollapseHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CollapseTitle = styled.h3<{ size?: "normal" | "small" | "medium" }>`
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "small":
        return theme.size.small;
      case "medium":
        return theme.size.medium;
      default:
        return theme.size.normal;
    }
  }};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const CollapseSubtitle = styled.span`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.text.light};
`;

const CollapseContent = styled.div<{ height?: number }>`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  height: ${({ height }) => (height ? `calc(${height}px + 10px * 2)` : "0px")};
`;

const CollapseContentContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

CollapseComponent.displayName = "KitchenCollapse";
export const Collapse = withScale(CollapseComponent);
export default Collapse;
