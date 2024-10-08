import { CSSProperties } from "react";
import { css } from "styled-components";

import { handleValue } from "./decorator";
import { Breakpoint, Gap } from "../../types/theme";

export type AreaProps = {
  width?: CSSProperties["width"] | keyof Gap | keyof Breakpoint;
  height?: CSSProperties["height"] | keyof Gap | keyof Breakpoint;
  w?: AreaProps["width"];
  h?: AreaProps["height"];
  minWidth?: CSSProperties["minWidth"] | keyof Gap | keyof Breakpoint;
  minHeight?: CSSProperties["minHeight"] | keyof Gap | keyof Breakpoint;
  maxWidth?: CSSProperties["maxWidth"] | keyof Gap | keyof Breakpoint;
  maxHeight?: CSSProperties["maxHeight"] | keyof Gap | keyof Breakpoint;
  minW?: AreaProps["minWidth"];
  minH?: AreaProps["minHeight"];
  maxW?: AreaProps["maxWidth"];
  maxH?: AreaProps["maxHeight"];
};

export const areaCss = css<AreaProps>`
  ${({ theme, width, w }) =>
    width !== undefined || w !== undefined
      ? `width: ${handleValue(theme, width || w)};`
      : ""}
  ${({ theme, height, h }) =>
    height !== undefined || h !== undefined
      ? `height: ${handleValue(theme, height || h)};`
      : ""}
  ${({ theme, minWidth, minW }) =>
    minWidth !== undefined || minW !== undefined
      ? `min-width: ${handleValue(theme, minWidth || minW)};`
      : ""}
  ${({ theme, minHeight, minH }) =>
    minHeight !== undefined || minH !== undefined
      ? `min-height: ${handleValue(theme, minHeight || minH)};`
      : ""}
  ${({ theme, maxWidth, maxW }) =>
    maxWidth !== undefined || maxW !== undefined
      ? `max-width: ${handleValue(theme, maxWidth || maxW)};`
      : ""}
  ${({ theme, maxHeight, maxH }) =>
    maxHeight !== undefined || maxH !== undefined
      ? `max-height: ${handleValue(theme, maxHeight || maxH)};`
      : ""}
`;
