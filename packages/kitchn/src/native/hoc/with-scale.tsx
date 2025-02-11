import React from "react";
import styled, { DefaultTheme } from "styled-components/native";

import { isNumber } from "../../utils/is-number";
import { Breakpoint, Gap, Size } from "../types/theme";

export type ScaleProps = {
  width?: string | number | keyof Gap | keyof Breakpoint;
  height?: string | number | keyof Gap | keyof Breakpoint;
  padding?: string | number | keyof Gap;
  margin?: string | number | keyof Gap;
  w?: string | number | keyof Gap | keyof Breakpoint;
  h?: string | number | keyof Gap | keyof Breakpoint;
  p?: string | number | keyof Gap;
  m?: string | number | keyof Gap;
  paddingLeft?: string | number | keyof Gap;
  paddingRight?: string | number | keyof Gap;
  paddingTop?: string | number | keyof Gap;
  paddingBottom?: string | number | keyof Gap;
  pl?: string | number | keyof Gap;
  pr?: string | number | keyof Gap;
  pt?: string | number | keyof Gap;
  pb?: string | number | keyof Gap;
  marginLeft?: string | number | keyof Gap;
  marginRight?: string | number | keyof Gap;
  marginTop?: string | number | keyof Gap;
  marginBottom?: string | number | keyof Gap;
  ml?: string | number | keyof Gap;
  mr?: string | number | keyof Gap;
  mt?: string | number | keyof Gap;
  mb?: string | number | keyof Gap;
  px?: string | number | keyof Gap;
  py?: string | number | keyof Gap;
  mx?: string | number | keyof Gap;
  my?: string | number | keyof Gap;
  minWidth?: string | number | keyof Gap | keyof Breakpoint;
  minHeight?: string | number | keyof Gap | keyof Breakpoint;
  maxWidth?: string | number | keyof Gap | keyof Breakpoint;
  maxHeight?: string | number | keyof Gap | keyof Breakpoint;
  minW?: string | number | keyof Gap | keyof Breakpoint;
  minH?: string | number | keyof Gap | keyof Breakpoint;
  maxW?: string | number | keyof Gap | keyof Breakpoint;
  maxH?: string | number | keyof Gap | keyof Breakpoint;
  font?: string | number | keyof Size;
};

const handleValue = (
  theme: DefaultTheme,
  value?: string | number | keyof Gap | keyof Breakpoint,
) => {
  return (
    theme.gap[value as keyof Gap] ||
    theme.breakpoint[value as keyof Breakpoint] ||
    (isNumber(value) ? `${value}px` : value)
  );
};

const handleFont = (
  theme: DefaultTheme,
  value: string | number | keyof Size,
) => {
  return (
    theme.size[value as keyof Size] || (isNumber(value) ? `${value}px` : value)
  );
};

export const withScale = <T extends object>(
  WrappedComponent: React.ComponentType<T & ScaleProps>,
) => {
  return styled(WrappedComponent)<T & ScaleProps>`
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
  `;
};
