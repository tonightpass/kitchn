import { Theme } from "../types/theme";

const dark: Theme = {
  id: 0,
  colors: {
    layout: {
      darkest: "rgb(0, 0, 0)",
      darker: "rgb(30, 31, 32)",
      dark: "rgb(75, 75, 76)",
      light: "rgb(30, 30, 30)",
      lighter: "rgb(36, 36, 36)",
      lightest: "rgb(45, 45, 45)",
    },
    text: {
      lightest: "rgb(255, 255, 255)",
      lighter: "rgb(200, 200, 200)",
      light: "rgb(150, 150, 150)",
      dark: "rgb(135, 135, 135)",
      darker: "rgb(100, 100, 100)",
      darkest: "rgb(30, 31, 32)",
    },
    accent: {
      primary: "rgb(176, 36, 241)",
      secondary: "rgb(176, 36, 241)",
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
