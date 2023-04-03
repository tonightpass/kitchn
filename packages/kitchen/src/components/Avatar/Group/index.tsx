import React from "react";
import styled from "styled-components";
import Avatar, { AvatarProps } from "..";
import withScale from "../../../hoc/withScale";
import { KitchenComponent } from "../../../types";
import Text from "../../Text";

type Props = {
  /**
   * The members of the avatar group.
   */
  members: {
    username?: AvatarProps["username"];
    src?: AvatarProps["src"];
    text?: AvatarProps["text"];
  }[];

  /**
   * The limit of the avatar group.
   * If the members are more than the limit,
   * the last avatar will be a counter.
   */
  limit?: number;

  /**
   * The size of the avatar.
   */
  size?: number | string;
};

export type AvatarGroupProps = KitchenComponent<Props>;

const AvatarGroup = styled(
  ({ members, size, limit, ...props }: AvatarGroupProps) => {
    return (
      <div {...props}>
        {members
          .slice(0, limit ? limit : members.length)
          .map((member, index) => {
            return <Avatar key={index} size={size} {...member} />;
          })}
        {limit && members.length > limit && (
          <Text size={"small"}>+{members.length - limit}</Text>
        )}
      </div>
    );
  }
)`
  display: flex;
  align-items: center;

  ${Text} {
    margin-left: ${({ theme }) => theme.gap.tiny};
  }

  ${Avatar} {
    margin-left: -10px;

    :first-child {
      margin-left: 0;
    }
  }

  :hover {
    ${Avatar} {
      margin-left: 0;
    }
  }
`;

export default withScale(AvatarGroup);
