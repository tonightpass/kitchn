import { Theme } from "../types/theme";

const dark: Theme = {
  id: 0,
  colors: {
    layout: {
      darkest: "rgb(5, 21, 39)",
      darker: "rgb(9, 31, 55)",
      dark: "rgba(9, 31, 55, 0.75)",
      light: "rgba(9, 31, 55, 0.35)",
      lighter: "rgba(9, 31, 55, 0.12)",
      lightest: "rgba(9, 31, 55, 0.05)",
    },
    text: {
      lightest: "rgb(255, 255, 255)",
      lighter: "rgb(200, 200, 200)",
      light: "rgb(150, 150, 150)",
      dark: "rgb(135, 135, 135)",
      darker: "rgb(100, 100, 100)",
      darkest: "rgb(5, 21, 39)",
    },
    accent: {
      primary: "rgb(176, 36, 241)",
      secondary: "rgb(176, 96, 241)",
      success: "rgb(46, 204, 113)",
      warning: "rgb(241, 196, 15)",
      danger: "rgb(231, 76, 60)",
      info: "rgb(52, 152, 219)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(0, 0, 0)",
    },
  },
};

export default dark;
