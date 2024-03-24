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
  return styled(WrappedComponent)<DecoratorProps>`
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
