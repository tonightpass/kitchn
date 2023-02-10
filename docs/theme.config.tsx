/* eslint-disable react-hooks/rules-of-hooks */
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import urlcat from "urlcat";
import { useTheme as useNextraTheme } from "next-themes";
import { useTheme } from "@tonightpass/kitchen";

const logo = (
  <span>
    <svg
      height="30"
      viewBox="0 0 225 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="95" height="78" rx="10" fill="#B024F1" />
      <path
        d="M18.5 57V22H24.8V41.35H25.7L33.9 32.2H42.1L30.65 44.2L42.5 57H34.4L25.7 47.15H24.8V57H18.5ZM46.7227 57V32.2H53.0227V57H46.7227ZM49.8727 29.3C48.7393 29.3 47.7727 28.9333 46.9727 28.2C46.206 27.4667 45.8227 26.5 45.8227 25.3C45.8227 24.1 46.206 23.1333 46.9727 22.4C47.7727 21.6667 48.7393 21.3 49.8727 21.3C51.0393 21.3 52.006 21.6667 52.7727 22.4C53.5393 23.1333 53.9227 24.1 53.9227 25.3C53.9227 26.5 53.5393 27.4667 52.7727 28.2C52.006 28.9333 51.0393 29.3 49.8727 29.3ZM69.5039 57C67.8706 57 66.5372 56.5 65.5039 55.5C64.5039 54.4667 64.0039 53.1 64.0039 51.4V37.4H57.8039V32.2H64.0039V24.5H70.3039V32.2H77.1039V37.4H70.3039V50.3C70.3039 51.3 70.7706 51.8 71.7039 51.8H76.5039V57H69.5039Z"
        fill="white"
      />
      <path
        d="M120.15 56.7C117.75 56.7 115.567 56.2 113.6 55.2C111.667 54.2 110.133 52.75 109 50.85C107.867 48.95 107.3 46.65 107.3 43.95V43.25C107.3 40.55 107.867 38.25 109 36.35C110.133 34.45 111.667 33 113.6 32C115.567 31 117.75 30.5 120.15 30.5C122.517 30.5 124.55 30.9167 126.25 31.75C127.95 32.5833 129.317 33.7333 130.35 35.2C131.417 36.6333 132.117 38.2667 132.45 40.1L126.35 41.4C126.217 40.4 125.917 39.5 125.45 38.7C124.983 37.9 124.317 37.2667 123.45 36.8C122.617 36.3333 121.567 36.1 120.3 36.1C119.033 36.1 117.883 36.3833 116.85 36.95C115.85 37.4833 115.05 38.3 114.45 39.4C113.883 40.4667 113.6 41.7833 113.6 43.35V43.85C113.6 45.4167 113.883 46.75 114.45 47.85C115.05 48.9167 115.85 49.7333 116.85 50.3C117.883 50.8333 119.033 51.1 120.3 51.1C122.2 51.1 123.633 50.6167 124.6 49.65C125.6 48.65 126.233 47.35 126.5 45.75L132.6 47.2C132.167 48.9667 131.417 50.5833 130.35 52.05C129.317 53.4833 127.95 54.6167 126.25 55.45C124.55 56.2833 122.517 56.7 120.15 56.7ZM137.797 56V21H144.097V34.25H144.997C145.264 33.7167 145.68 33.1833 146.247 32.65C146.814 32.1167 147.564 31.6833 148.497 31.35C149.464 30.9833 150.68 30.8 152.147 30.8C154.08 30.8 155.764 31.25 157.197 32.15C158.664 33.0167 159.797 34.2333 160.597 35.8C161.397 37.3333 161.797 39.1333 161.797 41.2V56H155.497V41.7C155.497 39.8333 155.03 38.4333 154.097 37.5C153.197 36.5667 151.897 36.1 150.197 36.1C148.264 36.1 146.764 36.75 145.697 38.05C144.63 39.3167 144.097 41.1 144.097 43.4V56H137.797ZM179.907 56.7C177.441 56.7 175.257 56.1833 173.357 55.15C171.491 54.0833 170.024 52.6 168.957 50.7C167.924 48.7667 167.407 46.5 167.407 43.9V43.3C167.407 40.7 167.924 38.45 168.957 36.55C169.991 34.6167 171.441 33.1333 173.307 32.1C175.174 31.0333 177.341 30.5 179.807 30.5C182.241 30.5 184.357 31.05 186.157 32.15C187.957 33.2167 189.357 34.7167 190.357 36.65C191.357 38.55 191.857 40.7667 191.857 43.3V45.45H173.807C173.874 47.15 174.507 48.5333 175.707 49.6C176.907 50.6667 178.374 51.2 180.107 51.2C181.874 51.2 183.174 50.8167 184.007 50.05C184.841 49.2833 185.474 48.4333 185.907 47.5L191.057 50.2C190.591 51.0667 189.907 52.0167 189.007 53.05C188.141 54.05 186.974 54.9167 185.507 55.65C184.041 56.35 182.174 56.7 179.907 56.7ZM173.857 40.75H185.457C185.324 39.3167 184.741 38.1667 183.707 37.3C182.707 36.4333 181.391 36 179.757 36C178.057 36 176.707 36.4333 175.707 37.3C174.707 38.1667 174.091 39.3167 173.857 40.75ZM197.465 56V31.2H203.665V34.45H204.565C204.965 33.5833 205.715 32.7667 206.815 32C207.915 31.2 209.582 30.8 211.815 30.8C213.748 30.8 215.432 31.25 216.865 32.15C218.332 33.0167 219.465 34.2333 220.265 35.8C221.065 37.3333 221.465 39.1333 221.465 41.2V56H215.165V41.7C215.165 39.8333 214.698 38.4333 213.765 37.5C212.865 36.5667 211.565 36.1 209.865 36.1C207.932 36.1 206.432 36.75 205.365 38.05C204.298 39.3167 203.765 41.1 203.765 43.4V56H197.465Z"
        fill="white"
      />
    </svg>
  </span>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/tonightpass/kitchen",
  },
  docsRepositoryBase: "https://github.com/tonightpass/kitchen/blob/master",
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: `%s${"%s".includes("Kitchen") ? "" : " - Kitchen"}`,
      };
    }
  },
  logo,
  head: () => {
    const { theme = "system" } = useNextraTheme();
    const { setStoredTheme } = useTheme();
    setStoredTheme(theme === "dark" ? 1 : theme === "light" ? 2 : 0);

    const { title, ...meta } = useConfig().frontMatter;

    const finalTitle = title
      ? `${title}${title.includes("Kitchen") ? "" : " - Kitchen"}`
      : "Kitchen";
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
        }
      ) || "https://tonightpass.com/static/images/open-graph-image.jpg";

    return (
      <>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={finalDescription} />
        <meta name="og:description" content={finalDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={finalThumbnailUrl} />
        <meta name="twitter:site:domain" content="kitchen.dev" />
        <meta name="twitter:url" content="https://kitchen.dev" />
        <meta name="og:title" content={finalTitle} />
        <meta name="og:image" content={finalThumbnailUrl} />
        <meta name="apple-mobile-web-app-title" content="Kitchen" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  primaryHue: 281,
};

export default config;
