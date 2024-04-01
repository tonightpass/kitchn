import "styled-components";

import { MainTheme, Theme } from "./types/theme";

// custom types
declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}

export type * from "styled-components/dist/types";
// custom exports
export {
  ThemeContext as StyledThemeContext,
  ThemeProvider as StyledThemeProvider,
  useTheme as useStyledTheme,
  ServerStyleSheet,
  StyleSheetConsumer,
  StyleSheetContext,
  StyleSheetManager,
  ThemeConsumer,
  createGlobalStyle,
  css,
  isStyledComponent,
  keyframes,
  withTheme,
} from "styled-components";
