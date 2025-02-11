import React from "react";
import { TouchableOpacityProps } from "react-native/types";
import styled from "styled-components/native";

import {
  KitchnComponent,
  NormalSizes,
  AccentColors,
  Text as KitchnText,
  withScale,
} from "../..";

type Props = {
  shape?: "square" | "round";
  size?: NormalSizes;
  loading?: boolean;
  disabled?: boolean;
  width?: number | string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: keyof AccentColors;
  variant?: "ghost" | "shadow";
  children?: string | React.ReactNode;
};

export type ButtonProps = KitchnComponent<Props, TouchableOpacityProps>;

const ButtonComponent = ({
  children,
  size,
  shape = "square",
  prefix,
  type,
  variant,
  suffix,
  ...props
}: ButtonProps) => {
  const textColor =
    props.loading || props.disabled
      ? "lightest"
      : type === "light"
        ? "darkest"
        : type === "dark"
          ? "lightest"
          : undefined;

  return (
    <Container
      shape={shape}
      size={size}
      type={type}
      variant={variant}
      activeOpacity={0.9}
      {...props}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      {children && typeof children === "string" ? (
        <KitchnText
          color={textColor}
          accent={
            variant === "ghost"
              ? type === "light"
                ? "light"
                : type === "info"
                  ? "info"
                  : type === "success"
                    ? "success"
                    : type === "warning"
                      ? "warning"
                      : type === "danger"
                        ? "danger"
                        : type === "secondary"
                          ? "secondary"
                          : type === "primary"
                            ? "primary"
                            : undefined
              : !textColor
                ? "light"
                : undefined
          }
          size={
            size === "small" ? "small" : size === "large" ? "medium" : "normal"
          }
          weight={"bold"}
        >
          {children}
        </KitchnText>
      ) : (
        children
      )}
      {suffix && <Suffix>{suffix}</Suffix>}
    </Container>
  );
};

const Container = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: ${({ shape }) => (shape === "round" ? "99999px" : "5px")};

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "4px 8px";
      case "large":
        return "12px 16px";
      case "normal":
      default:
        return "8px 12px";
    }
  }};

  background: ${(props) => {
    if (props.loading || props.disabled)
      return `${props.theme.colors.layout.darkest}`;

    if (props.variant === "ghost") return "transparent";

    switch (props.type) {
      case "dark":
        return props.theme.colors.layout.darkest;
      case "light":
        return props.theme.colors.layout.lightest;
      case "info":
        return props.theme.colors.accent.info;
      case "success":
        return props.theme.colors.accent.success;
      case "warning":
        return props.theme.colors.accent.warning;
      case "danger":
        return props.theme.colors.accent.danger;
      case "secondary":
        return props.theme.colors.accent.secondary;
      case "primary":
      default:
        return props.theme.colors.accent.primary;
    }
  }};

  border: ${(props) => {
    if (props.loading || props.disabled)
      return `1px solid ${props.theme.colors.layout.darker}`;

    if (props.variant === "ghost") return "1px solid transparent";

    switch (props.type) {
      case "dark":
        return `1px solid ${props.theme.colors.layout.darker}`;
      case "light":
        return `1px solid ${props.theme.colors.layout.lightest}`;
      case "info":
        return `1px solid ${props.theme.colors.accent.info}`;
      case "success":
        return `1px solid ${props.theme.colors.accent.success}`;
      case "warning":
        return `1px solid ${props.theme.colors.accent.warning}`;
      case "danger":
        return `1px solid ${props.theme.colors.accent.danger}`;
      case "secondary":
        return `1px solid ${props.theme.colors.accent.secondary}`;
      case "primary":
      default:
        return `1px solid ${props.theme.colors.accent.secondary}`;
    }
  }};
`;

const Prefix = styled.View`
  margin-right: 7px;
`;

const Suffix = styled.View`
  margin-left: 7px;
`;

ButtonComponent.displayName = "KitchnButton";
export const Button = withScale(ButtonComponent);
export default Button;
