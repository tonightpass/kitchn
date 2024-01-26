import React from "react";
import styled from "styled-components";

import { withScale } from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import { AccentColors, Size, TextColors, Weight } from "../../types/theme";

type Props = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  b?: boolean;
  i?: boolean;
  span?: boolean;
  em?: boolean;
  /**
   * The font size.
   */
  size?: keyof Size;
  /**
   * The line height.
   */
  lineHeight?: number | string;
  /**
   * The font weight.
   */
  weight?: keyof Weight;
  /**
   * Text transform short hand.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
   * @default "initial"
   */
  transform?: "capitalize" | "uppercase" | "lowercase" | "initial";
  decoration?:
    | "none"
    | "underline"
    | "line-through"
    | "overline"
    | "dashed"
    | "blink";
  /**
   * The text color. Strictly limited to colors of our design system. If you want to pass accent color make sure to pass `accent` instead of `color`.
   */
  color?: keyof TextColors;
  /**
   * The accent color. Strictly limited to colors of our design system, but can be used in combination with `color` prop.
   */
  accent?: keyof AccentColors;
  /**
   * Truncate a single or multiple line(s). If you pass truncate, make sure to pass `title` so that the full value is shown on hover.
   * @default false
   */
  truncate?: boolean | number;
  /**
   * Text alignment short hand.
   */
  align?: "left" | "center" | "right";
  /**
   * If text is `truncated`, this should be the full text.
   */
  title?: string;
  /**
   * Whether the text should wrap lines
   * @type {boolean}
   * @default true
   */
  wrap?: boolean;
  /**
   * 	Whether to use the monospace font.
   * @type {boolean}
   * @default false
   */
  monospace?: boolean;
};

export type TextProps = KitchenComponent<Props>;

const TextComponent = styled(({ children, ...props }: TextProps) => {
  const Component = props.h1
    ? "h1"
    : props.h2
    ? "h2"
    : props.h3
    ? "h3"
    : props.h4
    ? "h4"
    : props.h5
    ? "h5"
    : props.h6
    ? "h6"
    : props.b
    ? "b"
    : props.i
    ? "i"
    : props.span
    ? "span"
    : props.em
    ? "em"
    : "p";

  return <Component {...props}>{children}</Component>;
})<TextProps>`
  font-size: ${(props) => props.theme.size[props.size || "normal"]};
  font-weight: ${(props) =>
    props.theme.weight[props.weight || (props.b ? "bold" : "regular")]};
  color: ${(props) =>
    props.theme.colors.accent[props.accent as keyof AccentColors] ||
    props.theme.colors.text[props.color as keyof TextColors] ||
    props.theme.colors.text.lightest};
  text-align: ${(props) => props.align || "left"};
  text-transform: ${(props) => props.transform || "initial"};
  text-decoration: ${(props) => props.decoration || "none"};
  line-height: ${(props) => props.lineHeight || 1.25};
  white-space: ${(props) =>
    props.wrap !== undefined ? (props.wrap ? "normal" : "nowrap") : "normal"};
  font-family: ${(props) =>
    props.monospace && props.theme.family.monospace
      ? "monospace"
      : props.theme.family.primary};
  ${(props) =>
    props.truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${
      Number(props.truncate) > 1
        ? `
      display: -webkit-box;
      -webkit-line-clamp: ${props.truncate};
      -webkit-box-orient: vertical;
      white-space: normal;
    `
        : ""
    }
  `}

  span {
    line-height: ${(props) => props.lineHeight || 1};
  }

  strong {
    font-weight: ${(props) => props.theme.weight.bold};
  }

  em {
    font-style: italic;
  }
`;

TextComponent.displayName = "KitchenText";
export const Text = withScale(TextComponent);
export default Text;
