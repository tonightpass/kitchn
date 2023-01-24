import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components/native";
import themes from "../../themes";

export type KitchenProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const KitchenProvider: React.FC<KitchenProviderProps> = ({
  children,
  theme = themes.dark,
}: KitchenProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default KitchenProvider;
