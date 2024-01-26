import { DefaultTheme } from "styled-components";

import main from "./main";
import { darkTheme } from "../../themes/dark";
import { lightTheme } from "../../themes/light";
import { Theme } from "../types/theme";

export const createTheme = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

const themes = { dark: createTheme(darkTheme), light: createTheme(lightTheme) };

export default themes;
