import { css } from "styled-components";

import { PREFIX } from "../../constants";
import { convertThemeToCssVariables } from "../../themes";
import { Themes } from "../../types";
import { KitchenProviderProps } from "../Provider";

export const generateThemeCss = (
  attribute: KitchenProviderProps["attribute"],
  themes: Themes,
  theme: keyof Themes,
) => {
  theme = theme.trim();

  return `
    ${attribute === "class" ? `:root.${theme}` : `[${attribute}="${theme}"]`} {
      ${convertThemeToCssVariables(themes[theme], PREFIX)}
    }
  `;
};

export const themeCss = css<{
  staticThemes: Themes;
  attribute: KitchenProviderProps["attribute"];
}>`
  ${({ staticThemes, attribute }) => `
    :root {
      ${convertThemeToCssVariables(staticThemes.light, PREFIX)}
    }

    ${Object.keys(staticThemes)
      .filter((theme) => theme !== "light")
      .map((theme) => generateThemeCss(attribute, staticThemes, theme))}
  `}
`;
