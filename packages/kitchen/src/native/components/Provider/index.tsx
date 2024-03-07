import React from "react";
import { DefaultTheme } from "styled-components/native";

import { ThemeProvider } from "../../contexts/Theme";
import { withScale } from "../../hoc";

export type KitchenProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const KitchenProviderComponent: React.FC<KitchenProviderProps> = ({
  children,
  theme,
}: KitchenProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

KitchenProviderComponent.displayName = "KitchenProvider";
export const KitchenProvider = withScale(KitchenProviderComponent);
export default KitchenProvider;
