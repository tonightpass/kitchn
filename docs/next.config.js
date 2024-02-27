/* eslint-disable @typescript-eslint/no-var-requires */
const { withKitchenConfig } = require("@tonightpass/kitchen/next");
const nextra = require("nextra");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra(
  withKitchenConfig({
    reactStrictMode: true,
  }),
);
