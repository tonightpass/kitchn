import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import themes from "../../themes";
import GlobalStyle from "../GlobalStyle";

export interface ProviderProps {
  children?: React.ReactNode;
  theme?: DefaultTheme;
}

const KitchenProvider: React.FC = ({
  children,
  theme = themes.dark,
}: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default KitchenProvider;
