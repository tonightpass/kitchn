import { DefaultTheme } from "styled-components/native";
import { Theme } from "../types/theme";

import dark from "./dark";
import main from "./main";

const complete = (theme: Theme): DefaultTheme => {
  return { ...main, ...theme };
};

const themes = { dark: complete(dark) };

export default themes;
