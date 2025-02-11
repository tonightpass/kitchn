import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { CSSProperties } from "styled-components/native";

import { AreaProps, areaCss } from "./area";
import { BackgroundProps, backgroundCss } from "./background";
import { BorderProps, borderCss } from "./border";
import { MarginProps, marginCss } from "./margin";
import { PaddingProps, paddingCss } from "./padding";
import { PositionProps, positionCss } from "./position";
import { Breakpoint, Gap, Size } from "../../types/theme";
import { isNumber } from "../../utils/is-number";

export type DecoratorProps = {
  display?: CSSProperties["display"];
  overflow?: CSSProperties["overflow"];
  font?: CSSProperties["fontSize"] | keyof Size;
  cursor?: CSSProperties["cursor"];
  pointerEvents?: CSSProperties["pointerEvents"];
  userSelect?: CSSProperties["userSelect"];
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
  passThroughProps: (keyof DecoratorProps)[] = [],
) => {
  const WithDecoratorComponent = React.forwardRef<
    HTMLElement,
    DecoratorProps & T
  >((props, ref) => {
    const filteredProps = Object.entries(props).reduce((acc, [key, value]) => {
      if (
        ![
          "w",
          "h",
          "height",
          "width",
          "minW",
          "minH",
          "maxW",
          "maxH",
          "zi",
          "zIndex",
        ].includes(key) ||
        passThroughProps.includes(key as keyof DecoratorProps)
      ) {
        (acc as { [key: string]: any })[key] = value;
      }
      return acc;
    }, {} as T);

    return <WrappedComponent {...filteredProps} ref={ref} />;
  });

  WithDecoratorComponent.displayName = `WithDecorator(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return styled(WithDecoratorComponent)<DecoratorProps>`
    ${({ display }) => (display !== undefined ? `display: ${display};` : "")}
    ${({ overflow }) =>
      overflow !== undefined ? `overflow: ${overflow};` : ""}
    ${({ theme, font }) =>
      font !== undefined ? `font-size: ${handleFont(theme, font)};` : ""}
    ${({ cursor }) => (cursor !== undefined ? `cursor: ${cursor};` : "")}
    ${({ pointerEvents }) =>
      pointerEvents !== undefined ? `pointer-events: ${pointerEvents};` : ""}
    ${({ userSelect }) =>
      userSelect !== undefined ? `user-select: ${userSelect};` : ""}
    ${areaCss}
    ${backgroundCss}
    ${borderCss}
    ${marginCss}
    ${paddingCss}
    ${positionCss}
  `;
};
