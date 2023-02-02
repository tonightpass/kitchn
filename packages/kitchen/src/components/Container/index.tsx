import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import { Gap } from "../../types/theme";

type Props = {
  row?: boolean;
  flex?: number | string;
  direction?: ("row" | "column")[];
  gap?: keyof Gap | number;
  align?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
};

export type ContainerProps = KitchenComponent<Props>;

const Container = styled(({ children, ...rest }: ContainerProps) => {
  return <div {...rest}>{children}</div>;
})`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  position: relative;
  max-width: 100%;
  flex: ${(props) => (props.flex !== undefined ? props.flex : 1)};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  ${(props) =>
    props.gap &&
    `gap: ${props.theme.gap[props.gap as keyof Gap] || `${props.gap}px`};`}

  @media (max-width: ${(props) => props.theme.breakpoint.laptop}) {
    ${(props) =>
      props.direction &&
      props.direction[2] &&
      `flex-direction: ${props.direction[2]};`}
  }

  @media (max-width: ${(props) => props.theme.breakpoint.tablet}) {
    ${(props) =>
      props.direction &&
      props.direction[1] &&
      `flex-direction: ${props.direction[1]};`}
  }

  @media (max-width: ${(props) => props.theme.breakpoint.mobile}) {
    ${(props) =>
      props.direction &&
      props.direction[0] &&
      `flex-direction: ${props.direction[0]};`}
  }
`;

export default Container;
