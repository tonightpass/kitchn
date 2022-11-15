import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import { AccentColors } from "../../types/theme";

export type BadgeProps = KitchenComponent & {
  /**
   * The size of the badge.
   * @default "normal"
   */
  size: "small" | "normal" | "large";

  /**
   * The type of the badge.
   * @default "primary"
   */

  type?: keyof AccentColors;
};

const Badge = styled((props: BadgeProps) => {
  return <div {...props} />;
})<BadgeProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  border-radius: 5px;

  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "3px";
      case "normal":
        return "6px";
      case "large":
        return "10px";
      default:
        return "6px";
    }
  }};

  font-size: ${(props) => props.theme.size[props.size || "normal"]};

  color: ${({ theme, type }) => {
    switch (type) {
      case "light":
        return theme.colors.text.darkest;
      default:
        return theme.colors.text.lightest;
    }
  }};

  border: ${({ theme, type }) => {
    switch (type) {
      case "dark":
        return `1px solid ${theme.colors.layout.lighter}`;
      default:
        return "none";
    }
  }};

  background-color: ${({ theme, type }) => {
    switch (type) {
      case "primary":
        return theme.colors.accent.primary;
      case "secondary":
        return theme.colors.accent.secondary;
      case "success":
        return theme.colors.accent.success;
      case "warning":
        return theme.colors.accent.warning;
      case "danger":
        return theme.colors.accent.danger;
      case "info":
        return theme.colors.accent.info;
      case "light":
        return theme.colors.accent.light;
      case "dark":
        return theme.colors.accent.dark;
      default:
        return theme.colors.accent.primary;
    }
  }};
`;

export default Badge;
