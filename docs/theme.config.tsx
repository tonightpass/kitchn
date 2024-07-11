/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import Navbar from "@components/Navbar";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import urlcat from "urlcat";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/tonightpass/kitchn",
  },
  docsRepositoryBase: "https://github.com/tonightpass/kitchn/blob/master/docs",
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: `%s${"%s".includes("Kitchn") ? "" : " - Kitchn"}`,
      };
    }
  },
  logo: Logo,
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
        <meta name={"description"} content={finalDescription} />
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
  navbar: {
    component: <Navbar />,
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  primaryHue: 259.1,
  primarySaturation: 100,
  footer: {
    component: Footer,
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
