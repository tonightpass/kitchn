import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc/withDecorator";
import { KitchenComponent } from "../../../types";
import ListItem from "../Item";

export type UnorderedListProps = KitchenComponent<
  object,
  React.OlHTMLAttributes<HTMLElement>
>;

const UnorderedListComponent = styled((props: UnorderedListProps) => {
  return <ul role={"list"} {...props} />;
})`
  padding: 0;
  list-style-type: none;
  margin: 15px;
  margin-left: 25px;
  ${ListItem}::before {
    content: "-";
    color: ${(props) => props.theme.colors.text.darker};
    margin-left: -15px;
    display: inline-block;
    position: absolute;
  }
`;

UnorderedListComponent.displayName = "KitchenUnorderedList";
export const UnorderedList = withDecorator(UnorderedListComponent);
export default UnorderedList;
