import { createGlobalStyle } from "styled-components";

import mainCss from "./main";
import resetCss from "./reset";
import themeCss from "./theme";
import { Themes } from "../../types";

const GlobalStyle = createGlobalStyle<{ staticThemes: Themes }>`
    ${resetCss}
    ${themeCss}
    ${mainCss}
`;

export default GlobalStyle;
