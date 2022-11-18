import { MainTheme } from "../types/theme";

const main: MainTheme = {
  family: {
    primary: "PlusJakartaSans",
    monospace: "PlusJakartaMono",
  },
  weight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  size: {
    extraTitle: "48px",
    title: "32px",
    large: "24px",
    medium: "18px",
    normal: "16px",
    small: "13px",
    tiny: "11px",
  },
  breakpoint: {
    desktop: "1824px",
    laptop: "1224px",
    tablet: "1024px",
    mobile: "768px",
  },
};

export default main;
