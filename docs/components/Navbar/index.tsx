import kitchn, { Container, convertRGBToRGBA, Spacer } from "kitchn";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { KitchnLogo, SlashIcon, TonightPassIcon } from "../Brands";

export type NavbarLink = {
  label: string;
  href: string;
};

export type NavbarProps = {
  isScrolled?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isScrolled: isScrolledProp }) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = React.useState(isScrolledProp || false);

  const navbarLinks: NavbarLink[] = [
    {
      label: "Documentation",
      href: "/docs",
    },
    {
      label: "Components",
      href: "/docs/components",
    },
  ];

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY >= 25) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach the event listener when the component mounts
  React.useEffect(() => {
    if (!isScrolledProp) handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolledProp]);

  return (
    <>
      <Wrapper isScrolled={isScrolled}>
        <Content>
          <Nav>
            <NavItem>
              <Container align={"center"} row gap={"tiny"}>
                <Brand href={"https://tonightpass.com"}>
                  <TonightPassIcon height={30} width={"auto"} />
                </Brand>
                <SlashIcon height={30} />
                <Brand href={"/"}>
                  <KitchnLogo height={30} width={"auto"} />
                </Brand>
              </Container>
            </NavItem>

            <NavItem>
              {navbarLinks.map(({ label, href }) => (
                <NavLink
                  key={label}
                  href={href}
                  active={router.pathname === href}
                >
                  {label}
                </NavLink>
              ))}
            </NavItem>
          </Nav>
        </Content>
      </Wrapper>
      <Spacer y={4} w={"100%"} />
    </>
  );
};

const Wrapper = kitchn.div<{ isScrolled: boolean }>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  background-color: ${({ theme, isScrolled }) =>
    isScrolled
      ? convertRGBToRGBA(theme.colors.layout.darkest, 0.5)
      : "transparent"};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(40px)" : "none")};
  border-bottom: ${({ theme, isScrolled }) =>
    isScrolled
      ? `1px solid ${theme.colors.layout.dark}`
      : "1px solid transparent"};
  transition: all 0.15s;
`;

const Content = kitchn.div`
  height: 60px;
  padding: 0 ${({ theme }) => theme.gap.large};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = kitchn.ul`
  display: flex;
  gap: ${({ theme }) => theme.gap.medium};
  align-items: center;
`;

const NavItem = kitchn.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gap.small};
`;

const NavLink = kitchn(Link)<{ active: boolean }>`
  font-weight: ${({ theme }) => theme.weight.medium};
  padding: ${({ theme }) => theme.gap.tiny} ${({ theme }) => theme.gap.small};
  user-select: none;
`;

const Brand = kitchn(Link)`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  user-select: none;
`;

export default Navbar;
