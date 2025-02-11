import React, { Children } from "react";
import styled, { css } from "styled-components";

import { DecoratorProps, withDecorator } from "../../hoc";
import { KitchnComponent } from "../../types";
import Button, { ButtonProps } from "../button";
import Container, { ContainerProps } from "../container";
import Link, { LinkProps } from "../link";
import Text from "../text";
import Tooltip, { TooltipOnContentClick, TooltipProps } from "../tooltip";
import { TooltipContentInner } from "../tooltip/content";

export type MenuContainerProps = Omit<TooltipProps, "text">;

const MenuContainer = styled(
  ({
    children,
    placement = "bottomStart",
    portalCss = css``,
    hideArrow = true,
    trigger = "click",
    ...props
  }: MenuContainerProps) => {
    const menuButtons = Children.toArray(children).filter(
      (child) => React.isValidElement(child) && child.type === MenuButton,
    );

    const menuContent = Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === MenuContent,
    );

    const mergedPortalCss = css`
      ${portalMenuCss} ${portalCss}
    `;

    const onContentClick: TooltipOnContentClick = (e, _, setVisible) => {
      let targetElement = e.target as HTMLElement | null;

      while (targetElement && targetElement !== e.currentTarget) {
        if (targetElement.hasAttribute("data-menuitem")) {
          setVisible(false);
          return;
        }
        targetElement = targetElement.parentElement;
      }

      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    };

    return (
      <Tooltip
        role={"menu"}
        trigger={trigger}
        text={menuContent}
        portalCss={mergedPortalCss}
        hideArrow={hideArrow}
        placement={placement}
        onContentClick={onContentClick}
        offset={5}
        {...props}
      >
        {menuButtons}
      </Tooltip>
    );
  },
)``;

const portalMenuCss = css`
  ${TooltipContentInner} {
    padding: ${({ theme }) => theme.gap.tiny};
  }
`;

export type MenuButtonProps =
  | ({
      unstyled?: true;
    } & React.PropsWithChildren)
  | ({
      unstyled?: false;
    } & ButtonProps &
      DecoratorProps);

const MenuButton = ({ unstyled, ...props }: MenuButtonProps) => {
  if (unstyled && props.children) {
    return React.cloneElement(props.children as React.ReactElement, props);
  }

  return <Button role={"menuitem"} {...props} />;
};

export type MenuContentProps = ContainerProps;

const MenuContent = styled(
  ({ children, ...props }: MenuItemProps & DecoratorProps) => {
    return (
      <Container as={"ul"} {...props}>
        {children}
      </Container>
    );
  },
)``;

export type MenuItemProps = KitchnComponent<
  {
    disabled?: boolean;
    active?: boolean;
  },
  ContainerProps
>;

const MenuItem = styled.li.attrs<{
  "data-menuitem"?: boolean;
}>({ "data-menuitem": true })<MenuItemProps>`
  list-style: none;
  padding: ${({ theme }) => theme.gap.small} ${({ theme }) => theme.gap.normal};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  font-size: ${({ theme }) => theme.size.compact};
  border-radius: ${({ theme }) => theme.radius.square};
  width: 100%;
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
  `}

  ${({ active, theme }) =>
    active &&
    `
    background-color: ${theme.colors.layout.dark};
  `}

  &:hover {
    ${({ disabled, theme }) =>
      !disabled && `background-color: ${theme.colors.layout.dark};`}
  }
`;

export type MenuLinkProps = KitchnComponent<
  MenuItemProps,
  LinkProps & DecoratorProps
>;

const MenuLink = styled((props: MenuLinkProps) => (
  <MenuItem as={Link} {...props} />
))`
  &:hover {
    filter: brightness(1);
  }
`;

export type MenuSectionProps = KitchnComponent<
  {
    title: string;
  },
  ContainerProps
>;

const MenuSection = styled(
  ({ title, children, ...props }: MenuSectionProps) => (
    <Container role={"presentation"} as={"li"} {...props}>
      <Text
        size={"tiny"}
        color={"light"}
        px={"small"}
        pb={"tiny"}
        pt={"normal"}
      >
        {title}
      </Text>
      {children}
    </Container>
  ),
)``;

const MenuDivider = styled.div`
  height: 1px;
  width: calc(100% + ${({ theme }) => theme.gap.tiny} * 2);
  background-color: ${({ theme }) => theme.colors.layout.dark};
  margin: ${({ theme }) => theme.gap.tiny} 0 ${({ theme }) => theme.gap.tiny} -${({ theme }) => theme.gap.tiny};
`;

export const Menu = {
  Container: MenuContainer,
  Button: MenuButton,
  Content: MenuContent,
  Item: withDecorator(MenuItem),
  Link: MenuLink,
  Section: MenuSection,
  Divider: withDecorator(MenuDivider),
};
