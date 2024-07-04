import React from "react";
import styled from "styled-components";

import { handlePixelValue, withDecorator } from "../../hoc/withDecorator";
import { KitchnComponent } from "../../types";
import { shortenName } from "../../utils/shortenName";
import Text from "../Text";

type Props = {
  /**
   * The size of the avatar.
   */
  size?: number | string;

  /**
   * The username of the avatar from tonightpass.com.
   */
  username?: string;

  /**
   * The src of the avatar.
   */
  src?: string;

  /**
   * The text of the avatar
   * (if it's a placeholder).
   */
  text?: string;

  /**
   * The shape of the avatar.
   */
  shape?: "square" | "round";
};

export type AvatarProps = KitchnComponent<Props>;

const AvatarComponent = styled(
  ({ size = 30, src, text, shape, username, ...props }: AvatarProps) => {
    return (
      <div role={"img"} aria-label={text || "Avatar"} {...props}>
        {text && !src && <Text size={"0.4em"}>{shortenName(text)}</Text>}
        {src && (
          <AvatarImage
            src={username ? `https://tonightpass.com/@${username}.png` : src}
            shape={shape}
            alt={"Avatar"}
            width={size}
            height={size}
            draggable={false}
          />
        )}
      </div>
    );
  },
)<AvatarProps>`
  width: ${({ size }) => handlePixelValue(size || 30)};
  height: ${({ size }) => handlePixelValue(size || 30)};
  border-radius: ${({ shape, theme }) =>
    shape === "square" ? theme.radius.square : theme.radius.round};
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  font-size: ${({ size }) => handlePixelValue(size || 30)};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  transition: all 0.2s;
  overflow: hidden;
`;

export const AvatarImage = styled.img<{ shape?: AvatarProps["shape"] }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ shape, theme }) =>
    shape === "square" ? theme.radius.square : theme.radius.round};
`;

AvatarComponent.displayName = "KitchnAvatar";
export const Avatar = withDecorator(AvatarComponent);
export default Avatar;
