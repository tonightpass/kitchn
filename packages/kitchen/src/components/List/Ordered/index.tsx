import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc/withDecorator";
import { KitchenComponent } from "../../../types";

export type OrderedListProps = KitchenComponent<
  object,
  React.OlHTMLAttributes<HTMLElement>
>;

const OrderedListComponent = styled((props: OrderedListProps) => {
  return <ol role={"list"} {...props} />;
})`
  padding: 0;
  margin: 15px;
  margin-left: 25px;
  list-style-type: decimal;
`;

OrderedListComponent.displayName = "KitchenOrderedList";
export const OrderedList = withDecorator(OrderedListComponent);
export default OrderedList;
