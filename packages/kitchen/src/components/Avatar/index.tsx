import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import Image from "next/image";

export type AvatarProps = KitchenComponent & {
  /**
   * The width of the avatar.
   */
  width?: number;

  /**
   * The height of the avatar.
   */
  height?: number;

  /**
   * The username of the avatar.
   */
  username?: string;

  /**
   * The url of the avatar.
   */
  url?: string;

  /**
   * The icon of the avatar.
   */
  icon?: boolean;

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
    // size,
    // username,
    // url,
    icon,
    iconSrc,
    iconAlt,
    width,
    height,
    right,
    bottom,
    // members,
    // limit,
    // placeholder,
    // children,
    ...props
  }: AvatarProps) => {
    return (
      <div>
        <Image src="" alt="avatar" width={width} height={height} {...props} />
        {icon && (
          <IconContainer>
            <Icon
              src={iconSrc}
              alt={iconAlt}
              width={width}
              height={height}
              bottom={bottom}
              right={right}
              {...props}
            />
          </IconContainer>
        )}
      </div>
    );
  }
)<AvatarProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  flex: 1;
  gap: 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.layout.lightest};
  }};
`;

const IconContainer = styled.div<AvatarProps>`
  position: absolute;
  bottom: ${({ bottom }) => bottom}px;
  right: ${({ right }) => right}px;
`;

const Icon = styled(Image)<AvatarProps>`
  background-color: ${({ theme }) => theme.colors.layout.lightest};
`;

export default Avatar;
