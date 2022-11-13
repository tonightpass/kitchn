import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

export type CodeProps = KitchenComponent & {
  title: string;
};

const Code = styled(({ children, title, ...props }: CodeProps) => {
  return (
    <pre title={title} {...props}>
      {title && (
        <Header>
          <Title>{title}</Title>
        </Header>
      )}
      <Content>{children}</Content>
    </pre>
  );
})<CodeProps>`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: 8px;
  padding: ${({ title }) => (title ? "35px 25px 25px" : "25px")};
  margin: 30px 0;
  white-space: pre;
  overflow: auto;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.size.small};
  background-color: ${({ theme }) => theme.colors.layout.dark};
  color: ${({ theme }) => theme.colors.text.lighter};
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 5px;
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
