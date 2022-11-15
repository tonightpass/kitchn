import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import themes from "../../themes";
import GlobalStyle from "../GlobalStyle";

export type KitchenProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const KitchenProvider: React.FC<KitchenProviderProps> = ({
  children,
  theme = themes.dark,
}: KitchenProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default KitchenProvider;
