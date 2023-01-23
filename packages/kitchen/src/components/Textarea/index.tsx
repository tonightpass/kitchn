import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

type Props = {
  placeholder?: string;
  disabled?: boolean;
  errored?: boolean;
  defaultValue?: string;
};

export type TextareaProps = KitchenComponent<
  Props,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

const Textarea = styled(
  ({ placeholder, disabled, defaultValue, ...props }: TextareaProps) => {
    return (
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        {...props}
      />
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
  resize: none;
  border-radius: 4px;
  padding: 7px 10px;
  width: 100%;
  height: 100%;
  min-height: 50px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};
  font-size: ${({ theme }) => theme.size.normal};
  border: 1px solid
    ${({ errored, disabled, theme }) =>
      errored
        ? theme.colors.accent.danger
        : disabled
        ? theme.colors.layout.dark
        : theme.colors.layout.light};
  color: ${({ errored, theme }) =>
    errored ? theme.colors.accent.danger : theme.colors.text.lightest};
  ::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export default Textarea;
