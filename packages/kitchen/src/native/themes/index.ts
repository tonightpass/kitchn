import { DefaultTheme } from "styled-components";

import { mainTheme } from "./main";
import { darkTheme } from "../../themes/dark";
import { lightTheme } from "../../themes/light";
import { Theme } from "../types/theme";

export * from "./main";
export * from "../../themes/dark";
export * from "../../themes/light";
export * from "../../themes/tonightpass";

export const createTheme = (theme: Theme): DefaultTheme => {
  return { ...mainTheme, ...theme };
};

export const defaultThemes = {
  dark: createTheme(darkTheme),
  light: createTheme(lightTheme),
};
