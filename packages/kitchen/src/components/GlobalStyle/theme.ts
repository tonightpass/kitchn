import { css } from "styled-components";

import { PREFIX } from "../../constants";
import { staticThemes } from "../../themes";

const convertThemeToCssVariables = (obj: object, prefix = "") => {
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

    if (key === "name" || key === "scheme") {
      cssVariables += `${key}: ${value};\n`;
    }
  }

  return cssVariables;
};

const themeCss = css`
  :root {
    ${convertThemeToCssVariables(staticThemes.light, PREFIX)}
  }

  [data-theme="dark"] {
    ${convertThemeToCssVariables(staticThemes.dark, PREFIX)}
  }
`;

export default themeCss;
