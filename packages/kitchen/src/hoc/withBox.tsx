import React from "react";
import styled from "styled-components";

import withScale from "./withScale";
import { AccentColors, LayoutColors, Radius } from "../types/theme";
import isNumber from "../utils/isNumber";

export type BoxProps = {
  background?: string | keyof LayoutColors;
  bg?: string | keyof LayoutColors;
  backgroundColor?: keyof LayoutColors;
  bgc?: keyof LayoutColors;
  backgroundAccent?: keyof AccentColors;
  bga?: keyof AccentColors;
  borderRadius?: number | string | keyof Radius;
  br?: number | string | keyof Radius;
};

const withBox = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  const Box = styled(WrappedComponent)<BoxProps>`
    ${({ theme, borderRadius, br }) =>
      (borderRadius || br) &&
      `border-radius: ${
        theme.radius[(borderRadius || br) as keyof Radius] ||
        (isNumber(borderRadius)
          ? `${borderRadius || br}px`
          : borderRadius || br)
      };`}

    ${({
      theme,
      background,
      bg,
      backgroundColor,
      bgc,
      backgroundAccent,
      bga,
    }) =>
      (background || bg || backgroundColor || bgc || backgroundAccent || bga) &&
      `background: ${
        theme.colors.layout[(background || bg) as keyof LayoutColors] ||
        theme.colors.layout[(backgroundColor || bgc) as keyof LayoutColors] ||
        theme.colors.accent[(backgroundAccent || bga) as keyof AccentColors] ||
        background ||
        bg
      };`}
  `;

  return withScale(Box);
};

export default withBox;
