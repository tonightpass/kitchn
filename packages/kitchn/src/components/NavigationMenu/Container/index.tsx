import React from "react";
import styled, { css } from "styled-components";

import { NavigationMenuContext } from "../../../contexts/NavigationMenu";
import { DecoratorProps } from "../../../hoc";
import { useRect } from "../../../hooks";
import useNavigationMenu from "../../../hooks/useNavigationMenu";
import Container from "../../Container";
import Highlight from "../../Highlight";
import Tooltip, { TooltipProps } from "../../Tooltip";
import { TooltipContentInner } from "../../Tooltip/Content";
import TooltipIcon from "../../Tooltip/Icon";

export type NavigationMenuContainerProps = Omit<TooltipProps, "text"> &
  DecoratorProps & {
    hoverHeightRatio?: number;
    hoverWidthRatio?: number;
    highlight?: boolean;
    children?: React.ReactNode;
  };

const NavigationMenuContainer = styled(
  ({ children, portalCss, ...props }: NavigationMenuContainerProps) => {
    const {
      tooltipContent,
      displayHighlight,
      isTooltipHovered,
      handleTooltipMouseEnter,
      handleTooltipMouseLeave,
      handleMouseLeave,
      rect,
      containerRef,
      hoverHeightRatio,
      hoverWidthRatio,
    } = useNavigationMenu();

    const navigationMenuCss = css`
      left: ${rect.left + (containerRef.current?.offsetLeft || 0)}px !important;
      transform: translateX(0) !important;
      transition: left 0.15s !important;

      ${TooltipContentInner} {
        padding: 0;

        ${TooltipIcon} {
          left: ${rect.width / 2}px;
          transition: left 0.15s !important;
        }
      }

      & > div {
        pointer-events: all !important;
      }
    `;

    const mergedPortalCss = css`
      ${navigationMenuCss} ${portalCss}
    `;

    return (
      <Tooltip
        offset={8}
        placement={"bottom"}
        text={tooltipContent}
        leaveDelay={0}
        enterDelay={0}
        visible={
          tooltipContent !== null && (displayHighlight || isTooltipHovered)
        }
        portalCss={mergedPortalCss}
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
    );
  },
)``;

const NavigationMenuContainerWithContext = ({
  children,
  hoverHeightRatio = 1,
  hoverWidthRatio = 1,
  highlight = true,
  ...props
}: NavigationMenuContainerProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [previousId, setPreviousId] = React.useState<string | null>(null);

  const timeoutRef = React.useRef<number>();
  const [displayHighlight, setDisplayHighlight] =
    React.useState<boolean>(false);
  const [tooltipContent, setTooltipContent] =
    React.useState<React.ReactNode>(null);
  const [isTooltipHovered, setIsTooltipHovered] = React.useState(false);
  const [menuItems, setMenuItems] = React.useState<string[]>([]);
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
      setPreviousId(activeId);
      setActiveId(id);
    },
    [activeId, highlight],
  );

  const handleMouseLeave = React.useCallback(() => {
    if (!isTooltipHovered) {
      timeoutRef.current = window.setTimeout(() => {
        closeTooltip();
      }, 150);
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

  return (
    <NavigationMenuContext.Provider
      value={{
        containerRef,
        activeId,
        previousId,
        handleMouseOver,
        handleMouseLeave,
        handleTooltipMouseEnter,
        handleTooltipMouseLeave,
        tooltipContent,
        setTooltipContent,
        displayHighlight,
        setDisplayHighlight,
        isTooltipHovered,
        setIsTooltipHovered,
        rect,
        setRect,
        highlight,
        hoverHeightRatio,
        hoverWidthRatio,
        menuItems,
        setMenuItems,
      }}
    >
      <NavigationMenuContainer {...props}>{children}</NavigationMenuContainer>
    </NavigationMenuContext.Provider>
  );
};

export default NavigationMenuContainerWithContext;
