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
          source: "/(.*)",
          headers: [
            {
              key: "X-Frame-Options",
              value: "SAMEORIGIN",
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff",
            },
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin",
            },
          ],
        },
      ];
    },
  }),
);
