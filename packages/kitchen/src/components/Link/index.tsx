import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

export type LinkProps = KitchenComponent & {
  /**
   * The link's href.
   */
  href?: string;

  /**
   * The link's id.
   */
  id?: string;

  /**
   * The link's classname.
   */
  className?: string;

  /**
   * The link's onClick.
   */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;

  /**
   * The link's status (if it's disabled or not).
   */
  disabled?: boolean;

  /**
   * The link's variant.
   */
  variant?: "highlight" | "primary" | "secondary" | "blend";
};

const Link = styled(
  ({
    as: Component = "a",
    href,
    id,
    className,
    disabled,
    onClick,
    variant,
    children,
    ...props
  }: LinkProps) => {
    disabled = disabled || !onClick || !href;
    return (
      <Component
        className={className}
        id={id}
        disabled={disabled}
        onClick={onClick}
        href={href}
        variant={variant}
        {...props}
      >
        {children}
      </Component>
    );
  }
)<LinkProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  flex: 1;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => {
    return theme.colors.layout.dark;
  }}
    return "transparent";
  }};

  color: ${({ theme, variant, disabled }) => {
    if (variant === "highlight") {
      return theme.colors.accent.info;
    } else if (variant === "blend") {
      return theme.colors.accent.danger;
    } else if (variant === "secondary" || disabled) {
      return theme.colors.text.light;
    } else {
      return theme.colors.text.lightest;
    }
  }};
 
  

  padding: 8px 12px;

  font-size: ${({ theme }) => theme.size.normal};

  text-decoration: ${({ variant }) =>
    variant === "highlight" || variant === "blend" ? "underline" : "none"};

    :hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
        color: ${({ theme, variant, disabled }) => {
          if (variant === "secondary") {
            return theme.colors.text.light;
          } else if (disabled) {
            return theme.colors.text.lighter;
          } else {
            return theme.colors.text.lighter;
          }
        }};
`;

export default Link;
