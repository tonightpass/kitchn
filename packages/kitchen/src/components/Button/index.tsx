import React from "react";
import styled, { useTheme } from "styled-components";
import { AccentColors, LayoutColors } from "../../types/theme";
import convertRGBToRGBA from "../../utils/convertRGBToRGBA";
import { isNumber } from "../../utils/isNumber";
import Spinner from "../Spinner";

export type ButtonProps = {
  as?: React.ElementType;
  children?: React.ReactNode;
  shape?: "square" | "round";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  width?: number | string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  type?: keyof AccentColors;
  hover?: {
    background: string;
    color: string;
    border: string;
  };
};

const Button = styled(
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
      <Component {...props}>
        {(prefix || loading) && (
          <Prefix hasContent={children != undefined}>
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
          </Prefix>
        )}
        <Content width={width}>{children}</Content>
        {suffix && <Suffix>{suffix}</Suffix>}
      </Component>
    );
  }
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
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  border-radius: ${({ shape }) => (shape === "round" ? "99999px" : "8px")};
  width: ${({ width }) =>
    width ? (isNumber(width) ? `${width}px` : width) : "auto"};

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "4px 8px";
      case "large":
        return "12px 16px";
      case "medium":
      default:
        return "8px 12px";
    }
  }};

  background: ${(props) => {
    if (props.loading || props.disabled)
      return `${props.theme.colors.layout.darkest}`;

    switch (props.type) {
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
    switch (props.type) {
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
        return "12px";
      case "large":
        return "16px";
      case "medium":
      default:
        return "14px";
    }
  }};

  :hover {
    ${(props) =>
      props.hover?.background && `background: ${props.hover.background}`};
    ${(props) => props.hover?.color && `color: ${props.hover.background}`};
    border: ${(props) => {
      if (props.loading || props.disabled)
        return `1px solid ${props.theme.colors.layout.darker}`;

      switch (props.type) {
        case "info":
        case "success":
        case "warning":
        case "danger":
          return `1px solid ${convertRGBToRGBA(
            props.theme.colors.accent.light,
            0.25
          )}`;
        case "secondary":
          return `1px solid ${props.theme.colors.accent.primary}`;
        case "primary":
        default:
          return `1px solid ${props.theme.colors.accent.secondary}`;
      }
    }};

    :focus {
      filter: brightness(
        ${(props) => {
          if (props.disabled || props.loading) return "1";
          return "0.8";
        }}
      );
    }
  }
`;

const Content = styled.span<{ width?: string | number }>`
  font-weight: ${({ theme }) => theme.weight.semiBold};
  font-size: inherit;
  font-family: inherit;

  ${({ width }) =>
    width &&
    "text-overflow: ellipsis; overflow: hidden;  white-space: nowrap;"};
`;

const Prefix = styled.span<{ hasContent: boolean }>`
  font-size: inherit;
  ${({ hasContent }) => hasContent && "margin-right: 7px;"}
`;
const Suffix = styled.span`
  font-size: inherit;
  margin-left: 7px;
`;

export default Button;
