import React from "react";
import RemixIcon from "react-native-remix-icon";

import { withScale } from "../../hoc";
import { useTheme } from "../../hooks";
import { AccentColors, KitchenComponent, Size, TextColors } from "../../types";

type Props = {
  name: string;
  size?: number | string | keyof Size;
  fill?: boolean;
  /**
   * The text color. Strictly limited to colors of our design system. If you want to pass accent color make sure to pass `accent` instead of `color`.
   */
  color?: keyof TextColors | string;
  /**
   * The accent color. Strictly limited to colors of our design system, but can be used in combination with `color` prop.
   */
  accent?: keyof AccentColors;
};

export type IconProps = KitchenComponent<Props>;

const IconComponent = ({
  name,
  size = "normal",
  fill,
  color,
  accent,
  ...props
}: IconProps) => {
  const { theme } = useTheme();
  return (
    <RemixIcon
      name={`${name}-${fill ? "fill" : "line"}`}
      size={theme.size[size as keyof Size] || size || theme.size.normal}
      color={
        theme.colors.accent[accent as keyof AccentColors] ||
        theme.colors.text[color as keyof TextColors] ||
        color ||
        theme.colors.text.lightest
      }
      {...props}
    />
  );
};

IconComponent.displayName = "KitchenIcon";
export const Icon = withScale(IconComponent);
export default Icon;
