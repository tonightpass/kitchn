import React from "react";
import styled, { useTheme } from "styled-components";

import { withScale } from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import { AccentColors, Size, TextColors } from "../../types/theme";

type Props = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: keyof Size | number | string;
  /**
   * The text color. Strictly limited to colors of our design system. If you want to pass accent color make sure to pass `accent` instead of `color`.
   */
  color?: keyof TextColors | string;
  /**
   * The accent color. Strictly limited to colors of our design system, but can be used in combination with `color` prop.
   */
  accent?: keyof AccentColors;
  align?: "top" | "middle" | "bottom";
};

export type IconProps = KitchenComponent<Props, React.SVGProps<SVGSVGElement>>;

const IconComponent = styled(
  ({ icon: Component, size, ...props }: IconProps) => {
    const theme = useTheme();
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        size={theme.size[size as keyof Size] || size || theme.size.normal}
        height={theme.size[size as keyof Size] || size || theme.size.normal}
        width={theme.size[size as keyof Size] || size || theme.size.normal}
        {...props}
      />
    );
  },
)<IconProps>`
  color: ${(props) =>
    props.theme.colors.accent[props.accent as keyof AccentColors] ||
    props.theme.colors.text[props.color as keyof TextColors] ||
    props.color ||
    props.theme.colors.text.lightest};
  vertical-align: ${({ align }) => {
    switch (align) {
      case "top":
        return "text-top";
      case "middle":
        return "middle";
      case "bottom":
        return "text-bottom";
      default:
        return "middle";
    }
  }};
`;

IconComponent.displayName = "KitchenIcon";
export const Icon = withScale(IconComponent);
export default Icon;
