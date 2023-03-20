import React from "react";
import RemixIcon from "react-native-remix-icon";
import useTheme from "../../hooks/useTheme";
import withScale from "../../hoc/withScale";
import { KitchenComponent, Size, TextColors } from "../../types";

type Props = {
  name: string;
  size?: number | string | keyof Size;
  fill?: boolean;
  color?: keyof TextColors | string;
};

export type IconProps = KitchenComponent<Props>;

const Icon = ({ name, size = "normal", fill, color, ...props }: IconProps) => {
  const { theme } = useTheme();
  return (
    <RemixIcon
      name={`${name}-${fill ? "fill" : "line"}`}
      size={theme.size[size as keyof Size] || size || theme.size.normal}
      color={
        theme.colors.text[color as keyof TextColors] ||
        color ||
        theme.colors.text.lightest
      }
      {...props}
    />
  );
};

export default withScale(Icon);
