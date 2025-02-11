import React from "react";
import styled from "styled-components";

import { DecoratorProps } from "../../../hoc";
import useNavigationMenu from "../../../hooks/use-navigation-menu";
import useNavigationMenuItem from "../../../hooks/use-navigation-menu-item";
import { getId } from "../../../utils";
import Button, { ButtonProps } from "../../Button";
import Icon, { IconProps } from "../../Icon";
import Text from "../../Text";

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
    const { id: itemId, hasContent, position } = useNavigationMenuItem();
    const buttonId = itemId || id || getId();

    const handleHover = (e: React.MouseEvent<HTMLElement>) => {
      // Clear tooltip content if this is a simple button without dropdown content
      if (!hasContent) {
        setTooltipContent(null);
      }
      handleMouseOver(e, buttonId);
    };

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
        active={"foobar"}
        data-position={position}
        onMouseOver={handleHover}
        disabled={disabled}
        {...props}
      >
        <Text size={"inherit"} color={active ? "lightest" : "light"} span>
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

export const NavigationMenuButtonIcon = styled(
  ({ children, ...props }: IconProps) => {
    const { activeId } = useNavigationMenu();
    const { id: itemId } = useNavigationMenuItem();
    const isActive = activeId === itemId;

    return (
      <Icon
        // TODO: Replace style by styled props
        style={{
          transform: isActive ? "rotate(180deg)" : "none",
        }}
        {...props}
      >
        {children}
      </Icon>
    );
  },
)`
  transition: transform 0.3s;
  color: ${({ theme }) => theme.colors.text.light};
`;

export default NavigationMenuButton;
