import "styled-components/native";

import { MainTheme, Theme } from "./types/theme";

// custom types
declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}

export type * from "styled-components/native/dist/types";

// custom exports
export {
  ThemeConsumer,
  ThemeContext as StyledThemeContext,
  ThemeProvider as StyledThemeProvider,
  css,
  isStyledComponent,
  useTheme as useStyledTheme,
  withTheme,
} from "styled-components/native";
