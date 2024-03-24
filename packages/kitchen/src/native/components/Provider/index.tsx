import React from "react";
import { DefaultTheme } from "styled-components/native";

import { ThemeProvider } from "../../contexts/Theme";
import { withScale } from "../../hoc";

export type KitchnProviderProps = {
  children?: React.ReactNode;
  theme?: DefaultTheme;
};

const KitchnProviderComponent: React.FC<KitchnProviderProps> = ({
  children,
  theme,
}: KitchnProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

KitchnProviderComponent.displayName = "KitchnProvider";
export const KitchnProvider = withScale(KitchnProviderComponent);
export default KitchnProvider;
