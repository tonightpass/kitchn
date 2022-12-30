import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import isNumber from "../../utils/isNumber";

export type AvatarProps = KitchenComponent & {
  /**
   * The size of the avatar.
   */
  size?: number | string;

  /**
   * The username of the avatar.
   */
  username?: string;

  /**
   * The src of the avatar.
   */
  src?: string;

  /**
   * The shape of the avatar.
   */
  shape?: "square" | "round";

  /**
   * The icon's src.
   */
  iconSrc?: string;

  /**
   * The icon's alt.
   */
  iconAlt?: string;

  /**
   * The horizontal position of the avatar's icon.
   */
  right?: number;

  /**
   * The vertical position of the avatar's icon.
   */
  bottom?: number;

  /**
   * The members of the avatar group.
   */
  members?: Array<string>;

  /**
   * The limit of the avatar group.
   */
  limit?: number;

  /**
   * The type of the avatar (if it's a placeholder or not).
   */
  placeholder?: boolean;
};

const Avatar = styled(
  ({
    size = 30,
    src,
    shape,
    iconSrc,
    iconAlt,
    right,
    bottom,
    // members,
    // limit,
    // placeholder,
    // children,
    ...props
  }: AvatarProps) => {
    return (
      <div {...props}>
        {src && (
          <Image
            src={src}
            shape={shape}
            alt={"Avatar"}
            width={size}
            height={size}
            draggable={false}
          />
        )}
      </div>
    );
  }
)<AvatarProps>`
  width: ${({ size }) =>
    size ? (isNumber(size) ? `${size}px` : size) : "30px"};
  height: ${({ size }) =>
    size ? (isNumber(size) ? `${size}px` : size) : "30px"};
  border-radius: ${({ shape, theme }) =>
    shape === "square" ? theme.radius.square : theme.radius.round};
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
`;

const Image = styled.img<{ shape?: AvatarProps["shape"] }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ shape, theme }) =>
    shape === "square" ? theme.radius.square : theme.radius.round};
`;

export default Avatar;
