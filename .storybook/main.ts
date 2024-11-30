import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  stories: [
    "../packages/kitchn/src/**/*.mdx",
    "../packages/kitchn/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y"
  ],
  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../packages/kitchn/src"),
      ];
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "@": path.resolve(__dirname, "../packages/kitchn/src"),
      };
    }
    return config;
  },
};

export default config;