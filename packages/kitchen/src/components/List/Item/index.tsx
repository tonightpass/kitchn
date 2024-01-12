import React from "react";
import styled from "styled-components";

import withScale from "../../../hoc/withScale";
import { KitchenComponent } from "../../../types";

export type ListItemProps = KitchenComponent<
  object,
  React.LiHTMLAttributes<HTMLElement>
>;

const ListItemComponent = styled((props: ListItemProps) => {
  return <li {...props} />;
})`
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

ListItemComponent.displayName = "KitchenListItem";
export const ListItem = withScale(ListItemComponent);
export default ListItem;
