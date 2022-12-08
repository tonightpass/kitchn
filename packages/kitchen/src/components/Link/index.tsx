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
  variant?: "highlight" | "secondary" | "blend";
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

  color: ${({ theme, variant }) => {
    if (variant === "highlight") {
      return theme.colors.accent.primary;
    } else if (variant === "blend") {
      return "inherit";
    } else if (variant === "secondary") {
      return theme.colors.text.light;
    } else {
      return theme.colors.text.lightest;
    }
  }};
 
  

  font-size: ${({ theme }) => theme.size.normal};
  // if the variant is blend the font weight should be set to medium
  font-weight: ${({ theme, variant }) =>
    variant === "blend" ? theme.weight.medium : theme.weight.regular};

  text-decoration: ${({ variant }) =>
    variant === "blend" ? "underline" : "none"};

    :hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
    filter: ${({ variant }) =>
      variant === "blend" ? "brightness(O.8)" : "none"};
      color: ${({ theme, variant, disabled }) => {
        if (variant === "secondary") {
          return theme.colors.text.lightest;
        } else if (variant === "highlight" || variant === "blend") {
          return "none";
        } else if (disabled || !variant) {
          return theme.colors.text.lightest;
        } else {
          return theme.colors.text.lighter;
        }
      }};
      text-decoration: ${({ variant }) =>
        variant === "highlight" || variant === "blend" ? "underline" : "none"};
      }
`;

export default Link;
