import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Container, { ContainerProps } from "../Container";

export type NavigationMenuContainerProps = ContainerProps;

export const NAVBAR_HEIGHT = 60;

export const NavbarGlobalStyle = createGlobalStyle`
  html {
    scroll-padding-top: ${NAVBAR_HEIGHT}px;
  }
`;

const NavigationMenuContainer = styled(
  ({ children, ...props }: NavigationMenuContainerProps) => {
    return (
      <Container w={"100%"} nav {...props}>
        <NavbarGlobalStyle />
        {children}
      </Container>
    );
  },
)``;

export const NavigationMenu = {
  Container: NavigationMenuContainer,
  // Button: MenuButton,
  // Content: MenuContent,
  // Item: withDecorator(MenuItem),
  // Link: MenuLink,
  // Section: MenuSection,
  // Divider: withDecorator(MenuDivider),
};
