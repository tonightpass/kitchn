import { DefaultTheme } from "styled-components";

import dark from "./dark";
import light from "./light";
import main from "./main";
import { Theme } from "../types/theme";

export const createTheme = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

const themes = { dark: createTheme(dark), light: createTheme(light) };

export default themes;
