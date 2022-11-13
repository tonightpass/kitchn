import React from "react";
import styled from "styled-components";

const InlineCode = styled((props) => {
  return <code {...props} />;
})`
  display: inline-block;
  background: ${({ theme }) => theme.colors.layout.dark};
  color: ${({ theme }) => theme.colors.text.lighter};
  border-radius: 5px;
  font-family: ${({ theme }) => theme.family.monospace};
  padding: 0 5px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export default InlineCode;
