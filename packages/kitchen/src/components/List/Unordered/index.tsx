import React from "react";
import styled from "styled-components";
import ListItem from "../Item";

const UnorderedList = styled((props) => {
  return <ul {...props} />;
})`
  padding: 0;
  list-style-type: none;
  margin: 15px;
  margin-left: 25px;
  ${ListItem}:before {
    content: "-";
    color: ${(props) => props.theme.colors.text.darker};
    margin-left: -15px;
    display: inline-block;
    position: absolute;
  }
`;

export default UnorderedList;
