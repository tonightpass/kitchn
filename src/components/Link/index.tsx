import NextLink, { LinkProps } from "next/link";
import React from "react";
import styled from "styled-components";
import { UrlObject } from "url";
import isString from "../../utils/isString";

interface Props extends Omit<LinkProps, "href"> {
  className?: string;
  children: React.ReactNode;
  href?: string | UrlObject;
  as?: any;
  locale?: string;
  [key: string]: any;
}

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, href, as, locale, ...rest }, ref) => {
    if (isString(href)) {
      href = href as string;
      const internal = /^\/(?!\/)/.test(href);
      if (!internal) {
        return (
          <Anchor
            href={href}
            className={className}
            target={"_blank"}
            rel={"noopener noreferrer"}
            ref={ref}
            {...rest}
          >
            {children}
          </Anchor>
        );
      }
    }

    if (href) {
      return (
        <NextLink href={href} as={as} locale={locale}>
          <Anchor href={href} className={className} ref={ref} {...rest}>
            {children}
          </Anchor>
        </NextLink>
      );
    }

    return (
      <Anchor className={className} ref={ref} {...rest}>
        {children}
      </Anchor>
    );
  }
);

Link.displayName = "Link";

const Anchor = styled.a<Props>`
  ${({ href, onClick }) =>
    href || onClick ? "cursor: pointer;" : "cursor: default;"}
`;

export default Link;
