import Logo from "@components/Logo/TonightPass";
import kitchen, {
  Container,
  Footer,
  FooterGroup,
  FooterLink,
} from "@tonightpass/kitchen";
import { Link } from "@tonightpass/kitchen/next";
import { ThemeSwitch } from "nextra-theme-docs";

const navigation = {
  kitchen: [
    {
      name: "Documentation",
      href: "/docs",
    },
    {
      name: "Components",
      href: "/docs/components",
    },
    {
      name: "Showcase",
      href: "/showcase",
    },
    {
      name: "Roadmap",
      href: "https://github.com/orgs/tonightpass/projects/2",
    },
  ],
  compagny: [
    {
      name: "Tonight Pass",
      href: "https://tonightpass.com",
    },
    {
      name: "onRuntime Studio",
      href: "https://onruntime.com",
    },
    {
      name: "Open Source",
      href: "https://github.com/tonightpass",
    },
    {
      name: "Contact Sales",
      href: "mailto:sales@tonightpass.com",
    },
  ],
  legal: [
    {
      name: "License",
      href: "https://github.com/tonightpass/kitchen/blob/master/LICENSE",
    },
    {
      name: "Privacy",
      href: "https://tonightpass.com/privacy",
    },
    {
      name: "Terms",
      href: "https://tonightpass.com/terms",
    },
  ],
  support: [
    {
      name: "GitHub",
      href: "https://github.com/tonightpass/kitchen",
    },
    {
      name: "Discord",
      href: "https://discord.gg/VvvAkPqQ98",
    },
  ],
};

const CustomFooter = ({ menu }: { menu: boolean }) => {
  return (
    <Container bg={"darker"}>
      {menu && (
        <Container
          maxWidth={"laptop"}
          py={"small"}
          px={"normal"}
          mx={"auto"}
          w={"100%"}
          row
        >
          <ThemeSwitch />
        </Container>
      )}

      <Footer subfooter={"© 2023 Tonight Pass. All rights reserved."}>
        <StyledContainer
          mt={"small"}
          align={"flex-start"}
          justify={"flex-start"}
          gap={"normal"}
        >
          <Link href={"/"}>
            <Logo />
          </Link>

          <Link
            href={"https://vercel.com/?utm_source=tonightpass&utm_campaign=oss"}
          >
            <Vercel
              px={"small"}
              py={"tiny"}
              bga={"dark"}
              align={"center"}
              br={"square"}
              row
            >
              {"Deployed by"}{" "}
              <span role={"img"} aria-label={"Vercel logo"}>
                {"▲\r"}
              </span>{" "}
              {"Vercel\r"}
            </Vercel>
          </Link>
        </StyledContainer>

        <FooterGroup title={"Ressources"}>
          {navigation.kitchen.map((item, i) => (
            <FooterLink key={i} href={item.href}>
              {item.name}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title={"Company"}>
          {navigation.compagny.map((item, i) => (
            <FooterLink key={i} href={item.href}>
              {item.name}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title={"Legal"}>
          {navigation.legal.map((item, i) => (
            <FooterLink key={i} href={item.href}>
              {item.name}
            </FooterLink>
          ))}
        </FooterGroup>

        <FooterGroup title={"Support"}>
          {navigation.support.map((item, i) => (
            <FooterLink key={i} href={item.href}>
              {item.name}
            </FooterLink>
          ))}
        </FooterGroup>
      </Footer>
    </Container>
  );
};

const Vercel = kitchen(Container)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.accent.light};
  span {
    color: ${({ theme }) => theme.colors.accent.light};
  }
`;

const StyledContainer = kitchen(Container)`
  color: ${({ theme }) => theme.colors.accent.light};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: ${({ theme }) => theme.gap.small} 0;
  }
`;

export default CustomFooter;
