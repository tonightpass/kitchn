import { createGlobalStyle } from "styled-components";

import { mainCss } from "./main";
import { resetCss } from "./reset";
import { themeCss } from "./theme";
import { Themes } from "../../types";
import { KitchnProviderProps } from "../provider";

export const GlobalStyle = createGlobalStyle<{
  staticThemes: Themes;
  attribute: KitchnProviderProps["attribute"];
}>`
    ${resetCss}
    ${themeCss}
    ${mainCss}
`;

export { mainCss, resetCss, themeCss };
export default GlobalStyle;
