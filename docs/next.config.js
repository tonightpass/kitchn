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
  }),
);
