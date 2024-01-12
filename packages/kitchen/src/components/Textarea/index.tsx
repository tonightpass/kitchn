import React from "react";
import styled from "styled-components";

import withScale from "../../hoc/withScale";
import { KitchenComponent } from "../../types";

type Props = {
  placeholder?: string;
  disabled?: boolean;
  errored?: boolean;
  defaultValue?: string;
  width?: number | string;
  height?: number | string;
  resize?: "none" | "both" | "horizontal" | "vertical";
};

export type TextareaProps = KitchenComponent<
  Props,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

const TextareaComponent = styled(
  ({ placeholder, disabled, defaultValue, ...props }: TextareaProps) => {
    return (
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        {...props}
      />
    );
  },
)<TextareaProps>`
  position: relative;
  outline: none;
  transition: all 0.2s;
  user-select: none;
  resize: ${({ resize = "none" }) => resize};
  border-radius: ${({ theme }) => theme.radius.square};
  padding: ${({ theme }) => theme.gap.small};
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
        ? theme.colors.layout.darker
        : theme.colors.layout.dark};
  color: ${({ errored, theme }) =>
    errored ? theme.colors.accent.danger : theme.colors.text.lightest};
  :placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
  &:focus {
    border: 1px solid
      ${({ theme, errored }) =>
        errored ? theme.colors.accent.danger : theme.colors.layout.lighter};
  }
`;

TextareaComponent.displayName = "KitchenTextarea";
export const Textarea = withScale(TextareaComponent);
export default Textarea;
