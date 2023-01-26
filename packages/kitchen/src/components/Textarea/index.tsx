import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";

type Props = {
  placeholder?: string;
  disabled?: boolean;
  errored?: boolean;
  defaultValue?: string;
  width?: number | string;
  height?: number | string;
};

export type TextareaProps = KitchenComponent<
  Props,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

const Textarea = styled(
  ({
    placeholder,
    disabled,
    defaultValue,
    width,
    height,
    ...props
  }: TextareaProps) => {
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
  outline: none;
  transition: all 0.2s;
  user-select: none;
  resize: none;
  border-radius: 4px;
  padding: 0 ${({ theme }) => theme.gap.small};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  min-height: 50px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.layout.darker : theme.colors.layout.darkest};
  font-size: ${({ theme }) => theme.size.small};
  border: 1px solid
    ${({ errored, disabled, theme }) =>
      errored
        ? theme.colors.accent.danger
        : disabled
        ? theme.colors.layout.light
        : theme.colors.layout.lighter};
  color: ${({ errored, theme }) =>
    errored ? theme.colors.accent.danger : theme.colors.text.lightest};
  ::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export default Textarea;
