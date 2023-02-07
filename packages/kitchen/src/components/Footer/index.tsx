import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

type Props = {
  /**
   * The color of the footer.
   */
  light?: boolean;

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
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  padding: calc(1.5 * 24px) 24px 24px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const FooterColumn = styled.div``;

type GroupProps = {
  title: string;
};
export type FooterGroupProps = KitchenComponent<GroupProps>;
export const FooterGroup = styled(({ title, children }: FooterGroupProps) => {
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
  margin: 12px 0;
`;

const List = styled.ul`
  list-style-type: none;
  color: ${({ theme }) => theme.colors.text.light};
  display: flex;
  flex-direction: column;
`;

// export const ListItem = styled(({ children }: FooterGroupProps) => {
//   return (
//     <li>
//       <FooterLink>{children}</FooterLink>
//     </li>
//   );
// });

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
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
  margin: 0 auto;
  margin-top: 24px;
`;

export default Footer;
