/* eslint-disable @typescript-eslint/no-var-requires */
const nextra = require("nextra");
const { withKitchen } = require("@tonightpass/kitchen/next");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra(
  withKitchen({
    reactStrictMode: true,
  })
);
