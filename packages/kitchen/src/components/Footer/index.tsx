import React from "react";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import useBreakpoint from "../../hooks/useBreakpoint";
import { KitchenComponent } from "../../types";
import Collapse from "../Collapse";
import Link, { LinkProps } from "../Link";

type Props = {
  /**
   * The subfooter of the footer.
   */
  subfooter?: React.ReactNode;
  children?: React.ReactNode;
};

export type FooterProps = KitchenComponent<Props>;

const FooterComponent = styled(
  ({ children, subfooter, ...props }: FooterProps) => {
    return (
      <footer {...props}>
        <Nav>{children}</Nav>
        {subfooter && <SubFooter>{subfooter}</SubFooter>}
      </footer>
    );
  },
)<FooterProps>`
  position: relative;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.gap.normal} 0;
`;

const Nav = styled.nav`
  max-width: ${({ theme }) => theme.breakpoint.laptop};
  margin: 0 auto;
  flex-wrap: nowrap;
  padding: 0 ${({ theme }) => theme.gap.normal};
  display: grid;
  grid-template-columns: ${({ children }) =>
    `repeat(${Math.min(React.Children.count(children), 4)}, 1fr)`};
  gap: ${({ theme }) => theme.gap.normal};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}) {
    grid-template-columns: ${({ children }) =>
      `repeat(${Math.min(React.Children.count(children), 3)}, 1fr)`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: ${({ children }) =>
      `repeat(${Math.min(React.Children.count(children), 2)}, 1fr)`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: ${({ children }) =>
      `repeat(${Math.min(React.Children.count(children), 1)}, 1fr)`};
  }
`;

export const FooterColumn = styled.div``;

type GroupProps = {
  title: string;
};
export type FooterGroupProps = KitchenComponent<GroupProps>;
export const FooterGroup = styled(
  ({ title, children, ...props }: FooterGroupProps) => {
    const { isMobile } = useBreakpoint();
    if (isMobile) {
      return (
        <Collapse title={title}>
          <FooterList>{children}</FooterList>
        </Collapse>
      );
    } else
      return (
        <div {...props}>
          <label htmlFor={title}>
            <GroupTitle>{title}</GroupTitle>
          </label>
          <FooterList>{children}</FooterList>
        </div>
      );
  },
)<FooterGroupProps>``;

const GroupTitle = styled.h2`
  margin: ${({ theme }) => theme.gap.small} 0;
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const FooterList = styled.ul`
  color: ${({ theme }) => theme.colors.text.light};
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.gap.tiny} ${({ theme }) => theme.gap.small};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export type FooterLinkProps = KitchenComponent<
  {
    href: LinkProps["href"];
  },
  React.HTMLProps<HTMLLIElement>
>;

export const FooterLink = styled(
  ({ children, href, ...props }: FooterLinkProps) => {
    return (
      <li {...props}>
        <Link href={href}>{children}</Link>
      </li>
    );
  },
)`
  ${Link} {
    color: ${({ theme }) => theme.colors.text.lighter};
    font-size: 14px;
    text-decoration: none;
  }
`;

export const SubFooter = styled.section`
  font-size: ${({ theme }) => theme.size.small};
  max-width: ${({ theme }) => theme.breakpoint.laptop};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gap.normal};
  padding: 0 ${({ theme }) => theme.gap.normal};
`;

FooterComponent.displayName = "KitchenFooter";
export const Footer = withScale(FooterComponent);
export default Footer;
