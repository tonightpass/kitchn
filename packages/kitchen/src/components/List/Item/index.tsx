import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc/withDecorator";
import { KitchnComponent } from "../../../types";

export type ListItemProps = KitchnComponent<
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

ListItemComponent.displayName = "KitchnListItem";
export const ListItem = withDecorator(ListItemComponent);
export default ListItem;
