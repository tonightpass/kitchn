import { CSSProperties } from "react";
import { css } from "styled-components";

import { handleValue } from "./decorator";
import { Breakpoint, Gap } from "../../types/theme";

export type PositionProps = {
  position?: CSSProperties["position"];
  pos?: PositionProps["position"];
  zIndex?: CSSProperties["zIndex"];
  zi?: PositionProps["zIndex"];
  left?: CSSProperties["left"] | keyof Gap | keyof Breakpoint;
  right?: CSSProperties["right"] | keyof Gap | keyof Breakpoint;
  top?: CSSProperties["top"] | keyof Gap | keyof Breakpoint;
  bottom?: CSSProperties["bottom"] | keyof Gap | keyof Breakpoint;
  l?: PositionProps["left"];
  r?: PositionProps["right"];
  t?: PositionProps["top"];
  b?: PositionProps["bottom"];
};

export const positionCss = css<PositionProps>`
  ${({ position, pos }) =>
    (position ?? pos) !== undefined ? `position: ${position ?? pos};` : ""}
  ${({ zIndex, zi }) =>
    (zIndex ?? zi) !== undefined ? `z-index: ${zIndex ?? zi};` : ""}
  ${({ theme, left, l }) =>
    (left ?? l) !== undefined ? `left: ${handleValue(theme, left ?? l)};` : ""}
  ${({ theme, right, r }) =>
    (right ?? r) !== undefined
      ? `right: ${handleValue(theme, right ?? r)};`
      : ""}
  ${({ theme, top, t }) =>
    (top ?? t) !== undefined ? `top: ${handleValue(theme, top ?? t)};` : ""}
  ${({ theme, bottom, b }) =>
    (bottom ?? b) !== undefined
      ? `bottom: ${handleValue(theme, bottom ?? b)};`
      : ""}
`;
