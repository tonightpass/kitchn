import NextLink from "next/link";
import React from "react";
import styled from "styled-components";
import { UrlObject } from "url";
import isString from "../../utils/isString";
import { KitchenComponent } from "../../types";

export type LinkProps = KitchenComponent & {
  /**
   * The link's href.
   */
  href?: string | UrlObject;

  /**
   * The link's as.
   */
  as?: any;

  /**
   * The link's locale.
   */
  locale?: string;

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
    as,
    locale,
    id,
    className,
    disabled,
    onClick,
    variant,
    children,
    ...props
  }: LinkProps) => {
    disabled = disabled || !onClick || !href;
    if (isString(href)) {
      href = href as string;
      const internal = /^\/(?!\/)/.test(href);
      if (!internal) {
        return (
          <Component
            href={href}
            className={className}
            target={"_blank"}
            rel={"noopener noreferrer"}
            {...props}
          >
            {children}
          </Component>
        );
      }
    }

    if (href) {
      return (
        <NextLink
          href={href}
          as={as}
          locale={locale}
          className={className}
          {...props}
        >
          {children}
        </NextLink>
      );
    }

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
      variant === "secondary" ? "none" : "brightness(O.8)"};
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
