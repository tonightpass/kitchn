import React from "react";
import styled from "styled-components";

import withScale from "../../../hoc/withScale";
import { KitchenComponent } from "../../../types";

export type InlineCodeProps = KitchenComponent<
  object,
  React.HTMLAttributes<HTMLElement>
>;

const InlineCodeComponent = styled((props: InlineCodeProps) => {
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

InlineCodeComponent.displayName = "KitchenInlineCode";
export const InlineCode = withScale(InlineCodeComponent);
export default InlineCode;
