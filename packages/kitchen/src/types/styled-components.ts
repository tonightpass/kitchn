import "styled-components";
import { MainTheme, Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}

export {};
