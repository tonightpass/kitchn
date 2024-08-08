import React from "react";
import styled, { DefaultTheme } from "styled-components";

import { AreaProps, areaCss } from "./area";
import { BackgroundProps, backgroundCss } from "./background";
import { BorderProps, borderCss } from "./border";
import { MarginProps, marginCss } from "./margin";
import { PaddingProps, paddingCss } from "./padding";
import { PositionProps, positionCss } from "./position";
import { Breakpoint, Gap, Size } from "../../types/theme";
import { isNumber } from "../../utils/isNumber";

export type DecoratorProps = {
  display?:
    | "block"
    | "inline"
    | "inline-block"
    | "flex"
    | "grid"
    | "none"
    | "initial"
    | "inherit";
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "initial";
  font?: string | number | keyof Size;
  cursor?: "pointer" | "auto" | "inherit" | "initial" | "unset";
  pointerEvents?: "auto" | "none" | "inherit" | "initial" | "revert" | "unset";
} & AreaProps &
  BackgroundProps &
  BorderProps &
  MarginProps &
  PaddingProps &
  PositionProps;

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

export const withDecorator = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  return styled(
    // This prevents 'w', 'h', 'minW', 'minH', 'maxW', 'maxH', 'zi' from being passed to the DOM element, avoiding React warnings

    ({
      w: _w,
      h: _h,
      minW: _minW,
      minH: _minH,
      maxW: _maxW,
      maxH: _maxH,
      width: _width,
      height: _height,
      minWidth: _minWidth,
      minHeight: _minHeight,
      maxWidth: _maxWidth,
      maxHeight: _maxHeight,
      zi: _zi,
      zIndex: _zIndex,
      ...props
    }: DecoratorProps & T) => <WrappedComponent {...(props as T)} />,
  )<DecoratorProps>`
    ${({ display }) => (display !== undefined ? `display: ${display};` : "")}
    ${({ overflow }) =>
      overflow !== undefined ? `overflow: ${overflow};` : ""}
    ${({ theme, font }) =>
      font !== undefined ? `font-size: ${handleFont(theme, font)};` : ""}
    ${({ cursor }) => (cursor !== undefined ? `cursor: ${cursor};` : "")}
    ${({ pointerEvents }) =>
      pointerEvents !== undefined ? `pointer-events: ${pointerEvents};` : ""}
    ${areaCss}
    ${backgroundCss}
    ${borderCss}
    ${marginCss}
    ${paddingCss}
    ${positionCss}
  `;
};
