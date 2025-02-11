import { css } from "styled-components";

import { PREFIX } from "../../constants";
import { convertThemeToCssVariables } from "../../themes";
import { Themes } from "../../types";
import { KitchnProviderProps } from "../provider";

export const generateThemeCss = (
  attribute: KitchnProviderProps["attribute"],
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
  attribute: KitchnProviderProps["attribute"];
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
