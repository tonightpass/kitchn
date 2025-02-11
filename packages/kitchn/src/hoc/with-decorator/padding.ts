import { CSSProperties } from "react";
import { css } from "styled-components";

import { handleValue } from "./decorator";
import { Gap } from "../../types/theme";

export type PaddingProps = {
  padding?: CSSProperties["padding"] | keyof Gap;
  p?: PaddingProps["padding"];
  paddingLeft?: CSSProperties["paddingLeft"] | keyof Gap;
  paddingRight?: CSSProperties["paddingRight"] | keyof Gap;
  paddingTop?: CSSProperties["paddingTop"] | keyof Gap;
  paddingBottom?: CSSProperties["paddingBottom"] | keyof Gap;
  pl?: PaddingProps["paddingLeft"];
  pr?: PaddingProps["paddingRight"];
  pt?: PaddingProps["paddingTop"];
  pb?: PaddingProps["paddingBottom"];
  px?: PaddingProps["padding"];
  py?: PaddingProps["padding"];
};

export const paddingCss = css<PaddingProps>`
  ${({ theme, padding, p }) =>
    padding !== undefined || p !== undefined
      ? `padding: ${handleValue(theme, padding || p)};`
      : ""}
  ${({ theme, paddingLeft, pl, px }) =>
    paddingLeft !== undefined || pl !== undefined || px !== undefined
      ? `padding-left: ${handleValue(theme, paddingLeft || pl || px)};`
      : ""}
  ${({ theme, paddingRight, pr, px }) =>
    paddingRight !== undefined || pr !== undefined || px !== undefined
      ? `padding-right: ${handleValue(theme, paddingRight || pr || px)};`
      : ""}
  ${({ theme, paddingTop, pt, py }) =>
    paddingTop !== undefined || pt !== undefined || py !== undefined
      ? `padding-top: ${handleValue(theme, paddingTop || pt || py)};`
      : ""}
  ${({ theme, paddingBottom, pb, py }) =>
    paddingBottom !== undefined || pb !== undefined || py !== undefined
      ? `padding-bottom: ${handleValue(theme, paddingBottom || pb || py)};`
      : ""}
`;
