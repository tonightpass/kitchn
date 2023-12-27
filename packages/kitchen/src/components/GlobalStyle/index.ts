import { createGlobalStyle } from "styled-components";

import mainCss from "./main";
import resetCss from "./reset";
import themeCss from "./theme";

const GlobalStyle = createGlobalStyle`
    ${resetCss}
    ${themeCss}
    ${mainCss}
`;

export default GlobalStyle;
