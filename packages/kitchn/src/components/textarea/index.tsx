import React, { forwardRef } from "react";
import styled from "styled-components";

import { withDecorator } from "../../hoc/with-decorator";
import { KitchnComponent } from "../../types";

type Props = {
  placeholder?: string;
  disabled?: boolean;
  errored?: boolean;
  defaultValue?: string;
  width?: number | string;
  height?: number | string;
  resize?: "none" | "both" | "horizontal" | "vertical";
};

export type TextareaProps = KitchnComponent<
  Props,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>;

const TextareaForwarded = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder,
      disabled,
      defaultValue,
      // Prevents the 'errored' prop from being passed to the textarea element
      errored: _errored,
      ...props
    }: TextareaProps,
    ref: React.Ref<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        ref={ref}
        aria-disabled={disabled}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        {...props}
      />
    );
  },
);

TextareaForwarded.displayName = "Textarea";

const TextareaComponent = styled(TextareaForwarded)<TextareaProps>`
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

TextareaComponent.displayName = "KitchnTextarea";
export const Textarea = withDecorator(TextareaComponent);
export default Textarea;
