import { CSSProperties } from "react";
import { DefaultTheme, css } from "styled-components";

import { handlePixelValue } from "./decorator";
import { LayoutColors, Radius } from "../../types/theme";

export type BorderProps = {
  borderStyle?: CSSProperties["borderStyle"];
  bs?: BorderProps["borderStyle"];

  borderWidth?: CSSProperties["borderWidth"];
  bw?: BorderProps["borderWidth"];
  borderLeftWidth?: CSSProperties["borderLeftWidth"];
  blw?: BorderProps["borderWidth"];
  borderRightWidth?: CSSProperties["borderRightWidth"];
  brw?: BorderProps["borderWidth"];
  borderTopWidth?: CSSProperties["borderTopWidth"];
  btw?: BorderProps["borderWidth"];
  borderBottomWidth?: CSSProperties["borderBottomWidth"];
  bbw?: BorderProps["borderWidth"];

  borderColor?: CSSProperties["borderColor"] | keyof LayoutColors;
  bc?: BorderProps["borderColor"];
  borderLeftColor?: CSSProperties["borderLeftColor"] | keyof LayoutColors;
  blc?: BorderProps["borderColor"];
  borderRightColor?: CSSProperties["borderRightColor"] | keyof LayoutColors;
  brc?: BorderProps["borderColor"];
  borderTopColor?: CSSProperties["borderTopColor"] | keyof LayoutColors;
  btc?: BorderProps["borderColor"];
  borderBottomColor?: CSSProperties["borderBottomColor"] | keyof LayoutColors;
  bbc?: BorderProps["borderColor"];

  borderRadius?: CSSProperties["borderRadius"] | keyof Radius;
  br?: BorderProps["borderRadius"];
  borderTopLeftRadius?: CSSProperties["borderTopLeftRadius"] | keyof Radius;
  btlr?: BorderProps["borderRadius"];
  borderTopRightRadius?: CSSProperties["borderTopRightRadius"] | keyof Radius;
  btrr?: BorderProps["borderRadius"];
  borderBottomLeftRadius?:
    | CSSProperties["borderBottomLeftRadius"]
    | keyof Radius;
  bblr?: BorderProps["borderRadius"];
  borderBottomRightRadius?:
    | CSSProperties["borderBottomRightRadius"]
    | keyof Radius;
  bbrr?: BorderProps["borderRadius"];
};

export const handleRadius = (
  theme: DefaultTheme,
  value?: string | number | keyof Radius,
) => {
  return (
    theme.radius[value as keyof Radius] ||
    handlePixelValue(value as string | number)
  );
};

export const borderCss = css<BorderProps>`
  ${({ theme, borderRadius, br }) =>
    borderRadius !== undefined || br !== undefined
      ? `border-radius: ${handleRadius(theme, borderRadius || br)};`
      : ""}

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
              ? ((props.theme.colors.layout[prop.value as keyof LayoutColors] ||
                  prop.value) as string)
              : prop.key.endsWith("radius")
                ? handleRadius(props.theme, prop.value as string)
                : prop.key.endsWith("width")
                  ? handlePixelValue(prop.value as string)
                  : prop.value
          };`,
      )
      .join("\n");
  }}
`;
