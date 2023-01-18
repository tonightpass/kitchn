import React from "react";
import styled from "styled-components";

const OrderedList = styled((props) => {
  return <ol {...props} />;
})`
  padding: 0;
  margin: 15px;
  margin-left: 25px;
  list-style-type: decimal;
`;

export default OrderedList;
