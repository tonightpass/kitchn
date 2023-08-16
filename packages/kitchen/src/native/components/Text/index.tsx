import React from "react";
import { Text as NText, TextComponent } from "react-native";
import styled from "styled-components/native";

import capitalize from "../../../utils/capitalize";
import withScale from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import { AccentColors, Size, TextColors, Weight } from "../../types/theme";

type Props = {
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
  transform?: "capitalize" | "uppercase" | "lowercase" | "none";
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

export type TextProps = KitchenComponent<Props, TextComponent>;

const Text = styled(({ children, truncate, ...props }: TextProps) => {
  return (
    <NText
      numberOfLines={truncate ? 1 : undefined}
      ellipsizeMode={truncate ? "tail" : undefined}
      {...props}
    >
      {children}
    </NText>
  );
})<TextProps>`
  font-size: ${(props) => props.theme.size[props.size || "normal"]};
  color: ${(props) =>
    props.theme.colors.accent[props.accent as keyof AccentColors] ||
    props.theme.colors.text[props.color as keyof TextColors] ||
    props.theme.colors.text.lightest};
  };
  text-align: ${(props) => props.align || "left"};
  text-transform: ${(props) => props.transform || "none"};
  line-height: ${(props) => {
    const lineHeight = props.lineHeight || 1.25;
    const fontSize = parseInt(
      props.theme.size[props.size || "normal"].replace("px", ""),
      10,
    );

    return typeof lineHeight === "number"
      ? `${lineHeight * fontSize}px`
      : lineHeight;
  }};
  font-family: ${({ theme, weight = "regular", monospace }) => {
    return `${monospace ? theme.family.monospace : theme.family.primary}_${
      theme.weight[weight]
    }${capitalize(weight)}`;
  }};
`;

export default withScale(Text);
