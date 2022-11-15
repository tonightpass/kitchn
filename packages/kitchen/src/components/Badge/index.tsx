import React from "react";
import styled from "styled-components";

const Badge = styled((props) => {
  return <div {...props} />;
})`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  border-radius: 5px;

  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "20px";
      case "normal":
        return "30px";
      case "large":
        return "40px";
      default:
        return "30px";
    }
  }};

  color: ${({ theme, mode }) => {
    switch (mode) {
      case "light":
        return theme.colors.text.darkest;
      default:
        return theme.colors.text.lightest;
    }
  }};

  background-color: ${({ theme, mode }) => {
    switch (mode) {
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
