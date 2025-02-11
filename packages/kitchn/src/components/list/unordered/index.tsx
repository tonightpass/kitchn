import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc/with-decorator";
import { KitchnComponent } from "../../../types";
import ListItem from "../item";

export type UnorderedListProps = KitchnComponent<
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

UnorderedListComponent.displayName = "KitchnUnorderedList";
export const UnorderedList = withDecorator(UnorderedListComponent);
export default UnorderedList;
