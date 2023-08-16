import React from "react";
import styled from "styled-components";

import useBreakpoint from "../../hooks/useBreakpoint";
import { KitchenComponent } from "../../types";
import Collapse from "../Collapse";
import Link from "../Link";

type Props = {
  /**
   * The subfooter of the footer.
   */
  subfooter?: string;

  children?: React.ReactNode;
};

export type FooterProps = KitchenComponent<Props>;

const Footer = styled(({ children, subfooter, ...props }: FooterProps) => {
  return (
    <footer {...props}>
      <Nav>{children}</Nav>
      {subfooter && <Subfooter>{subfooter}</Subfooter>}
    </footer>
  );
})<FooterProps>`
  position: relative;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.gap.normal} 0;
`;

const Nav = styled.nav`
  max-width: ${({ theme }) => theme.breakpoint.laptop};
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.gap.normal};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const FooterColumn = styled.div``;

type GroupProps = {
  title: string;
};
export type FooterGroupProps = KitchenComponent<GroupProps>;
export const FooterGroup = styled(({ title, children }: FooterGroupProps) => {
  const { isMobile } = useBreakpoint();
  if (isMobile) {
    return (
      <FooterCollapse title={title}>
        <List>{children}</List>
      </FooterCollapse>
    );
  } else
    return (
      <div>
        <label htmlFor={title}>
          <GroupTitle>{title}</GroupTitle>
        </label>
        <List>{children}</List>
      </div>
    );
})<FooterGroupProps>`
  margin-right: 24px;
`;
const GroupTitle = styled.h2`
  margin: ${({ theme }) => theme.gap.small} 0;
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const List = styled.ul`
  list-style-type: none;
  color: ${({ theme }) => theme.colors.text.light};
  display: flex;
  flex-direction: column;
`;

const FooterCollapse = styled(Collapse)``;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.lighter};
  text-decoration: none;
  margin: ${({ theme }) => theme.gap.tiny} 0;
`;

export const ListItem = styled(({ children }) => {
  return (
    <li>
      <FooterLink>{children}</FooterLink>
    </li>
  );
})`
  margin-top: 24px;
`;

const Subfooter = styled.section`
  font-size: ${({ theme }) => theme.size.small};
  max-width: ${({ theme }) => theme.breakpoint.laptop};
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.gap.normal};
  padding: 0 ${({ theme }) => theme.gap.normal};
`;

export default Footer;
