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
   * The link's locale.
   */
  locale?: string;

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
    locale,
    className,
    disabled,
    onClick,
    variant,
    children,
    ...props
  }: LinkProps) => {
    disabled = disabled || (!onClick && !href);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      console.log("handleClick", disabled, onClick);
      if (disabled) return event.preventDefault();
      if (onClick) onClick(event);
    };

    if (isString(href)) {
      href = href as string;
      // regex to check if the href is internal or external

      const internal = href.match(/^(\/(?!\/)[^#]*|#.*)$/);
      if (!internal) {
        return (
          <Component
            href={href}
            className={className}
            target={"_blank"}
            rel={"noopener noreferrer"}
            onClick={handleClick}
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
          locale={locale}
          className={className}
          onClick={handleClick}
          {...props}
        >
          {children}
        </NextLink>
      );
    }

    return (
      <Component
        className={className}
        onClick={handleClick}
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
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme, variant }) =>
    variant === "blend" ? theme.weight.bold : theme.weight.regular};
  text-decoration: ${({ variant }) =>
    variant === "blend" ? "underline" : "none"};

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
      return theme.colors.text.lighter;
    } else {
      return theme.colors.text.lightest;
    }
  }};

  :hover {
    ${({ theme, disabled, variant, onClick, href }) => {
      disabled = disabled || (!onClick && !href);

      return `
      cursor: ${disabled ? "default" : "pointer"};
      filter: ${
        (variant && variant !== "blend") || disabled
          ? "none"
          : "brightness(0.8)"
      };
      text-decoration: ${
        variant && variant !== "secondary" ? "underline" : "none"
      };
      ${variant === "secondary" ? `color: ${theme.colors.text.lightest};` : ""}
    `;
    }}
  }
`;

export default Link;
