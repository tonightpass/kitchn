import React from "react";
import styled from "styled-components";
import { UrlObject } from "url";

import { withScale } from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import isString from "../../utils/isString";

type Props = {
  /**
   * The link's href.
   */
  href?: string | UrlObject;

  /**
   * The link's classname.
   */
  className?: string;

  /**
   * The link's onClick.
   */
  onClick?: (_event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;

  /**
   * The link's status (if it's disabled or not).
   */
  disabled?: boolean;

  /**
   * The link's variant.
   */
  variant?: "highlight" | "primary" | "secondary" | "blend";
};

export type LinkProps = KitchenComponent<
  Props,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>;

const LinkComponent = styled(
  ({
    as: Component = "a",
    href,
    className,
    disabled,
    onClick,
    variant,
    children,
    ...props
  }: LinkProps) => {
    const [NextLink, setNextLink] = React.useState<any>(null);

    React.useEffect(() => {
      const fetchNextLink = async () => {
        try {
          const { default: NextLinkModule } = await import("next/link");
          setNextLink(NextLinkModule);
        } catch (_err) {
          // ignore
        }
      };

      fetchNextLink();
    }, []);
    disabled = disabled || (!onClick && !href);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) return event.preventDefault();
      if (onClick) onClick(event);
    };

    if (isString(href)) {
      const internal = (href as string).match(/^(\/(?!\/)[^#]*|#.*)$/);
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

    if (href && NextLink) {
      return (
        <NextLink
          href={href}
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
  },
)<LinkProps>`
  box-sizing: border-box;
  display: inline-flex;
  font-weight: ${({ theme, variant }) =>
    variant === "blend" && theme.weight.medium};
  text-decoration: none;
  transition:
    opacity 0.2s ease-in-out,
    filter 0.2s ease-in-out;
  line-height: 1.25;
  ${({ variant }) =>
    variant === "blend" &&
    `
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;`};

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

  &:hover {
    ${({ theme, disabled, variant, onClick, href }) => {
      disabled = disabled || (!onClick && !href);

      return `
      cursor: ${disabled ? "default" : "pointer"};
      filter: ${
        (variant && variant !== "blend") || disabled
          ? "none"
          : "brightness(0.8)"
      };
      ${
        variant === "secondary"
          ? `
  background-image: linear-gradient(currentColor, currentColor);
  background-size: 100% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  color: ${theme.colors.text.lightest};`
          : ""
      };
    `;
    }}
  }
`;

LinkComponent.displayName = "KitchenLink";
export const Link = withScale(LinkComponent);
export default Link;
