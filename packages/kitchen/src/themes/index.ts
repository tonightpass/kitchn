import { DefaultTheme } from "styled-components";
import { Theme } from "../types/theme";
import dark from "./dark";
import light from "./light";
import main from "./main";

export const createTheme = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

const themes = { dark: createTheme(dark), light: createTheme(light) };

export default themes;
