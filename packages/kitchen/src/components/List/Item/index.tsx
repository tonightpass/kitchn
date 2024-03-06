import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc/withDecorator";
import { KitchenComponent } from "../../../types";

export type ListItemProps = KitchenComponent<
  object,
  React.LiHTMLAttributes<HTMLElement>
>;

const ListItemComponent = styled((props: ListItemProps) => {
  return <li role={"listitem"} {...props} />;
})`
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

ListItemComponent.displayName = "KitchenListItem";
export const ListItem = withDecorator(ListItemComponent);
export default ListItem;
