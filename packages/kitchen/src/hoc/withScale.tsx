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
      position || pos ? `position: ${position || pos};` : ""}
    ${({ zIndex }) => (zIndex ? `z-index: ${zIndex};` : "")}
    ${({ overflow }) => (overflow ? `overflow: ${overflow};` : "")}
    ${({ theme, left, l }) =>
      left || l ? `left: ${handleValue(theme, left || l)};` : ""}
    ${({ theme, right, r }) =>
      right || r ? `right: ${handleValue(theme, right || r)};` : ""}
    ${({ theme, top, t }) =>
      top || t ? `top: ${handleValue(theme, top || t)};` : ""}
    ${({ theme, bottom, b }) =>
      bottom || b ? `bottom: ${handleValue(theme, bottom || b)};` : ""}
    ${({ theme, width, w }) =>
      width || w ? `width: ${handleValue(theme, width || w)};` : ""}
    ${({ theme, height, h }) =>
      height || h ? `height: ${handleValue(theme, height || h)};` : ""}
    ${({ theme, padding, p }) =>
      padding || p ? `padding: ${handleValue(theme, padding || p)};` : ""}
    ${({ theme, margin, m }) =>
      margin || m ? `margin: ${handleValue(theme, margin || m)};` : ""}
    ${({ theme, paddingLeft, pl, px }) =>
      paddingLeft || pl || px
        ? `padding-left: ${handleValue(theme, paddingLeft || pl || px)};`
        : ""}
    ${({ theme, paddingRight, pr, px }) =>
      paddingRight || pr || px
        ? `padding-right: ${handleValue(theme, paddingRight || pr || px)};`
        : ""}
    ${({ theme, paddingTop, pt, py }) =>
      paddingTop || pt || py
        ? `padding-top: ${handleValue(theme, paddingTop || pt || py)};`
        : ""}
    ${({ theme, paddingBottom, pb, py }) =>
      paddingBottom || pb || py
        ? `padding-bottom: ${handleValue(theme, paddingBottom || pb || py)};`
        : ""}
    ${({ theme, marginLeft, ml, mx }) =>
      marginLeft || ml || mx
        ? `margin-left: ${handleValue(theme, marginLeft || ml || mx)};`
        : ""}
    ${({ theme, marginRight, mr, mx }) =>
      marginRight || mr || mx
        ? `margin-right: ${handleValue(theme, marginRight || mr || mx)};`
        : ""}
    ${({ theme, marginTop, mt, my }) =>
      marginTop || mt || my
        ? `margin-top: ${handleValue(theme, marginTop || mt || my)};`
        : ""}
    ${({ theme, marginBottom, mb, my }) =>
      marginBottom || mb || my
        ? `margin-bottom: ${handleValue(theme, marginBottom || mb || my)};`
        : ""}
    ${({ theme, minWidth, minW }) =>
      minWidth || minW
        ? `min-width: ${handleValue(theme, minWidth || minW)};`
        : ""}
    ${({ theme, minHeight, minH }) =>
      minHeight || minH
        ? `min-height: ${handleValue(theme, minHeight || minH)};`
        : ""}
    ${({ theme, maxWidth, maxW }) =>
      maxWidth || maxW
        ? `max-width: ${handleValue(theme, maxWidth || maxW)};`
        : ""}
    ${({ theme, maxHeight, maxH }) =>
      maxHeight || maxH
        ? `max-height: ${handleValue(theme, maxHeight || maxH)};`
        : ""}
    ${({ theme, font }) =>
      font ? `font-size: ${handleFont(theme, font)};` : ""}
    ${({ cursor }) => (cursor ? `cursor: ${cursor};` : "")}
    ${({ pointerEvents }) =>
      pointerEvents ? `pointer-events: ${pointerEvents};` : ""}
  `;
};
