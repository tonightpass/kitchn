import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import Text from "../Text";
import convertRGBToRGBA from "../../utils/convertRGBToRGBA";

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
  type: "error";

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
  border-color: ${({ theme, type }) =>
    type === "error" && theme.colors.accent.danger};
  width: 790px;
  background: ${({ theme, disabled }) =>
    disabled && theme.colors.layout.darker};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

export const Container = styled.div`
  border-radius: 5px;
`;

export const Content = styled.div<{ disabled?: boolean }>`
  padding: 24px;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  background: ${({ theme, disabled }) =>
    disabled && theme.colors.layout.darker};
`;

export const Title = styled(Text)<{ disabled?: boolean }>`
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

export const Subtitle = styled(Text)`
  font-size: ${({ theme }) => theme.size.small};
  margin: 12px 0;
`;

export const Footer = styled.footer<{
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

export const Status = styled(Text)`
  font-size: ${({ theme }) => theme.size.small};
  align-self: center;
`;

export const Action = styled.div``;

export default Fieldset;
