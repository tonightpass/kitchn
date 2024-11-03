import React, { createContext, useContext, useRef, useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

import { DecoratorProps, withDecorator } from "../../hoc";
import { useRect } from "../../hooks";
import { getId } from "../../utils";
import Button, { ButtonProps } from "../Button";
import Container from "../Container";
import Highlight from "../Highlight";
import Icon from "../Icon";
import Text from "../Text";
import Tooltip, { TooltipProps } from "../Tooltip";

// Context type definitions
type NavigationMenuContextType = {
  handleMouseOver: (event: React.MouseEvent<HTMLElement>, id: string) => void;
  handleMouseLeave: () => void;
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

export const NAVBAR_HEIGHT = 60;

export const NavbarGlobalStyle = createGlobalStyle`
  html {
    scroll-padding-top: ${NAVBAR_HEIGHT}px;
  }
`;

const NavigationMenuContainer = styled(
  ({
    children,
    hoverHeightRatio = 1,
    hoverWidthRatio = 1,
    highlight = true,
    ...props
  }: NavigationMenuContainerProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [displayHighlight, setDisplayHighlight] = useState<boolean>(false);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [tooltipContent, setTooltipContent] = useState<React.ReactNode>(null);
    const { rect, setRect } = useRect();

    const handleMouseOver = React.useCallback(
      (event: React.MouseEvent<HTMLElement>, id: string) => {
        if (!event.target) return;
        if (activeId === id) return; // Prevent unnecessary updates
        setRect(event, () => containerRef.current);
        if (highlight) {
          setDisplayHighlight(true);
        }
        setActiveId(id);
      },
      [activeId, highlight, setRect],
    );

    const handleMouseLeave = React.useCallback(() => {
      setDisplayHighlight(false);
      setActiveId(null);
    }, []);

    const contextValue = React.useMemo(
      () => ({
        handleMouseOver,
        handleMouseLeave,
        activeId,
        setTooltipContent,
        highlight,
        hoverHeightRatio,
        hoverWidthRatio,
      }),
      [
        handleMouseOver,
        handleMouseLeave,
        activeId,
        highlight,
        hoverHeightRatio,
        hoverWidthRatio,
      ],
    );

    console.log(rect.left);

    return (
      <NavigationMenuContext.Provider value={contextValue}>
        <Tooltip
          placement={"bottom"}
          text={tooltipContent}
          leaveDelay={0}
          enterDelay={0}
          visible={tooltipContent !== null}
          portalCss={css`
            left: ${rect.left +
            (containerRef.current?.offsetLeft || 0)}px !important;
            transform: translateX(0) !important;
            transition: left 0.15s !important;
          `}
          {...props}
        >
          <Container
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
            pos={"relative"}
            w={"100%"}
            nav
          >
            <NavbarGlobalStyle />
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
  children?: React.ReactNode; // Add children prop type
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
          {props.children} {buttonId}
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

const StyledContent = styled.div``;

type NavigationMenuContentProps = {
  children: React.ReactNode;
  id?: string;
} & DecoratorProps;

const NavigationMenuContent = styled(
  ({ children, id, ...props }: NavigationMenuContentProps) => {
    const { activeId, setTooltipContent } = useNavigationMenu();
    const itemContext = React.useContext(NavigationMenuItemContext);
    const contentId = itemContext?.id || id;

    // Memoize the content to prevent unnecessary re-renders
    const content = React.useMemo(
      () => <StyledContent {...props}>{children}</StyledContent>,
      [children, props],
    );

    React.useEffect(() => {
      if (contentId && activeId === contentId) {
        setTooltipContent(content);
      }

      return () => {
        setTooltipContent(null);
      };
    }, [activeId, contentId]);

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

// Create Item context to pass ID to Content
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

export const NavigationMenu = {
  Container: NavigationMenuContainer,
  List: withDecorator(NavigationMenuList),
  Item: withDecorator(NavigationMenuItemWithContext),
  Button: NavigationMenuButton,
  Content: NavigationMenuContent,
  Icon: NavigationMenuIcon,
};
