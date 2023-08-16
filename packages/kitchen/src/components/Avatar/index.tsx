import React from "react";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import { KitchenComponent } from "../../types";
import isNumber from "../../utils/isNumber";
import shortenName from "../../utils/shortenName";
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

export type AvatarProps = KitchenComponent<Props>;

const Avatar = styled(
  ({ size = 30, src, text, shape, ...props }: AvatarProps) => {
    return (
      <div {...props}>
        {text && <Text size={"small"}>{shortenName(text)}</Text>}
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
  },
)<AvatarProps>`
  width: ${({ size }) =>
    size ? (isNumber(size) ? `${size}px` : size) : "30px"};
  height: ${({ size }) =>
    size ? (isNumber(size) ? `${size}px` : size) : "30px"};
  border-radius: ${({ shape, theme }) =>
    shape === "square" ? theme.radius.square : theme.radius.round};
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  user-select: none;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  transition: all 0.2s;
`;

const Image = styled.img<{ shape?: AvatarProps["shape"] }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ shape, theme }) =>
    shape === "square" ? theme.radius.square : theme.radius.round};
`;

export default withScale(Avatar);
