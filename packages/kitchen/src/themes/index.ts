import { DefaultTheme } from "styled-components";

import dark from "./dark";
import light from "./light";
import main from "./main";
import { PREFIX } from "../constants";
import { Theme } from "../types/theme";

export const createTheme = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

export const staticThemes = {
  dark: createTheme(dark),
  light: createTheme(light),
};

export const createThemeVariables = (
  theme: DefaultTheme,
  prefix = "",
): DefaultTheme => {
  const themeVariables: DefaultTheme = {} as DefaultTheme;

  for (const key in theme) {
    const value = theme[key as keyof typeof theme];

    if (typeof value === "object") {
      themeVariables[key] = createThemeVariables(value, `${prefix}-${key}`);
    } else {
      themeVariables[key] = `var(--${
        prefix ? `${prefix}` : ""
      }-${key}, ${value})`;
    }

    if (key === "name" || key === "scheme") {
      themeVariables[key] = value;
    }
  }

  return themeVariables;
};

const themes = {
  dark: createThemeVariables(staticThemes.dark, PREFIX),
  light: createThemeVariables(staticThemes.light, PREFIX),
};

export default themes;
