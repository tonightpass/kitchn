import React, { createContext, useContext, useRef, useState } from "react";
import styled, { css } from "styled-components";

import { DecoratorProps, withDecorator } from "../../hoc";
import { useRect } from "../../hooks";
import { getId } from "../../utils";
import Button, { ButtonProps } from "../Button";
import Container, { ContainerProps } from "../Container";
import Highlight from "../Highlight";
import Icon, { IconProps } from "../Icon";
import Text, { TextProps } from "../Text";
import Tooltip, { TooltipProps } from "../Tooltip";
import TooltipIcon from "../Tooltip/Icon";

// Context type definitions
type NavigationMenuContextType = {
  handleMouseOver: (event: React.MouseEvent<HTMLElement>, id: string) => void;
  handleMouseLeave: () => void;
  handleTooltipMouseEnter: () => void;
  handleTooltipMouseLeave: () => void;
  activeId: string | null;
  setTooltipContent: (content: React.ReactNode) => void;
  highlight: boolean;
  hoverHeightRatio: number;
  hoverWidthRatio: number;
};

const NavigationMenuContext = createContext<NavigationMenuContextType | null>(
  null,
);

const useNavigationMenu = () => {
  const context = useContext(NavigationMenuContext);
  if (!context) {
    throw new Error(
      "Navigation menu components must be used within NavigationMenuContainer",
    );
  }
  return context;
};

export type NavigationMenuContainerProps = Omit<TooltipProps, "text"> &
  DecoratorProps & {
    hoverHeightRatio?: number;
    hoverWidthRatio?: number;
    highlight?: boolean;
    children?: React.ReactNode;
  };

const NavigationMenuContainer = styled(
  ({
    children,
    hoverHeightRatio = 1,
    hoverWidthRatio = 1,
    highlight = true,
    ...props
  }: NavigationMenuContainerProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<number>();
    const [displayHighlight, setDisplayHighlight] = useState<boolean>(false);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [tooltipContent, setTooltipContent] = useState<React.ReactNode>(null);
    const [isTooltipHovered, setIsTooltipHovered] = useState(false);
    const { rect, setRect } = useRect();

    // Clear any existing timeout to prevent stale closures
    const clearTimeout = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
      }
    };

    // Clean up timeout on unmount
    React.useEffect(() => {
      return () => clearTimeout();
    }, []);

    const closeTooltip = React.useCallback(() => {
      setDisplayHighlight(false);
      setActiveId(null);
      setTooltipContent(null);
    }, []);

    const handleMouseOver = React.useCallback(
      (event: React.MouseEvent<HTMLElement>, id: string) => {
        clearTimeout();
        if (!event.target) return;
        if (activeId === id) return;
        setRect(event, () => containerRef.current);
        if (highlight) {
          setDisplayHighlight(true);
        }
        setActiveId(id);
      },
      [activeId, highlight, setRect],
    );

    const handleMouseLeave = React.useCallback(() => {
      if (!isTooltipHovered) {
        closeTooltip();
      }
    }, [isTooltipHovered, closeTooltip]);

    const handleTooltipMouseEnter = React.useCallback(() => {
      clearTimeout();
      setIsTooltipHovered(true);
    }, []);

    const handleTooltipMouseLeave = React.useCallback(() => {
      setIsTooltipHovered(false);
      timeoutRef.current = window.setTimeout(() => {
        closeTooltip();
      }, 100); // Small delay to handle edge cases
    }, [closeTooltip]);

    const contextValue = React.useMemo(
      () => ({
        handleMouseOver,
        handleMouseLeave,
        handleTooltipMouseEnter,
        handleTooltipMouseLeave,
        activeId,
        setTooltipContent,
        highlight,
        hoverHeightRatio,
        hoverWidthRatio,
      }),
      [
        handleMouseOver,
        handleMouseLeave,
        handleTooltipMouseEnter,
        handleTooltipMouseLeave,
        activeId,
        highlight,
        hoverHeightRatio,
        hoverWidthRatio,
      ],
    );

    return (
      <NavigationMenuContext.Provider value={contextValue}>
        <Tooltip
          offset={8}
          placement={"bottom"}
          text={tooltipContent}
          leaveDelay={0}
          enterDelay={0}
          visible={
            tooltipContent !== null
            //  && displayHighlight
          }
          portalCss={css`
            left: ${rect.left +
            (containerRef.current?.offsetLeft || 0)}px !important;
            transform: translateX(0) !important;
            transition: left 0.15s !important;

            ${TooltipIcon} {
              left: ${rect.width / 2}px;
              transition: left 0.15s !important;
            }

            & > div {
              pointer-events: all !important;
            }
          `}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
          {...props}
        >
          <Container
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
            pos={"relative"}
            w={"100%"}
            nav
          >
            <Highlight
              br={"round"}
              rect={rect}
              visible={displayHighlight}
              hoverHeightRatio={hoverHeightRatio}
              hoverWidthRatio={hoverWidthRatio}
            />
            {children}
          </Container>
        </Tooltip>
      </NavigationMenuContext.Provider>
    );
  },
)``;

const NavigationMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavigationMenuItem = styled.li`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  position: relative;
`;

export type NavigationMenuButtonProps = {
  active?: boolean;
  disabled?: boolean;
  id?: string;
  children?: React.ReactNode;
} & (
  | ({
      unstyled?: true;
    } & React.PropsWithChildren)
  | ({
      unstyled?: false;
    } & ButtonProps &
      DecoratorProps)
);

