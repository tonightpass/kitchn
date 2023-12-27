import React from "react";
import styled from "styled-components";

const ListItem = styled((props) => {
  return <li {...props} />;
})`
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

export default ListItem;
