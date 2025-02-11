import React from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/with-decorator";
import { KitchnComponent } from "../../types";

interface Props {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  large?: boolean;
}

export type ToggleProps = KitchnComponent<
  Props,
  React.InputHTMLAttributes<HTMLInputElement>
>;

const ToggleComponent = styled(
  ({
    disabled,
    checked,
    onChange,
    // Prevents the 'large' prop from being passed to the input element
    large: _large,
    ...props
  }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return e.preventDefault();
      if (onChange) onChange(e);
    };

    return (
      <input
        aria-checked={checked}
        aria-disabled={disabled}
        role={"switch"}
        type={"checkbox"}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        {...props}
      />
    );
  },
)`
  appearance: none;
  box-sizing: border-box;
  width: ${({ large }) => (large ? "40px" : "28px")};
  height: ${({ large }) => (large ? "20px" : "14px")};
  border-radius: ${({ theme }) => theme.radius.round};
  background-color: ${({ disabled, checked, theme }) =>
    disabled
      ? theme.colors.layout.dark
      : checked
        ? theme.colors.layout.lightest
        : theme.colors.layout.dark};
  position: relative;
  transition: all 0.2s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 1px solid
    ${({ disabled, checked, theme }) =>
      disabled
        ? theme.colors.layout.dark
        : checked
          ? theme.colors.layout.lightest
          : theme.colors.layout.dark};

  &::before {
    content: "";
    position: absolute;
    width: ${({ large }) => (large ? "18px" : "12px")};
    height: ${({ large }) => (large ? "18px" : "12px")};
    background-color: ${({ disabled, checked, theme }) =>
      disabled
        ? theme.colors.layout.dark
        : checked
          ? theme.colors.layout.lightest
          : theme.colors.layout.dark};
    border-radius: ${({ theme }) => theme.radius.round};
    transition: all 0.2s;
    transform: translateX(
      ${({ checked, large }) => (checked ? "0" : large ? "20px" : "14px")}
    );
  }

  &::after {
    content: "";
    position: absolute;
    width: ${({ large }) => (large ? "18px" : "12px")};
    height: ${({ large }) => (large ? "18px" : "12px")};
    background-color: ${({ theme, disabled, checked }) =>
      disabled
        ? theme.colors.layout.darker
        : checked
          ? theme.colors.layout.darkest
          : theme.colors.layout.light};
    border-radius: ${({ theme }) => theme.radius.round};
    transition: all 0.2s;
    transform: translateX(
      ${({ checked, large }) => (checked ? (large ? "20px" : "14px") : "0")}
    );
  }
`;

ToggleComponent.displayName = "KitchnToggle";
export const Toggle = withDecorator(ToggleComponent);
export default Toggle;
