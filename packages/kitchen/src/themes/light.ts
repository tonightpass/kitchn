import { Theme } from "../types/theme";

const light: Theme = {
  id: 1,
  colors: {
    layout: {
      darkest: "rgb(247, 247, 247)",
      darker: "rgb(255, 255, 255)",
      dark: "rgb(130, 137, 147)",
      light: "rgb(39, 43, 48)",
      lighter: "rgb(26, 29, 31)",
      lightest: "rgb(17, 19, 21)",
    },
    text: {
      lightest: "rgb(17, 19, 21)",
      lighter: "rgb(26, 29, 31)",
      light: "rgb(39, 43, 48)",
      dark: "rgb(210, 211, 219)",
      darker: "rgb(228, 229, 241)",
      darkest: "rgb(255, 255, 255)",
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

export default light;
