import React from "react";
import { RiMoreLine } from "react-icons/ri";
import styled from "styled-components";

import { withDecorator } from "../../hoc";
import { KitchnComponent } from "../../types";
import Container, { ContainerProps } from "../Container";
import Icon from "../Icon";
import { Menu } from "../Menu";
import Skeleton from "../Skeleton";

type Props = ContainerProps & {
  thumbnail?: React.ReactNode;
  menuContent?: React.ReactNode;
  actions?: React.ReactNode;
  checkbox?: React.ReactNode;
  placeholder?: boolean;
};

export type EntityProps = KitchnComponent<Props>;

const EntityComponent = styled(
  ({
    checkbox,
    children,
    thumbnail,
    menuContent,
    actions,
    placeholder = false,
    ...rest
  }: EntityProps) => {
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          placeholder,
        });
      }
      return child;
    });

    return (
      <Container bg={"darkest"} p={"normal"} bw={1} br={"square"} {...rest}>
        <Container gap={"small"} align={"center"} row>
          <Skeleton show={placeholder}>{checkbox}</Skeleton>
          <Skeleton show={placeholder}>{thumbnail}</Skeleton>
          {childrenWithProps}
          <Skeleton show={placeholder}>{actions}</Skeleton>
          <Skeleton show={placeholder}>
            {menuContent && (
              <Menu.Container placement={"bottomEnd"}>
                <Menu.Button type={"dark"} variant={"ghost"} size={"small"}>
                  <Icon icon={RiMoreLine} />
                </Menu.Button>
                <Menu.Content width={200}>{menuContent}</Menu.Content>
              </Menu.Container>
            )}
          </Skeleton>
        </Container>
      </Container>
    );
  },
)``;

const EntityComponentWrapper = styled(EntityComponent)`
  &${EntityComponent}+${EntityComponent} {
    position: relative;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    &::before {
      content: "";
      height: calc(${({ theme }) => theme.radius.square} - 1px);
      display: block;
      position: absolute;
      left: -1px;
      right: -1px;
      top: calc(${({ theme }) => theme.radius.square} * -1);
      background: ${({ theme }) => theme.colors.layout.darkest};
      border-left: 1px solid ${({ theme }) => theme.colors.layout.dark};
      border-right: 1px solid ${({ theme }) => theme.colors.layout.dark};
    }
  }
`;

EntityComponentWrapper.displayName = "KitchnEntity";
export const Entity = withDecorator(EntityComponentWrapper);
export default Entity;
