import { DefaultTheme } from "styled-components";
import dark from "../../themes/dark";
import light from "../../themes/light";
import { Theme } from "../types/theme";
import main from "./main";

export const createTheme = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

const themes = { dark: createTheme(dark), light: createTheme(light) };

export default themes;
