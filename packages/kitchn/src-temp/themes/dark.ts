import { Theme } from "../types/theme";

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    layout: {
      darkest: "rgb(17, 17, 17)",
      darker: "rgb(25, 25, 27)",
      dark: "rgb(34, 34, 36)",
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
      primary: "rgb(80, 60, 245)",
      secondary: "rgb(70, 38, 228)",
      success: "rgb(46, 204, 113)",
      warning: "rgb(241, 196, 15)",
      danger: "rgb(231, 76, 60)",
      info: "rgb(52, 152, 219)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(0, 0, 0)",
    },
  },
};
