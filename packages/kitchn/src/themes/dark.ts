import { Theme } from "../types/theme";

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    layout: {
      darkest: "rgb(0, 0, 0)",
      darker: "rgb(25, 25, 26)",
      dark: "rgb(50, 50, 51)",
      light: "rgb(150, 150, 150)",
      lighter: "rgb(175, 175, 176)",
      lightest: "rgb(255, 255, 255)",
    },
    text: {
      lightest: "rgb(255, 255, 255)",
      lighter: "rgb(200, 200, 200)",
      light: "rgb(175, 175, 175)",
      dark: "rgb(160, 160, 160)",
      darker: "rgb(125, 125, 125)",
      darkest: "rgb(50, 51, 52)",
    },
    accent: {
      primary: "rgb(54, 0, 270)",
      secondary: "rgb(64, 0, 201)",
      success: "rgb(46, 204, 113)",
      warning: "rgb(241, 196, 15)",
      danger: "rgb(231, 76, 60)",
      info: "rgb(52, 152, 219)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(0, 0, 0)",
    },
  },
};
