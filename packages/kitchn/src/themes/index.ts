import merge from "lodash.merge";
import { DefaultTheme } from "styled-components";

import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import { mainTheme } from "./main";
import { PREFIX } from "../constants";
import { DeepPartial } from "../types";
import { MainTheme, Theme } from "../types/theme";

export * from "./dark";
export * from "./light";
export * from "./main";
export * from "./tonightpass";

export const createTheme = (
  theme: Theme | (Theme & DeepPartial<MainTheme>),
): DefaultTheme => {
  return merge(mainTheme, theme);
};

export const defaultThemes = {
  dark: createTheme(darkTheme),
  light: createTheme(lightTheme),
};

export const excludedProperties = [
  "name",
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
  }

  return cssVariables;
};

export const generateThemes = (staticThemes: Record<string, DefaultTheme>) => {
  const generatedThemes: Record<keyof typeof staticThemes, DefaultTheme> = {};

  for (const key in staticThemes) {
    generatedThemes[key] = createThemeVariables(staticThemes[key], PREFIX);
  }

  return generatedThemes;
};
