import React from 'react';
import type { Preview, StoryFn, StoryContext } from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import { defaultThemes } from '../packages/kitchn/src/themes';
import { createGlobalStyle } from 'styled-components';
import "normalize.css";
import "../packages/kitchn/fonts.css";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  code {
    font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  * {
    box-sizing: border-box;
  }
`;

const withThemeProvider = (Story: StoryFn, context: StoryContext) => {
  const theme = context.globals.theme === 'dark' ? defaultThemes.dark : defaultThemes.light;
  const backgroundColor = theme.background;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        // Show this tool in the toolbar
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light Theme' },
          { value: 'dark', icon: 'moon', title: 'Dark Theme' },
        ],
        // Display all icons
        showName: true,
        // Add dynamic switching
        dynamicTitle: true,
      },
    },
  },
};

export default preview;