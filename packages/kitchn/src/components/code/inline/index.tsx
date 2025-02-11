import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../../hoc/with-decorator";
import { KitchnComponent } from "../../../types";

export type InlineCodeProps = KitchnComponent<
  object,
  React.HTMLAttributes<HTMLElement>
>;

const InlineCodeComponent = styled((props: InlineCodeProps) => {
  return <code role={"presentation"} {...props} />;
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

InlineCodeComponent.displayName = "KitchnInlineCode";
export const InlineCode = withDecorator(InlineCodeComponent);
export default InlineCode;
