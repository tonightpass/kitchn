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

const excludedProperties = [
  "name",
  "scheme",
  "size",
  "breakpoint",
  "gap",
  "radius",
];

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

    if (excludedProperties.includes(key)) {
      themeVariables[key] = value;
    }
  }

  return themeVariables;
};

export const convertThemeToCssVariables = (obj: object, prefix = "") => {
  let cssVariables = "";

  for (const key in obj) {
    const value = obj[key as keyof typeof obj];

    if (typeof value === "object") {
      // If the value is an object, recursively call the function with the new prefix
      cssVariables += convertThemeToCssVariables(value, `${prefix}-${key}`);
    } else {
      // If the value is not an object, generate the CSS variable
      cssVariables += `--${prefix}-${key}: ${value};\n`;
    }

    if (excludedProperties.includes(key)) {
      cssVariables += `${key}: ${value};\n`;
    }
  }

  return cssVariables;
};

const themes = {
  dark: createThemeVariables(staticThemes.dark, PREFIX),
  light: createThemeVariables(staticThemes.light, PREFIX),
};

export default themes;
