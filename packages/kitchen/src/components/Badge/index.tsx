import React from "react";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";

type Props = {
  /**
   * The size of the badge.
   * @default "normal"
   */
  size?: NormalSizes;

  /**
   * The type of the badge.
   * @default "primary"
   */
  type?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";

  /**
   * The font weight of the badge.
   */
  bold?: boolean;
};

export type BadgeProps = KitchenComponent<Props>;

const Badge = styled((props: BadgeProps) => {
  return <span {...props} />;
})<BadgeProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  padding: 0 10px;
  font-weight: ${({ bold, theme }) =>
    bold ? theme.weight.bold : theme.weight.medium};
  border-radius: 8px;

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "2px 4px";
      case "large":
        return "8px 12px";
      case "normal":
      default:
        return "4px 8px";
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return props.theme.size.tiny;
      case "large":
        return props.theme.size.normal;
      case "normal":
      default:
        return props.theme.size.small;
    }
  }};

  color: ${({ theme, type }) => {
    switch (type) {
      case "danger":
      case "warning":
      case "info":
      case "success":
      case "secondary":
        return theme.colors.accent.light;
      case "primary":
      default:
        return theme.colors.text.lightest;
    }
  }};

  background-color: ${({ theme, type }) => {
    switch (type) {
      case "danger":
        return theme.colors.accent.danger;
      case "warning":
        return theme.colors.accent.warning;
      case "info":
        return theme.colors.accent.info;
      case "success":
        return theme.colors.accent.success;
      case "secondary":
        return theme.colors.layout.light;
      case "primary":
      default:
        return theme.colors.layout.dark;
    }
  }};
`;

export default Badge;
