/* eslint-disable @typescript-eslint/no-var-requires */
const nextra = require("nextra");
const { withKitchenConfig } = require("@tonightpass/kitchen/next");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra(
  withKitchenConfig({
    reactStrictMode: true,
  })
);
