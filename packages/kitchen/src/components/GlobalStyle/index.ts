import { createGlobalStyle } from "styled-components";

import mainCss from "./main";
import resetCss from "./reset";
import themeCss from "./theme";
import { Themes } from "../../types";
import { KitchenProviderProps } from "../Provider";

const GlobalStyle = createGlobalStyle<{
  staticThemes: Themes;
  attribute: KitchenProviderProps["attribute"];
}>`
    ${resetCss}
    ${themeCss}
    ${mainCss}
`;

export default GlobalStyle;
