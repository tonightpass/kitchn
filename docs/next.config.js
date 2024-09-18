/* eslint-disable @typescript-eslint/no-var-requires */
const { withKitchnConfig } = require("kitchn/next");
const nextra = require("nextra");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra(
  withKitchnConfig({
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: "/docs/frameworks/nextjs",
          destination: "/docs/frameworks/nextjs-pages",
          permanent: true,
        },
      ];
    },
    async headers() {
      return [
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
          source: "/(.*)",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
          source: "/(.*)",
        },
        {
          key: "Referrer-Policy",
          value: "origin-when-cross-origin",
          source: "/(.*)",
        },
      ];
    },
  }),
);
