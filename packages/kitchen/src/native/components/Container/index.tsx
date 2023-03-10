import {
  AccentColors,
  Gap,
  Radius,
  KitchenComponent,
  LayoutColors,
  withScale,
  isNumber,
} from "../../";
import React from "react";
import { View, ViewComponent } from "react-native";
import styled from "styled-components/native";

type Props = {
  row?: boolean;
  flex?: number | string;
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
  background?: string | keyof LayoutColors;
  bg?: string | keyof LayoutColors;
  backgroundColor?: keyof LayoutColors;
  bgc?: keyof LayoutColors;
  backgroundAccent?: keyof AccentColors;
  bga?: keyof AccentColors;
  borderRadius?: number | string | keyof Radius;
  br?: number | string | keyof Radius;
};

export type ContainerProps = KitchenComponent<Props, ViewComponent>;

const Container = styled(({ children, ...props }: ContainerProps) => {
  return <View {...props}>{children}</View>;
})`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  max-width: 100%;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  background: ${(props) =>
    props.theme.colors.layout[
      (props.background || props.bg) as keyof LayoutColors
    ] ||
    props.background ||
    props.bg ||
    props.theme.colors.layout[
      (props.backgroundColor || props.bgc) as keyof LayoutColors
    ] ||
    props.theme.colors.accent[
      (props.backgroundAccent || props.bga) as keyof AccentColors
    ] ||
    "transparent"};
  ${(props) =>
    props.gap &&
    `gap: ${props.theme.gap[props.gap as keyof Gap] || `${props.gap}px`};`}
  ${(props) => props.flex && props.flex};
  ${(props) =>
    (props.borderRadius || props.br) &&
    `border-radius: ${
      props.theme.radius[(props.borderRadius || props.br) as keyof Radius] ||
      (isNumber(props.borderRadius)
        ? `${props.borderRadius || props.br}px`
        : props.borderRadius || props.br)
    };`}
`;

export default withScale(Container);
