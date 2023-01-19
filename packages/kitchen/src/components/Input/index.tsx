import React from "react";
import styled from "styled-components";
import { KitchenComponent, NormalSizes } from "../../types";

export type InputProps = KitchenComponent & {
  placeholder?: string;
  size?: NormalSizes;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  prefixStyling?: boolean;
  suffixStyling?: boolean;
  prefixContainer?: boolean;
  suffixContainer?: boolean;
};

const Input = styled(
  ({
    size = "normal",
    prefix,
    suffix,
    disabled,
    prefixContainer = true,
    suffixContainer = true,
    prefixStyling = true,
    suffixStyling = true,
    ...props
  }: InputProps) => (
    <Container disabled={disabled}>
      {prefix && prefixContainer && (
        <Prefix size={size} disabled={disabled} prefixStyling={prefixStyling}>
          {prefix}
        </Prefix>
      )}
      <Field
        size={size}
        prefix={prefix}
        suffix={suffix}
        prefixContainer={prefixContainer}
        suffixContainer={suffixContainer}
        prefixStyling={prefixStyling}
        suffixStyling={suffixStyling}
        disabled={disabled}
        {...props}
      />
      {suffix && suffixContainer && (
        <Suffix size={size} disabled={disabled} suffixStyling={suffixStyling}>
          {suffix}
        </Suffix>
      )}
    </Container>
  )
)`
  font: inherit;
  width: 100%;
  min-width: 0;
  display: inline-flex;
  appearance: none;
  line-height: normal;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: ${({ theme }) => theme.radius.square};
  color: ${({ theme }) => theme.colors.text.lightest};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};
  ${({ disabled }) => disabled && "cursor: not-allowed;"}

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
    font-weight: ${({ theme }) => theme.weight.semiBold};
  }
`;

const Container = styled.div<{
  disabled?: InputProps["disabled"];
}>`
  display: flex;
  align-items: center;
  max-width: 100%;
  font-size: ${({ theme }) => theme.size.small};
  border-radius: ${({ theme }) => theme.radius.square};
  ${({ disabled }) => disabled && "cursor: not-allowed;"}
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

  ${({ prefix, prefixContainer }) =>
    prefix &&
    prefixContainer &&
    `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}
  ${({ suffix, suffixContainer }) =>
    suffix &&
    suffixContainer &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
  ${({ prefix, prefixContainer, prefixStyling }) =>
    prefix && prefixContainer && !prefixStyling && "border-left: none;"}
  ${({ suffix, suffixContainer, suffixStyling }) =>
    suffix && suffixContainer && !suffixStyling && "border-right: none;"}
`;

const Prefix = styled.span<{
  size?: InputProps["size"];
  disabled?: InputProps["disabled"];
  prefixStyling?: InputProps["prefixStyling"];
}>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text.light};
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-right: none;
  border-radius: ${({ theme }) => theme.radius.square} 0 0
    ${({ theme }) => theme.radius.square};
  padding: 0 ${({ theme }) => theme.gap.small};
  ${({ theme, prefixStyling, disabled }) =>
    (prefixStyling || disabled) &&
    `background-color: ${theme.colors.layout.darker};`};
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

const Suffix = styled.span<{
  size?: InputProps["size"];
  disabled?: InputProps["disabled"];
  suffixStyling?: InputProps["suffixStyling"];
}>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text.light};
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-left: none;
  border-radius: 0 ${({ theme }) => theme.radius.square}
    ${({ theme }) => theme.radius.square} 0;
  padding: 0 ${({ theme }) => theme.gap.small};
  ${({ theme, suffixStyling, disabled }) =>
    (suffixStyling || disabled) &&
    `background-color: ${theme.colors.layout.darker};`};
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
