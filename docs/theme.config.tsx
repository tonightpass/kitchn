/* eslint-disable react-hooks/rules-of-hooks */
import { KitchnLogo, SlashIcon, TonightPassIcon } from "@components/Brands";
import Footer from "@components/Footer";
import { Container, Link } from "kitchn";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import urlcat from "urlcat";

const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
};

const [h, s] = rgbToHsl(80, 60, 245);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/tonightpass/kitchn",
  },
  docsRepositoryBase: "https://github.com/tonightpass/kitchn/blob/master/docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s",
    };
  },
  logoLink: false,
  logo: (
    <Container align={"center"} row gap={"tiny"}>
      <Link href={"https://tonightpass.com"}>
        <TonightPassIcon height={30} width={"100%"} />
      </Link>
      <SlashIcon height={30} />
      <Link href={"/"}>
        <KitchnLogo height={30} width={"100%"} />
      </Link>
    </Container>
  ),
  nextThemes: {
    defaultTheme: "dark",
    storageKey: "kc-theme",
  },
  chat: {
    link: "https://discord.gg/VvvAkPqQ98",
  },
  head: () => {
    const { title, ...meta } = useConfig().frontMatter;

    const finalTitle = title
      ? `${title}${title.includes("Kitchn") ? "" : " - Kitchn"}`
      : "Kitchn";
    const finalDescription =
      meta.description || "Delicious React styled components.";

    const finalThumbnailUrl =
      urlcat(
        `https://og-image.onruntime.com/${encodeURIComponent(finalTitle)}.jpeg`,
        {
          description: encodeURIComponent(finalDescription || ""),
          theme: "night",
          md: 1,
          fontSize: "100px",
          images: "https://tonightpass.com/static/images/logo/tonightpass.svg",
          thumbnail: meta.image,
        },
      ) || "https://tonightpass.com/static/images/open-graph-image.jpg";

    return (
      <>
        <meta name={"msapplication-TileColor"} content={"#ffffff"} />
        <meta name={"theme-color"} content={"#ffffff"} />
        <meta
          name={"viewport"}
          content={"width=device-width, initial-scale=1.0"}
        />
        <meta httpEquiv={"Content-Language"} content={"en"} />
        <meta name={"og:description"} content={finalDescription} />
        <meta name={"twitter:card"} content={"summary_large_image"} />
        <meta name={"twitter:image"} content={finalThumbnailUrl} />
        <meta name={"twitter:site:domain"} content={"kitchn.dev"} />
        <meta name={"twitter:url"} content={"https://kitchn.dev"} />
        <meta name={"og:title"} content={finalTitle} />
        <meta name={"og:image"} content={finalThumbnailUrl} />
        <meta name={"apple-mobile-web-app-title"} content={"Kitchn"} />
        <link
          rel={"apple-touch-icon"}
          sizes={"180x180"}
          href={"/apple-touch-icon.png"}
        />
        <link
          rel={"icon"}
          type={"image/png"}
          sizes={"32x32"}
          href={"/favicon-32x32.png"}
        />
        <link
          rel={"icon"}
          type={"image/png"}
          sizes={"16x16"}
          href={"/favicon-16x16.png"}
        />
        <link rel={"manifest"} href={"/manifest.json"} />
      </>
    );
  },
  // navbar: {},
  editLink: {
    text: "Edit this page on GitHub",
  },
  primaryHue: h,
  primarySaturation: s,
  footer: {
    component: Footer,
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className={"cursor-default"}>{title}</span>;
      }
      return <>{title}</>;
    },
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
};

export default config;
