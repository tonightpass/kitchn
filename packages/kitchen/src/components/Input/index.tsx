import React from "react";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";

export type InputProps = KitchenComponent & {
  placeholder?: string;
  size?: NormalSizes;
};

const Input = styled(({ size = "normal", ...props }: InputProps) => (
  <Container>
    <Field size={size} {...props} />
  </Container>
))`
  font: inherit;
  width: 100%;
  min-width: 0;
  display: inline-flex;
  appearance: none;
  line-height: normal;
  order: 1;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: ${({ theme }) => theme.radius.square};
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  color: ${({ theme }) => theme.colors.text.lightest};

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
    font-weight: ${({ theme }) => theme.weight.semiBold};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  font-size: ${({ theme }) => theme.size.small};
`;

const Field = styled.input<InputProps>`
  padding: 0 ${({ theme }) => theme.gap.small};
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "30px";
      case "large":
        return "50px";
      case "normal":
      default:
        return "40px";
    }
  }};
  font-size: ${({ size, theme }) => {
    switch (size) {
      case "small":
        return theme.size.small;
      case "large":
        return theme.size.normal;
      case "normal":
      default:
        return "100%";
    }
  }};
`;

export default Input;
