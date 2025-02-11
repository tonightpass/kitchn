import {
  Container,
  Link,
  Footer,
  FooterGroup,
  FooterLink,
  Icon,
  useBreakpoint,
} from "kitchn";
import { useRouter } from "next/router";
import { ThemeSwitch } from "nextra-theme-docs";
import React from "react";
import {
  RiDiscordFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from "react-icons/ri";

import { TonightPassLogo } from "@/components/brands";

const navigation = {
  products: [
    {
      name: "Ticketing",
      href: "https://tonightpass.com/ticketing",
    },
    {
      name: "Order Kiosk",
      href: "https://tonightpass.com/order-kiosk",
    },
    {
      name: "Agency",
      href: "https://tonightpass.com/agency",
    },
    {
      name: "Social",
      href: "https://tonightpass.com/social",
    },
    {
      name: "Jobs",
      href: "https://tonightpass.com/jobs",
    },
    {
      name: "Artists",
      href: "https://tonightpass.com/artists",
    },
    {
      name: "Promoters",
      href: "https://tonightpass.com/promoters",
    },
    {
      name: "Suppliers",
      href: "https://tonightpass.com/suppliers",
    },
    {
      name: "Venues",
      href: "https://tonightpass.com/venues",
    },
    {
      name: "Developers",
      href: "https://tonightpass.com/developers",
    },
  ],
  ressources: [
    {
      name: "Help Center",
      href: "https://tonightpass.com/help-center",
    },
    {
      name: "Community",
      href: "https://tonightpass.com/community",
    },
    {
      name: "Design",
      href: "/docs/brands",
    },
    {
      name: "Status",
      href: "https://tonightpass.openstatus.dev",
    },
    {
      name: "Comparison",
      href: "https://tonightpass.com/comparison",
    },
  ],
  compagny: [
    {
      name: "About",
      href: "https://tonightpass.com/about",
    },
    {
      name: "News",
      href: "https://tonightpass.com/news",
    },
    {
      name: "Careers",
      href: "https://tonightpass.com/careers",
    },
    {
      name: "Contact Us",
      href: "https://tonightpass.com/contact",
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
      name: "Partners",
      href: "https://tonightpass.com/partners",
    },
    {
      name: "Privacy",
      href: "https://tonightpass.com/privacy",
    },
    {
      name: "Terms",
      href: "https://tonightpass.com/terms",
    },
    {
      name: "Company Details",
      href: "https://tonightpass.com/company-details",
    },
  ],
};

const CustomFooter = () => {
  const [mounted, setMounted] = React.useState(false);
  const { isMobile } = useBreakpoint();
  const router = useRouter();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Footer subfooter={"© 2023 Tonight Pass. All rights reserved."}>
      <Container mt={"small"} align={"flex-start"} justify={"flex-start"}>
        <Link href={"/"}>
          <TonightPassLogo height={30} width={"100%"} />
        </Link>

        {mounted && !router.pathname.startsWith("/docs") && (
          <Container my={"normal"}>
            <ThemeSwitch />
          </Container>
        )}
        <Container
          mt={"auto"}
          gap={"small"}
          mb={isMobile ? "small" : undefined}
          row
        >
          <Link href={"https://linkedin.com/company/tonightpass"}>
            <Icon icon={RiLinkedinFill} />
          </Link>
          <Link href={"https://instagram.com/tonightpass"}>
            <Icon icon={RiInstagramFill} />
          </Link>
          <Link href={"https://x.com/tonightpass"}>
            <Icon icon={RiTwitterXFill} />
          </Link>
          <Link href={"https://discord.gg/VvvAkPqQ98"}>
            <Icon icon={RiDiscordFill} />
          </Link>
          <Link href={"https://github.com/tonightpass"}>
            <Icon icon={RiGithubFill} />
          </Link>
        </Container>
      </Container>

      <FooterGroup title={"Products"}>
        {navigation.products.map((item, i) => (
          <FooterLink key={i} href={item.href}>
            {item.name}
          </FooterLink>
        ))}
      </FooterGroup>

      <FooterGroup title={"Ressources"}>
        {navigation.ressources.map((item, i) => (
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
    </Footer>
  );
};

export default CustomFooter;
