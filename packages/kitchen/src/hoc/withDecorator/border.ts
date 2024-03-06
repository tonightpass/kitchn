import { DefaultTheme, css } from "styled-components";

import { handlePixelValue } from "./decorator";
import { Breakpoint, Gap, LayoutColors, Radius } from "../../types/theme";

export type BorderProps = {
  borderStyle?: "solid" | "dotted" | "dashed";
  bs?: BorderProps["borderStyle"];

  borderWidth?: number | string;
  bw?: BorderProps["borderWidth"];
  borderLeftWidth?: BorderProps["borderWidth"];
  blw?: BorderProps["borderWidth"];
  borderRightWidth?: BorderProps["borderWidth"];
  brw?: BorderProps["borderWidth"];
  borderTopWidth?: BorderProps["borderWidth"];
  btw?: BorderProps["borderWidth"];
  borderBottomWidth?: BorderProps["borderWidth"];
  bbw?: BorderProps["borderWidth"];

  borderColor?: keyof LayoutColors;
  bc?: BorderProps["borderColor"];
  borderLeftColor?: BorderProps["borderColor"];
  blc?: BorderProps["borderColor"];
  borderRightColor?: BorderProps["borderColor"];
  brc?: BorderProps["borderColor"];
  borderTopColor?: BorderProps["borderColor"];
  btc?: BorderProps["borderColor"];
  borderBottomColor?: BorderProps["borderColor"];
  bbc?: BorderProps["borderColor"];

  borderRadius?: number | string | keyof Radius;
  br?: BorderProps["borderRadius"];
  borderTopLeftRadius?: BorderProps["borderRadius"];
  btlr?: BorderProps["borderRadius"];
  borderTopRightRadius?: BorderProps["borderRadius"];
  btrr?: BorderProps["borderRadius"];
  borderBottomLeftRadius?: BorderProps["borderRadius"];
  bblr?: BorderProps["borderRadius"];
  borderBottomRightRadius?: BorderProps["borderRadius"];
  bbrr?: BorderProps["borderRadius"];
};

export const handleRadius = (
  theme: DefaultTheme,
  value?: string | number | keyof Gap | keyof Breakpoint,
) => {
  return (
    theme.gap[value as keyof Gap] ||
    theme.breakpoint[value as keyof Breakpoint] ||
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
