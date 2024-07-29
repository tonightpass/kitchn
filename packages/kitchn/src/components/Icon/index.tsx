import React from "react";
import styled, { useTheme } from "styled-components";

import { withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";
import { AccentColors, Size, TextColors } from "../../types/theme";
import Image from "../Image";

type IconSource =
  | {
      icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      src?: string;
    }
  | {
      icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
      src: string;
      alt?: string;
    };

type Props = IconSource & {
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
  clickable?: boolean;
};

export type IconProps = KitchnComponent<Props, React.SVGProps<SVGSVGElement>>;

const IconComponent = styled(
  ({ size, src, icon: IconComponent, ...rest }: IconProps) => {
    const theme = useTheme();

    if (src) {
      return (
        <Image
          src={src}
          height={theme.size[size as keyof Size] || size || theme.size.normal}
          width={theme.size[size as keyof Size] || size || theme.size.normal}
          {...rest}
        />
      );
    }

    if (IconComponent) {
      return (
        <IconComponent
          role={"img"}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          size={theme.size[size as keyof Size] || size || theme.size.normal}
          height={theme.size[size as keyof Size] || size || theme.size.normal}
          width={theme.size[size as keyof Size] || size || theme.size.normal}
          {...rest}
        />
      );
    }

    return null;
  },
)<IconProps>`
  user-select: none;
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
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};
  pointer-events: ${({ clickable }) => (clickable ? "auto" : "none")};
`;

IconComponent.displayName = "KitchnIcon";
export const Icon = withDecorator(IconComponent);
export default Icon;
