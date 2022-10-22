import "styled-components";
import { MainTheme, Theme } from "./types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}

export {};
