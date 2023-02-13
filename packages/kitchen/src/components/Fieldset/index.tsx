import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import Text from "../Text";

type Props = {
  /**
   * The color of the fieldset.
   */
  tabs?: boolean;

  children?: React.ReactNode;
};

export type FieldsetProps = KitchenComponent<Props>;

const Fieldset = styled(({ tabs, children, ...props }: FieldsetProps) => {
  return (
    <div>
      {tabs && <div></div>}
      <Container {...props}>{children}</Container>
    </div>
  );
})<FieldsetProps>`
  position: relative;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  width: 790px;
`;

export const Container = styled.div`
  border-radius: 5px;
`;

export const Content = styled.div`
  padding: 24px;
`;

export const Title = styled(Text)``;

export const Subtitle = styled(Text)``;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
`;

export const Status = styled(Text)``;

export const Action = styled.div`
  .button {
    color: red;
  }
`;

export default Fieldset;
