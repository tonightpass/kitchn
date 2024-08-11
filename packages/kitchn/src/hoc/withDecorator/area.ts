import { css, DefaultTheme } from "styled-components";

import { handleValue } from "./decorator";
import { BreakpointTuple } from "../../types";
import { Breakpoint, Gap } from "../../types/theme";

type Props = {
  width?: string | number | keyof Gap | keyof Breakpoint;
  height?: string | number | keyof Gap | keyof Breakpoint;
  w?: Props["width"];
  h?: Props["height"];
  minWidth?: Props["width"];
  minHeight?: Props["height"];
  maxWidth?: Props["width"];
  maxHeight?: Props["height"];
  minW?: Props["minWidth"];
  minH?: Props["minHeight"];
  maxW?: Props["maxWidth"];
  maxH?: Props["maxHeight"];
};

export type AreaProps = {
  [K in keyof Props]: Props[K] | BreakpointTuple<Props[K]>;
};

const generateCssForProps = (
  theme: DefaultTheme,
  props: Props | AreaProps,
  index?: number,
) => {
  const styles: { [key: string]: string } = {};

  const handleAndAssignValue = (
    key: string,
    value: string | number | undefined,
  ) => {
    if (value !== undefined) {
      styles[key] = String(handleValue(theme, value));
    }
  };

  const extractValue = (
    value:
      | string
      | number
      | BreakpointTuple<string | number | undefined>
      | undefined,
  ) => {
    if (Array.isArray(value)) {
      return value[index !== undefined ? index : value.length - 1];
    }
    return value;
  };

  handleAndAssignValue("width", extractValue(props.width || props.w));
  handleAndAssignValue("height", extractValue(props.height || props.h));
  handleAndAssignValue("minWidth", extractValue(props.minWidth || props.minW));
  handleAndAssignValue(
    "minHeight",
    extractValue(props.minHeight || props.minH),
  );
  handleAndAssignValue("maxWidth", extractValue(props.maxWidth || props.maxW));
  handleAndAssignValue(
    "maxHeight",
    extractValue(props.maxHeight || props.maxH),
  );

  return css`
    ${Object.entries(styles)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")}
  `;
};

export const areaCss = css<AreaProps>`
  ${({ theme, ...props }) => generateCssForProps(theme, props)}

  ${({ theme, ...props }) => {
    if (!theme.breakpoint) {
      return;
    }

    const breakpointKeys = Object.keys(theme.breakpoint);
    const reversedBreakpointKeys = breakpointKeys.reverse();

    return reversedBreakpointKeys.map((breakpoint, index) => {
      return css`
        @media (max-width: ${theme.breakpoint[
            breakpointKeys[index - 1] as keyof typeof theme.breakpoint
          ]}) {
          ${generateCssForProps(theme, props, index)}
        }
      `;
    });
  }}
`;
