import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { Keyframes, RuleSet } from "styled-components/dist/types";

import NavigationMenuContainerWithContext from "./Container";
import NavigationMenuItemWithContext from "./Item";
import { DecoratorProps, withDecorator } from "../../hoc";
import useNavigationMenu from "../../hooks/useNavigationMenu";
import useNavigationMenuItem from "../../hooks/useNavigationMenuItem";
import { getId } from "../../utils";
import Button, { ButtonProps } from "../Button";
import Container, { ContainerProps } from "../Container";
import Icon, { IconProps } from "../Icon";
import Text, { TextProps } from "../Text";

const NavigationMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
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
    const { handleMouseOver, setTooltipContent } = useNavigationMenu();
    const { id: itemId, hasContent } = useNavigationMenuItem();
    const buttonId = itemId || id || getId();

    const handleHover = React.useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        // Clear tooltip content if this is a simple button without dropdown content
        if (!hasContent) {
          setTooltipContent(null);
        }
        handleMouseOver(e, buttonId);
      },
      [buttonId, handleMouseOver, setTooltipContent, hasContent],
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

const enterFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const enterFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const exitToRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
`;

const exitToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
`;

export const animationConfig = {
  duration: "250ms", // Slightly faster for more snappy feel
  easing: "cubic-bezier(0.4, 0.0, 0.2, 1)", // Smooth easing
  delayBeforeRemove: 200, // Time to wait before removing from DOM
};

// Direction type for animation
export type AnimationDirection =
  | "normal"
  | "reverse"
  | "alternate"
  | "alternate-reverse";

// Menu slide direction
export type MenuDirection = "right" | "left";

// Animation config type
export interface AnimationConfig {
  duration: string;
  easing: string;
}

// Animation state interface
export interface AnimationState {
  isEntering: boolean;
  shouldRender: boolean;
}

// Return type for useMenuAnimation hook
export interface MenuAnimationResult extends AnimationState {
  animationStyle: RuleSet<object>;
}

export const createAnimationStyle = (
  animation: Keyframes,
  direction: AnimationDirection = "normal",
) => css`
  animation: ${animation} ${animationConfig.duration} ${animationConfig.easing}
    ${direction} forwards;
`;

export const useMenuAnimation = (
  isVisible: boolean,
  direction: MenuDirection = "right",
): {
  shouldRender: boolean;
  isEntering: boolean;
  direction: MenuDirection;
} => {
  const [animationState, setAnimationState] = useState<AnimationState>({
    isEntering: false,
    shouldRender: isVisible,
  });

  useEffect(() => {
    let timer: number;

    if (isVisible) {
      // Immediately show and start enter animation
      setAnimationState({
        isEntering: true,
        shouldRender: true,
      });
    } else {
      // Start exit animation but keep rendered
      setAnimationState({
        isEntering: false,
        shouldRender: true,
      });

      // Remove from DOM after animation completes
      timer = window.setTimeout(() => {
        setAnimationState({
          isEntering: false,
          shouldRender: false,
        });
      }, animationConfig.delayBeforeRemove);
    }

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [isVisible]);

  return {
    ...animationState,
    direction,
  };
};

// StyledContent component using the animations
export const StyledContent = styled.ul<{
  isEntering: boolean;
  direction: MenuDirection;
}>`
  pointer-events: all;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap.normal};
  opacity: 0;
  transform: translateX(
    ${({ direction }) => (direction === "right" ? "100px" : "-100px")}
  );
  ${({ isEntering, direction }) =>
    isEntering
      ? css`
          animation: ${direction === "right" ? enterFromRight : enterFromLeft}
            ${animationConfig.duration} ${animationConfig.easing} forwards;
        `
      : css`
          animation: ${direction === "right" ? exitToRight : exitToLeft}
            ${animationConfig.duration} ${animationConfig.easing} forwards;
        `}
`;

type NavigationMenuContentProps = {
  children: React.ReactNode;
  id?: string;
} & DecoratorProps;

export const NavigationMenuContent = ({
  children,
  id,
  ...props
}: NavigationMenuContentProps) => {
  const { activeId, previousId, setTooltipContent } = useNavigationMenu();
  const { id: itemId } = useNavigationMenuItem();
  const contentId = itemId || id;
  const isActive = activeId === contentId;

  // Determine animation direction based on IDs
  const getAnimationDirection = (): MenuDirection => {
    if (!previousId || !activeId) return "right";

    // Get all menu items to determine their order
    // eslint-disable-next-line quotes
    const menuItems = document.querySelectorAll('[role="menuitem"]');
    let previousIndex = -1;
    let currentIndex = -1;

    menuItems.forEach((item, index) => {
      if (item.closest("li")?.getAttribute("data-id") === previousId) {
        previousIndex = index;
      }
      if (item.closest("li")?.getAttribute("data-id") === activeId) {
        currentIndex = index;
      }
    });

    return previousIndex < currentIndex ? "right" : "left";
  };

  const { shouldRender, isEntering, direction } = useMenuAnimation(
    isActive,
    getAnimationDirection(),
  );

  const content = React.useMemo(
    () =>
      shouldRender && (
        <Container px={12} py={8} overflow={"hidden"}>
          <StyledContent
            {...props}
            isEntering={isEntering}
            direction={direction}
          >
            {children}
          </StyledContent>
        </Container>
      ),
    [children, props, shouldRender, isEntering, direction],
  );

  React.useEffect(() => {
    if (contentId && isActive) {
      setTooltipContent(content);
    }
  }, [contentId, isActive, content, setTooltipContent]);

  return null;
};

const NavigationMenuIcon = styled(Icon).attrs({
  color: "light",
})`
  transform: rotate(0deg);
  transition: transform 0.3s;
  ${NavigationMenuButton}:hover & {
    transform: rotate(180deg);
  }
`;

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
  Container: NavigationMenuContainerWithContext,
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
