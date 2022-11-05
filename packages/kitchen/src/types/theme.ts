export type Theme = {
  id: number;
  colors: Colors;
};

export type MainTheme = {
  family: {
    primary: string;
  };
  weight: Weight;
  size: Size;
  breakpoint: Breakpoint;
};

export type Colors = {
  layout: LayoutColors;
  text: TextColors;
  accent: AccentColors;
};

export type LayoutColors = {
  darkest: string;
  darker: string;
  dark: string;
  light: string;
  lighter: string;
  lightest: string;
};

export type TextColors = {
  lightest: string;
  lighter: string;
  light: string;
  dark: string;
  darker: string;
  darkest: string;
};

export type AccentColors = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  light: string;
  dark: string;
};

export type Weight = {
  thin: number;
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
};

export type Size = {
  extraTitle: string;
  title: string;
  large: string;
  medium: string;
  normal: string;
  small: string;
  tiny: string;
};

export type Breakpoint = {
  /* Desktops and laptops */
  desktop: string;
  /* iPads (landscape) */
  laptop: string;
  /* iPads (portrait) */
  tablet: string;
  /* Smartphones (landscape) */
  mobile: string;
};
