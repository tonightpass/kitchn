import React from "react";
import styled from "styled-components";

import { convertRGBToRGBA, withDecorator } from "../..";
import { KitchenComponent } from "../../types";
import Text from "../Text";

type Props = {
  /**
   * The color of the fieldset.
   */
  tabs?: boolean;

  /**
   * The status of the fieldset.
   */
  disabled?: boolean;

  /**
   * The type of the footer.
   */
  highlight?: boolean;

  /**
   * The type of the fieldset.
   */
  type?: "error";

  children?: React.ReactNode;
};

export type FieldsetProps = KitchenComponent<Props>;

const FieldsetComponent = styled(
  ({ tabs, children, ...props }: FieldsetProps) => {
    return (
      <div>
        {tabs && <div />}
        <Container {...props}>{children}</Container>
      </div>
    );
  },
)<FieldsetProps>`
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-color: ${({ theme, type }) =>
    type === "error" && theme.colors.accent.danger};
  width: 790px;
  background: ${({ theme, disabled }) =>
    disabled && theme.colors.layout.darker};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

const Container = styled.div`
  border-radius: 5px;
`;

const Content = styled.div<{ disabled?: boolean }>`
  padding: 24px;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  background: ${({ theme, disabled }) =>
    disabled && theme.colors.layout.darker};
`;

const Title = styled(Text)<{ disabled?: boolean }>`
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const Subtitle = styled(Text)`
  font-size: ${({ theme }) => theme.size.small};
  margin: 12px 0;
`;

const Footer = styled.footer<{
  disabled?: boolean;
  highlight?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid ${({ theme }) => theme.colors.layout.dark};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  background: ${({ theme, disabled, highlight }) =>
    disabled
      ? theme.colors.layout.darker
      : highlight
        ? theme.colors.layout.darkest
        : convertRGBToRGBA(theme.colors.layout.darker, 0.3)};
`;

const Status = styled(Text)`
  font-size: ${({ theme }) => theme.size.small};
  align-self: center;
`;

const Action = styled.div``;

export const Fieldset = {
  Container: withDecorator(FieldsetComponent),
  Content: withDecorator(Content),
  Title: withDecorator(Title),
  Subtitle: withDecorator(Subtitle),
  Footer: withDecorator(Footer),
  Status: withDecorator(Status),
  Action: withDecorator(Action),
};