const NavigationMenuButton = styled(
  ({ active, disabled, unstyled, id, ...props }: NavigationMenuButtonProps) => {
    const { handleMouseOver } = useNavigationMenu();
    const itemContext = React.useContext(NavigationMenuItemContext);
    const buttonId = itemContext?.id || id || getId();

    const handleHover = React.useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        handleMouseOver(e, buttonId);
      },
      [buttonId, handleMouseOver],
    );

    if (unstyled && props.children) {
      return React.cloneElement(props.children as React.ReactElement, {
        ...props,
        onMouseOver: handleHover,
      });
    }

    return (
      <Button
        size={"small"}
        shape={"round"}
        variant={"ghost"}
        role={"menuitem"}
        active={active}
        onMouseOver={handleHover}
        disabled={disabled}
        {...props}
      >
        <Text size={"inherit"} color={active ? "lightest" : "light"}>
          {props.children}
        </Text>
      </Button>
    );
  },
)`
  border-width: 0;

  &:hover {
    border-width: 0;
  }
`;

const StyledContent = styled.ul`
  pointer-events: all;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap.normal};
`;

type NavigationMenuContentProps = {
  children: React.ReactNode;
  id?: string;
} & DecoratorProps;

const NavigationMenuContent = styled(
  ({ children, id, ...props }: NavigationMenuContentProps) => {
    const { activeId, setTooltipContent } = useNavigationMenu();
    const itemContext = React.useContext(NavigationMenuItemContext);
    const contentId = itemContext?.id || id;

    const content = React.useMemo(
      () => <StyledContent {...props}>{children}</StyledContent>,
      [children, props],
    );

    React.useEffect(() => {
      if (contentId && activeId === contentId) {
        setTooltipContent(content);
      }
    }, [activeId, content, contentId, setTooltipContent]);

    return null;
  },
)``;

const NavigationMenuIcon = styled(Icon).attrs({
  color: "light",
})`
  transform: rotate(0deg);
  transition: transform 0.3s;
  ${NavigationMenuButton}:hover & {
    transform: rotate(180deg);
  }
`;

const NavigationMenuItemContext = createContext<{ id: string | null }>({
  id: null,
});

type NavigationMenuItemProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLLIElement>;

const NavigationMenuItemWithContext = ({
  children,
  ...props
}: NavigationMenuItemProps) => {
  const itemId = getId();

  return (
    <NavigationMenuItemContext.Provider value={{ id: itemId }}>
      <NavigationMenuItem {...props}>{children}</NavigationMenuItem>
    </NavigationMenuItemContext.Provider>
  );
};

export type NavigationMenuSectionProps = ContainerProps;

const NavigationMenuSection = styled(
  ({ children, ...props }: NavigationMenuSectionProps) => (
    <Container
      // as={"li"}
      gap={"tiny"}
      {...props}
    >
      {children}
    </Container>
  ),
)``;

export type NavigationMenuSectionHeaderProps = TextProps;

const NavigationMenuSectionHeader = styled(
  ({ children, ...props }: NavigationMenuSectionHeaderProps) => (
    <Text span size={"small"} color={"lighter"} {...props}>
      {children}
    </Text>
  ),
)``;

export type NavigationMenuSectionContentProps = ContainerProps;

const NavigationMenuSectionContent = styled(
  ({ children, ...props }: NavigationMenuSectionContentProps) => (
    <Container
      // forwardedAs={"ul"}
      gap={"tiny"}
      {...props}
    >
      {children}
    </Container>
  ),
)``;

export type NavigationMenuSectionItemProps = ContainerProps;

const NavigationMenuSectionItem = styled(
  ({ children, ...props }: NavigationMenuSectionItemProps) => (
    <Container
      // forwardedAs={"li"}
      gap={"small"}
      w={248}
      py={"tiny"}
      align={"center"}
      row
      {...props}
    >
      {children}
    </Container>
  ),
)``;

export type NavigationMenuSectionItemIconProps = ContainerProps & {
  icon: NonNullable<IconProps["icon"]>;
};

const NavigationMenuSectionItemIcon = styled(
  ({ icon, ...props }: NavigationMenuSectionItemIconProps) => (
    <Container align={"center"} justify={"center"} {...props}>
      <Container
        bw={1}
        align={"center"}
        justify={"center"}
        w={32}
        h={32}
        br={"square"}
      >
        <Icon icon={icon} />
      </Container>
    </Container>
  ),
)``;

export type NavigationMenuSectionItemNameProps = TextProps;

const NavigationMenuSectionItemName = styled(
  ({ children, ...props }: NavigationMenuSectionItemNameProps) => (
    <Text size={"compact"} {...props}>
      {children}
    </Text>
  ),
)``;

export type NavigationMenuSectionItemDescriptionProps = TextProps;

const NavigationMenuSectionItemDescription = styled(
  ({ children, ...props }: NavigationMenuSectionItemDescriptionProps) => (
    <Text size={"tiny"} color={"light"} {...props}>
      {children}
    </Text>
  ),
)``;

export const NavigationMenu = {
  Container: NavigationMenuContainer,
  List: withDecorator(NavigationMenuList),
  Item: withDecorator(NavigationMenuItemWithContext),
  Button: NavigationMenuButton,
  Content: NavigationMenuContent,
  Icon: NavigationMenuIcon,
  Section: NavigationMenuSection,
  SectionHeader: NavigationMenuSectionHeader,
  SectionContent: NavigationMenuSectionContent,
  SectionItem: NavigationMenuSectionItem,
  SectionItemIcon: NavigationMenuSectionItemIcon,
  SectionItemName: NavigationMenuSectionItemName,
  SectionItemDescription: NavigationMenuSectionItemDescription,
};
