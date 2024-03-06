import { css } from "styled-components";

import { AccentColors, LayoutColors } from "../../types/theme";

export type BackgroundProps = {
  background?: string | keyof LayoutColors;
  bg?: BackgroundProps["background"];
  backgroundColor?: keyof LayoutColors;
  bgc?: BackgroundProps["backgroundColor"];
  backgroundAccent?: keyof AccentColors;
  bga?: BackgroundProps["backgroundAccent"];
};

export const backgroundCss = css<BackgroundProps>`
  ${({ theme, background, bg, backgroundColor, bgc, backgroundAccent, bga }) =>
    (background || bg || backgroundColor || bgc || backgroundAccent || bga) &&
    `background: ${
      theme.colors.layout[(background || bg) as keyof LayoutColors] ||
      theme.colors.layout[(backgroundColor || bgc) as keyof LayoutColors] ||
      theme.colors.accent[(backgroundAccent || bga) as keyof AccentColors] ||
      background ||
      bg
    };`}
`;
