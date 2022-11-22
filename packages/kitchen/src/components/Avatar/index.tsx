import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

export type AvatarProps = KitchenComponent & {
  /**
   * The size of the avatar.
   */
  size?: number;

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
  icon?: JSX.Element;

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
    as: Component = "img",
    // size,
    // username,
    // url,
    icon,
    // right,
    // bottom,
    // members,
    // limit,
    // placeholder,
    // children,
    ...props
  }: AvatarProps) => {
    return (
      <Component {...props}>
        {icon && (
          <div>
            <Icon>{icon}</Icon>
          </div>
        )}
      </Component>
    );
  }
)<AvatarProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  flex: 1;
  gap: 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.layout.dark};
  }};
`;

const Icon = styled.div``;

export default Avatar;
