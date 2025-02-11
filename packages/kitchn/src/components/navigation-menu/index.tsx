import React from "react";
import styled from "styled-components";

import NavigationMenuButton, { NavigationMenuButtonIcon } from "./button";
import NavigationMenuContainerWithContext from "./container";
import NavigationMenuContent from "./content";
import NavigationMenuItemWithContext from "./item";
import { withDecorator } from "../../hoc";
import Container, { ContainerProps } from "../container";
import Icon, { IconProps } from "../icon";
import Text, { TextProps } from "../text";

const NavigationMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export type NavigationMenuSectionProps = ContainerProps;

const NavigationMenuSection = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.tiny};
`;

export type NavigationMenuSectionHeaderProps = TextProps;

const NavigationMenuSectionHeader = styled(
  ({ children, ...props }: NavigationMenuSectionHeaderProps) => (
    <Text span size={"small"} color={"lighter"} {...props}>
      {children}
    </Text>
  ),
)``;

const NavigationMenuSectionContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.tiny};
`;

const NavigationMenuSectionItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.small};
  padding: ${({ theme }) => theme.gap.tiny} 0;
  width: 248px;
`;

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
  ButtonIcon: NavigationMenuButtonIcon,
  Content: NavigationMenuContent,
  Section: withDecorator(NavigationMenuSection),
  SectionHeader: NavigationMenuSectionHeader,
  SectionContent: withDecorator(NavigationMenuSectionContent),
  SectionItem: withDecorator(NavigationMenuSectionItem),
  SectionItemIcon: NavigationMenuSectionItemIcon,
  SectionItemName: NavigationMenuSectionItemName,
  SectionItemDescription: NavigationMenuSectionItemDescription,
};
