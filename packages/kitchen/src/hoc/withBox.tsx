import React from "react";
import styled from "styled-components";

import withScale, { handlePixelValue } from "./withScale";
import { AccentColors, LayoutColors, Radius } from "../types/theme";
import isNumber from "../utils/isNumber";

export type BoxProps = {
  background?: string | keyof LayoutColors;
  bg?: string | keyof LayoutColors;
  backgroundColor?: keyof LayoutColors;
  bgc?: keyof LayoutColors;
  backgroundAccent?: keyof AccentColors;
  bga?: keyof AccentColors;

  borderWidth?: number | string;
  bw?: number | string;
  borderColor?: keyof LayoutColors;
  bc?: keyof LayoutColors;
  borderRadius?: number | string | keyof Radius;
  br?: number | string | keyof Radius;
  borderStyle?: "solid" | "dotted" | "dashed";
  bs?: "solid" | "dotted" | "dashed";

  borderLeftWidth?: number | string;
  blw?: number | string;
  borderRightWidth?: number | string;
  brw?: number | string;
  borderTopWidth?: number | string;
  btw?: number | string;
  borderBottomWidth?: number | string;
  bbw?: number | string;

  borderLeftColor?: keyof LayoutColors;
  blc?: keyof LayoutColors;
  borderRightColor?: keyof LayoutColors;
  brc?: keyof LayoutColors;
  borderTopColor?: keyof LayoutColors;
  btc?: keyof LayoutColors;
  borderBottomColor?: keyof LayoutColors;
  bbc?: keyof LayoutColors;

  borderTopLeftRadius?: number | string | keyof Radius;
  btlr?: number | string | keyof Radius;
  borderTopRightRadius?: number | string | keyof Radius;
  btrr?: number | string | keyof Radius;
  borderBottomLeftRadius?: number | string | keyof Radius;
  bblr?: number | string | keyof Radius;
  borderBottomRightRadius?: number | string | keyof Radius;
  bbrr?: number | string | keyof Radius;
};

const withBox = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  const Box = styled(WrappedComponent)<BoxProps>`
    ${({ theme, borderRadius, br }) =>
      (borderRadius || br) &&
      `border-radius: ${
        theme.radius[(borderRadius || br) as keyof Radius] ||
        (isNumber(borderRadius)
          ? `${borderRadius || br}px`
          : borderRadius || br)
      };`}

    ${({
      theme,
      background,
      bg,
      backgroundColor,
      bgc,
      backgroundAccent,
      bga,
    }) =>
      (background || bg || backgroundColor || bgc || backgroundAccent || bga) &&
      `background: ${
        theme.colors.layout[(background || bg) as keyof LayoutColors] ||
        theme.colors.layout[(backgroundColor || bgc) as keyof LayoutColors] ||
        theme.colors.accent[(backgroundAccent || bga) as keyof AccentColors] ||
        background ||
        bg
      };`}


  ${(props) => {
      const borderProps = [
        {
          key: "border-width",
          value:
            props.borderWidth ||
            props.bw ||
            (props.borderColor ||
            props.bc ||
            props.borderTopColor ||
            props.borderBottomColor ||
            props.borderLeftColor ||
            props.borderRightColor ||
            props.btc ||
            props.bbc ||
            props.blc ||
            props.brc ||
            props.borderStyle ||
            props.bs
              ? "1px"
              : undefined),
        },
        {
          key: "border-color",
          value:
            props.borderColor ||
            props.bc ||
            (props.borderStyle ||
            props.bs ||
            props.borderWidth ||
            props.bw ||
            props.borderTopWidth ||
            props.borderBottomWidth ||
            props.borderLeftWidth ||
            props.borderRightWidth ||
            props.btw ||
            props.bbw ||
            props.blw ||
            props.brw
              ? props.theme.colors.layout.dark
              : undefined),
        },
        {
          key: "border-style",
          value:
            props.borderStyle ||
            props.bs ||
            (props.borderWidth ||
            props.bw ||
            props.borderTopWidth ||
            props.borderBottomWidth ||
            props.borderLeftWidth ||
            props.borderRightWidth ||
            props.btw ||
            props.bbw ||
            props.blw ||
            props.brw ||
            props.borderColor ||
            props.bc ||
            props.borderTopColor ||
            props.borderBottomColor ||
            props.borderLeftColor ||
            props.borderRightColor ||
            props.btc ||
            props.bbc ||
            props.blc ||
            props.brc
              ? "solid"
              : undefined),
        },
        { key: "border-left-width", value: props.borderLeftWidth || props.blw },
        {
          key: "border-right-width",
          value: props.borderRightWidth || props.brw,
        },
        { key: "border-top-width", value: props.borderTopWidth || props.btw },
        {
          key: "border-bottom-width",
          value: props.borderBottomWidth || props.bbw,
        },
        { key: "border-left-color", value: props.borderLeftColor || props.blc },
        {
          key: "border-right-color",
          value: props.borderRightColor || props.brc,
        },
        { key: "border-top-color", value: props.borderTopColor || props.btc },
        {
          key: "border-bottom-color",
          value: props.borderBottomColor || props.bbc,
        },
        {
          key: "border-top-left-radius",
          value: props.borderTopLeftRadius || props.btlr,
        },
        {
          key: "border-top-right-radius",
          value: props.borderTopRightRadius || props.btrr,
        },
        {
          key: "border-bottom-left-radius",
          value: props.borderBottomLeftRadius || props.bblr,
        },
        {
          key: "border-bottom-right-radius",
          value: props.borderBottomRightRadius || props.bbrr,
        },
      ];

      return borderProps
        .filter((prop) => prop.value !== undefined)
        .map(
          (prop) =>
            `${prop.key}: ${
              prop.key.endsWith("color")
                ? ((props.theme.colors.layout[
                    prop.value as keyof LayoutColors
                  ] || prop.value) as string)
                : prop.key.endsWith("radius")
                ? ((props.theme.radius[prop.value as keyof Radius] ||
                    handlePixelValue(prop.value as string)) as string)
                : prop.key.endsWith("width")
                ? handlePixelValue(prop.value as string)
                : prop.value
            };`,
        )
        .join("\n");
    }}
  `;

  return withScale(Box);
};

export default withBox;
