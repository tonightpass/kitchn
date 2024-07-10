import { Theme } from "../types/theme";

export const lightTheme: Theme = {
  name: "light",
  colors: {
    layout: {
      darkest: "rgb(255, 255, 255)",
      darker: "rgb(235, 235, 236)",
      dark: "rgb(229, 226, 224)",
      light: "rgb(125, 118, 108)",
      lighter: "rgb(100, 100, 99)",
      lightest: "rgb(0, 0, 0)",
    },
    text: {
      lightest: "rgb(0, 0, 0)",
      lighter: "rgb(55, 55, 55)",
      light: "rgb(105, 105, 105)",
      dark: "rgb(120, 120, 120)",
      darker: "rgb(155, 155, 155)",
      darkest: "rgb(225, 224, 223)",
    },
    accent: {
      primary: "rgb(64, 0, 201)",
      secondary: "rgb(54, 0, 270)",
      success: "rgb(46, 204, 113)",
      warning: "rgb(241, 196, 15)",
      danger: "rgb(231, 76, 60)",
      info: "rgb(52, 152, 219)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(0, 0, 0)",
    },
  },
};
