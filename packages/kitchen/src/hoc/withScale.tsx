import React from "react";
import styled, { DefaultTheme } from "styled-components";

import { Breakpoint, Gap, Size } from "../types/theme";
import isNumber from "../utils/isNumber";

export type ScaleProps = {
  position?:
    | "relative"
    | "absolute"
    | "fixed"
    | "sticky"
    | "static"
    | "inherit"
    | "initial";
  zIndex?: number;
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "initial";
  pos?: ScaleProps["position"];
  left?: string | number | keyof Gap | keyof Breakpoint;
  right?: string | number | keyof Gap | keyof Breakpoint;
  top?: string | number | keyof Gap | keyof Breakpoint;
  bottom?: string | number | keyof Gap | keyof Breakpoint;
  l?: ScaleProps["left"];
  r?: ScaleProps["right"];
  t?: ScaleProps["top"];
  b?: ScaleProps["bottom"];
  width?: string | number | keyof Gap | keyof Breakpoint;
  height?: string | number | keyof Gap | keyof Breakpoint;
  padding?: string | number | keyof Gap;
  margin?: string | number | keyof Gap;
  w?: ScaleProps["width"];
  h?: ScaleProps["height"];
  p?: ScaleProps["padding"];
  m?: ScaleProps["margin"];
  paddingLeft?: ScaleProps["padding"];
  paddingRight?: ScaleProps["padding"];
  paddingTop?: ScaleProps["padding"];
  paddingBottom?: ScaleProps["padding"];
  pl?: ScaleProps["paddingLeft"];
  pr?: ScaleProps["paddingRight"];
  pt?: ScaleProps["paddingTop"];
  pb?: ScaleProps["paddingBottom"];
  marginLeft?: ScaleProps["margin"];
  marginRight?: ScaleProps["margin"];
  marginTop?: ScaleProps["margin"];
  marginBottom?: ScaleProps["margin"];
  ml?: ScaleProps["marginLeft"];
  mr?: ScaleProps["marginRight"];
  mt?: ScaleProps["marginTop"];
  mb?: ScaleProps["marginBottom"];
  px?: ScaleProps["padding"];
  py?: ScaleProps["padding"];
  mx?: ScaleProps["margin"];
  my?: ScaleProps["margin"];
  minWidth?: ScaleProps["width"];
  minHeight?: ScaleProps["height"];
  maxWidth?: ScaleProps["width"];
  maxHeight?: ScaleProps["height"];
  minW?: ScaleProps["minWidth"];
  minH?: ScaleProps["minHeight"];
  maxW?: ScaleProps["maxWidth"];
  maxH?: ScaleProps["maxHeight"];
  font?: string | number | keyof Size;
  cursor?: "pointer" | "auto" | "inherit" | "initial" | "unset";
  pointerEvents?: "auto" | "none" | "inherit" | "initial" | "revert" | "unset";
};

export const handlePixelValue = (value?: string | number) => {
  return isNumber(value) ? `${value}px` : value;
};

export const handleValue = (
  theme: DefaultTheme,
  value?: string | number | keyof Gap | keyof Breakpoint,
) => {
  return (
    theme.gap[value as keyof Gap] ||
    theme.breakpoint[value as keyof Breakpoint] ||
    handlePixelValue(value as string | number)
  );
};

export const handleFont = (
  theme: DefaultTheme,
  value: string | number | keyof Size,
) => {
  return (
    theme.size[value as keyof Size] ||
    handlePixelValue(value as string | number)
  );
};

export const withScale = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  return styled(WrappedComponent)<ScaleProps>`
    ${({ position, pos }) =>
      position !== undefined || pos !== undefined
        ? `position: ${position || pos};`
        : ""}
    ${({ zIndex }) => (zIndex !== undefined ? `z-index: ${zIndex};` : "")}
    ${({ overflow }) =>
      overflow !== undefined ? `overflow: ${overflow};` : ""}
    ${({ theme, left, l }) =>
      left !== undefined || l !== undefined
        ? `left: ${handleValue(theme, left || l)};`
        : ""}
    ${({ theme, right, r }) =>
      right !== undefined || r !== undefined
        ? `right: ${handleValue(theme, right || r)};`
        : ""}
    ${({ theme, top, t }) =>
      top !== undefined || t !== undefined
        ? `top: ${handleValue(theme, top || t)};`
        : ""}
    ${({ theme, bottom, b }) =>
      bottom !== undefined || b !== undefined
        ? `bottom: ${handleValue(theme, bottom || b)};`
        : ""}
    ${({ theme, width, w }) =>
      width !== undefined || w !== undefined
        ? `width: ${handleValue(theme, width || w)};`
        : ""}
    ${({ theme, height, h }) =>
      height !== undefined || h !== undefined
        ? `height: ${handleValue(theme, height || h)};`
        : ""}
    ${({ theme, padding, p }) =>
      padding !== undefined || p !== undefined
        ? `padding: ${handleValue(theme, padding || p)};`
        : ""}
    ${({ theme, margin, m }) =>
      margin !== undefined || m !== undefined
        ? `margin: ${handleValue(theme, margin || m)};`
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
    ${({ theme, marginLeft, ml, mx }) =>
      marginLeft !== undefined || ml !== undefined || mx !== undefined
        ? `margin-left: ${handleValue(theme, marginLeft || ml || mx)};`
        : ""}
    ${({ theme, marginRight, mr, mx }) =>
      marginRight !== undefined || mr !== undefined || mx !== undefined
        ? `margin-right: ${handleValue(theme, marginRight || mr || mx)};`
        : ""}
    ${({ theme, marginTop, mt, my }) =>
      marginTop !== undefined || mt !== undefined || my !== undefined
        ? `margin-top: ${handleValue(theme, marginTop || mt || my)};`
        : ""}
    ${({ theme, marginBottom, mb, my }) =>
      marginBottom !== undefined || mb !== undefined || my !== undefined
        ? `margin-bottom: ${handleValue(theme, marginBottom || mb || my)};`
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
    ${({ theme, font }) =>
      font !== undefined ? `font-size: ${handleFont(theme, font)};` : ""}
    ${({ cursor }) => (cursor !== undefined ? `cursor: ${cursor};` : "")}
    ${({ pointerEvents }) =>
      pointerEvents !== undefined ? `pointer-events: ${pointerEvents};` : ""}
  `;
};
