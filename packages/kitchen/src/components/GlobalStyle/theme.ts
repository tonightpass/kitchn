import { css } from "styled-components";

import { PREFIX } from "../../constants";
import { convertThemeToCssVariables, staticThemes } from "../../themes";

const themeCss = css`
  :root {
    ${convertThemeToCssVariables(staticThemes.light, PREFIX)}
  }

  [data-theme="dark"] {
    ${convertThemeToCssVariables(staticThemes.dark, PREFIX)}
  }
`;

export default themeCss;
