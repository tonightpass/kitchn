import React from "react";
import { DefaultTheme } from "styled-components/native";

import { ThemeProvider } from "../../contexts/Theme";

export type KitchenProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const KitchenProvider: React.FC<KitchenProviderProps> = ({
  children,
  theme,
}: KitchenProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default KitchenProvider;
