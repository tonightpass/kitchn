import { Theme } from "../types/theme";

const dark: Theme = {
  name: "dark",
  scheme: "dark",
  colors: {
    layout: {
      darkest: "rgb(5, 21, 39)",
      darker: "rgb(6, 25, 46)",
      dark: "rgb(52, 68, 111)",
      light: "rgb(130, 137, 147)",
      lighter: "rgb(155, 155, 156)",
      lightest: "rgb(255, 255, 255)",
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
