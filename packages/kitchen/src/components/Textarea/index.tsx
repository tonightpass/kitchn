import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

export type TextareaProps = KitchenComponent & {
  placeholder?: string;
  disabled?: boolean;
  errored?: boolean;
  defaultValue?: string;
};

const Textarea = styled(
  ({
    as: Component = "textarea",
    placeholder,
    disabled,
    errored,
    defaultValue,
    ...props
  }: TextareaProps) => {
    return (
      <Component
        placeholder={placeholder}
        disabled={disabled}
        errored={errored}
        defaultValue={defaultValue}
        {...props}
      ></Component>
    );
  }
)<TextareaProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: all 0.2s;
  line-height: 1;
  user-select: none;
  border-radius: 4px;
  padding: 7px 10px;
  width: 790px;
  height: 100px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  font-size: ${({ theme }) => theme.size.normal};
  border: 1px solid
    ${({ errored, theme }) =>
      errored ? theme.colors.accent.danger : theme.colors.layout.light};
  color: ${({ errored, theme }) =>
    errored ? theme.colors.accent.danger : theme.colors.text.light};
`;

export default Textarea;
