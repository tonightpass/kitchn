import React from "react";
import styled from "styled-components";

const Code = styled(({ children, ...props }) => {
  return (
    <pre {...props}>
      <Content>{children}</Content>
    </pre>
  );
})`
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: 8px;
  padding: 25px;
  margin: 30px 0;
  white-space: pre;
  overflow: auto;
`;

const Content = styled.code`
  color: ${({ theme }) => theme.colors.text.lightest};
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  font-size: ${({ theme }) => theme.size.small};
  line-height: 1.5;
  font-family: ${({ theme }) => theme.family.monospace};
  tab-size: 4;
  hyphens: none;
`;

export default Code;
