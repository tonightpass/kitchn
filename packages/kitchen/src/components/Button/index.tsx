import React from "react";
import styled, { useTheme } from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchenComponent, NormalSizes } from "../../types";
import { AccentColors } from "../../types/theme";
import { convertRGBToRGBA } from "../../utils/convertRGBToRGBA";
import { isNumber } from "../../utils/isNumber";
import Spinner from "../Spinner";

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
  hover?: {
    background: string;
    color: string;
    border: string;
  };
};

export type ButtonProps = KitchenComponent<
  Props,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const ButtonComponent = styled(
  ({
    as: Component = "button",
    children,
    loading,
    size,
    width,
    prefix,
    suffix,
    ...props
  }: ButtonProps) => {
    const theme = useTheme();
    return (
      <Component
        aria-label={children ? undefined : "Button"}
        aria-busy={loading ? "true" : undefined}
        aria-disabled={props.disabled ? "true" : undefined}
        role={"button"}
        {...props}
      >
        {(prefix || loading) && (
          <ButtonPrefix hasContent={children !== undefined}>
            {loading ? (
              <Spinner
                size={
                  size
                    ? size === "small"
                      ? 12
                      : size === "large"
                        ? 20
                        : 16
                    : 16
                }
                color={theme.colors.text.dark}
              />
            ) : (
              prefix
            )}
          </ButtonPrefix>
        )}
        <ButtonContent width={width}>{children}</ButtonContent>
        {suffix && <ButtonSuffix>{suffix}</ButtonSuffix>}
      </Component>
    );
  },
)<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  transition: all 0.2s;
  line-height: 1;
  user-select: none;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-family: ${({ theme }) => theme.family.primary};
  cursor: ${(props) =>
    props.disabled || props.loading ? "not-allowed" : "pointer"};
  border-radius: ${({ shape }) => (shape === "round" ? "99999px" : "8px")};
  width: ${({ width }) =>
    width ? (isNumber(width) ? `${width}px` : width) : "auto"};

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "6px 8px";
      case "large":
        return "12px 16px";
      case "normal":
      default:
        return "8px 12px";
    }
  }};

  color: ${(props) => {
    if (props.loading || props.disabled)
      return `${props.theme.colors.text.light}`;

    if (props.variant === "ghost") {
      switch (props.type) {
        case "light":
          return props.theme.colors.text.lightest;
        case "dark":
          return props.theme.colors.text.light;
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
          return props.theme.colors.accent.primary;
      }
    }

    switch (props.type) {
      case "light":
        return props.theme.colors.text.darkest;
      case "dark":
        return props.theme.colors.text.lightest;
      default:
        return props.theme.colors.accent.light;
    }
  }};

  background: ${(props) => {
    if (props.loading || props.disabled)
      return `${props.theme.colors.layout.darker}`;

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
      return `1px solid ${props.theme.colors.layout.dark}`;

    if (props.variant === "ghost") return "1px solid transparent";

    switch (props.type) {
      case "dark":
        return `1px solid ${props.theme.colors.layout.dark}`;
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

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return props.theme.size.small;
      case "large":
        return props.theme.size.medium;
      case "normal":
      default:
        return props.theme.size.normal;
    }
  }};

  &:hover {
    ${(props) =>
      props.hover?.background && `background: ${props.hover.background}`};
    ${(props) => props.hover?.color && `color: ${props.hover.background}`};

    background: ${(props) => {
      if (props.variant === "ghost") {
        switch (props.type) {
          case "light":
            return convertRGBToRGBA(props.theme.colors.layout.lightest, 0.25);
          case "dark":
            return convertRGBToRGBA(props.theme.colors.layout.light, 0.25);
          case "info":
            return convertRGBToRGBA(props.theme.colors.accent.info, 0.25);
          case "success":
            return convertRGBToRGBA(props.theme.colors.accent.success, 0.25);
          case "warning":
            return convertRGBToRGBA(props.theme.colors.accent.warning, 0.25);
          case "danger":
            return convertRGBToRGBA(props.theme.colors.accent.danger, 0.25);
          case "secondary":
            return convertRGBToRGBA(props.theme.colors.accent.secondary, 0.25);
          case "primary":
            return convertRGBToRGBA(props.theme.colors.accent.primary, 0.25);
        }
      }

      return "";
    }};

    border: ${(props) => {
      if (props.loading || props.disabled)
        return `1px solid ${props.theme.colors.layout.dark}`;

      if (props.variant === "ghost") {
        return `1px solid ${convertRGBToRGBA(
          props.theme.colors.accent.light,
          0.25,
        )}`;
      }

      switch (props.type) {
        case "dark":
          return `1px solid ${convertRGBToRGBA(
            props.theme.colors.layout.dark,
            0.25,
          )}`;
        case "light":
        case "info":
        case "success":
        case "warning":
        case "danger":
        case "secondary":
          return `1px solid ${convertRGBToRGBA(
            props.theme.colors.accent.light,
            0.25,
          )}`;
        case "primary":
        default:
          return `1px solid ${props.theme.colors.accent.secondary}`;
      }
    }};

    &:focus {
      filter: brightness(
        ${(props) => {
          if (props.disabled || props.loading) return "1";
          return "0.8";
        }}
      );
    }
  }
`;

export const ButtonContent = styled.span<{ width?: string | number }>`
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: inherit;
  font-family: inherit;
  color: inherit;

  ${({ width }) =>
    width &&
    "text-overflow: ellipsis; overflow: hidden;  white-space: nowrap;"};
`;

export const ButtonPrefix = styled.span<{ hasContent: boolean }>`
  font-size: inherit;
  color: inherit;
  ${({ hasContent }) => hasContent && "margin-right: 7px;"}
`;
export const ButtonSuffix = styled.span`
  font-size: inherit;
  margin-left: 7px;
  color: inherit;
`;

ButtonComponent.displayName = "KitchenButton";
export const Button = withDecorator(ButtonComponent);
export default Button;
