import React from "react";
import styled, { css, keyframes, RuleSet } from "styled-components";
import { Keyframes } from "styled-components/dist/types";

import { DecoratorProps } from "../../../hoc";
import useNavigationMenu from "../../../hooks/use-navigation-menu";
import useNavigationMenuItem from "../../../hooks/use-navigation-menu-item";
import Container from "../../container";

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
export type MenuDirection = "right" | "left" | "none";

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
  const [animationState, setAnimationState] = React.useState<AnimationState>({
    isEntering: false,
    shouldRender: isVisible,
  });

  React.useEffect(() => {
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
    ${({ direction }) =>
      direction === "right" ? "100px" : direction === "left" ? "-100px" : "0"}
  );
  ${({ isEntering, direction }) =>
    direction !== "none"
      ? isEntering
        ? css`
            animation: ${direction === "right" ? enterFromRight : enterFromLeft}
              ${animationConfig.duration} ${animationConfig.easing} forwards;
          `
        : css`
            animation: ${direction === "right" ? exitToRight : exitToLeft}
              ${animationConfig.duration} ${animationConfig.easing} forwards;
          `
      : css`
          opacity: 1;
          transform: translateX(0);
        `}
`;

type NavigationMenuContentProps = {
  children: React.ReactNode;
  id?: string;
} & DecoratorProps;

const NavigationMenuContent = ({
  children,
  id,
  ...props
}: NavigationMenuContentProps) => {
  const { activeId, previousId, setTooltipContent, menuItems } =
    useNavigationMenu();
  const { id: itemId } = useNavigationMenuItem();
  const contentId = itemId || id;
  const isActive = activeId === contentId;

  // Determine animation direction based on IDs
  const getAnimationDirection = (): MenuDirection => {
    if (!previousId || !activeId) return "none";

    let previousIndex = -1;
    let currentIndex = -1;

    menuItems.forEach((item, index) => {
      if (item === previousId) {
        previousIndex = index;
      }
      if (item === activeId) {
        currentIndex = index;
      }
    });

    return previousIndex < currentIndex ? "right" : "left";
  };

  const { shouldRender, isEntering, direction } = useMenuAnimation(
    isActive,
    getAnimationDirection(),
  );

  const content = (shouldRender: boolean) => {
    if (shouldRender) {
      return (
        <Container px={12} py={8} overflow={"hidden"}>
          <StyledContent
            {...props}
            isEntering={isEntering}
            direction={direction}
          >
            {children}
          </StyledContent>
        </Container>
      );
    }

    return null;
  };

  React.useEffect(() => {
    if (contentId && isActive) {
      setTooltipContent(content(shouldRender));
    }
  }, [shouldRender, contentId, isActive]);

  return null;
};

export default NavigationMenuContent;
