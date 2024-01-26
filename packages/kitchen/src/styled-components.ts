import "styled-components";

import { MainTheme, Theme } from "./types/theme";

// custom exports

// custom types

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}

export {
  ThemeContext as StyledThemeContext,
  ThemeProvider as StyledThemeProvider,
  useTheme as useStyledTheme,
  default as kitchen,
} from "styled-components";

export * from "styled-components";
