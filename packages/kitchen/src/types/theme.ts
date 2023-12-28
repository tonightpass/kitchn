export type Theme = {
  name: string;
  colors: Colors;
};

export type MainTheme = {
  breakpoint: Breakpoint;
  family: {
    primary: string;
    monospace: string;
  };
  gap: Gap;
  size: Size;
  weight: Weight;
  radius: Radius;
};

export type Colors = {
  layout: LayoutColors;
  text: TextColors;
  accent: AccentColors;
};

/**
 * Layout colors are used for backgrounds, borders, etc.
 */
export type LayoutColors = {
  darkest: string;
  darker: string;
  dark: string;
  light: string;
  lighter: string;
  lightest: string;
};

/**
 * Text colors are used for text and icons.
 */
export type TextColors = {
  lightest: string;
  lighter: string;
  light: string;
  dark: string;
  darker: string;
  darkest: string;
};

/**
 * AccentColors are static colors that are used to highlight
 */
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

/**
 * Weight is used for font weights.
 */
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

/**
 * Size is used for font sizes.
 */
export type Size = {
  extraTitle: string;
  title: string;
  large: string;
  medium: string;
  normal: string;
  small: string;
  tiny: string;
};

/**
 * Breakpoint is used for media queries.
 */
export type Breakpoint = {
  /**
   * Desktops and laptops
   */
  desktop: string;
  /**
   * iPads (landscape)
   */
  laptop: string;
  /**
   * iPads (portrait)
   */
  tablet: string;
  /**
   * Smartphones (landscape)
   */
  mobile: string;
};

/**
 * Gap is used for spacing.
 */
export type Gap = {
  extraLarge: string;
  large: string;
  medium: string;
  normal: string;
  small: string;
  tiny: string;
};

/**
 * Radius is used for border radius.
 */
export type Radius = {
  square: string;
  round: string;
};
