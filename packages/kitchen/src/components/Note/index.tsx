import React from "react";
import styled from "styled-components";
import { KitchenComponent } from "../../types";
import { AccentColors } from "../../types/theme";

export type NoteProps = KitchenComponent & {
  /**
   * The size of the note.
   * @default "normal"
   */
  size?: "small" | "normal" | "large";

  /**
   * The type of the note.
   * @default "primary"
   */
  type?: keyof AccentColors;

  /**
   * The prefix of the note.
   */
  prefix?: "note" | "danger" | "warning" | "success" | "info";

  /**
   * The button of the note.
   */
  button?: string;

  /**
   * The fill color of the note.
   * @default false
   */
  filled?: boolean;
};

const Note = styled(
  ({
    as: Component = "div",
    prefix,
    button,
    filled,
    children,
    ...props
  }: NoteProps) => {
    return (
      <Component {...props}>
        {prefix && (
          <Prefix hasContent={children != undefined}>
            {prefix === "danger"
              ? "Danger :"
              : prefix === "warning"
              ? "Warning :"
              : prefix === "success"
              ? "Success :"
              : prefix === "info"
              ? "Info :"
              : prefix === "note"
              ? "Note :"
              : null}
          </Prefix>
        )}

        <Content>{children}</Content>
        {button && <Button>{button}</Button>}
      </Component>
    );
  }
)<NoteProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  padding: 0 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  border-radius: 5px;
  background-color: ${({ theme, prefix, filled }) => {
    if (filled) {
      switch (prefix) {
        case "danger":
          return theme.colors.accent.danger;
        case "warning":
          return theme.colors.accent.warning;
        case "success":
          return theme.colors.accent.success;
        case "info":
          return theme.colors.accent.info;
      }
    } else {
      return "transparent";
    }
  }};
  color: ${({ theme, prefix, filled }) => {
    if (filled) {
      return theme.colors.text.lightest;
    } else {
      switch (prefix) {
        case "danger":
          return theme.colors.accent.danger;
        case "warning":
          return theme.colors.accent.warning;
        case "success":
          return theme.colors.accent.success;
        case "info":
          return theme.colors.accent.info;
        default:
          return theme.colors.accent.light;
      }
    }
  }}};

  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "3px 12px";
      case "normal":
        return "7px 12px";
      case "large":
        return "11px 12px";
      default:
        return "7px 12px";
    }
  }};

  font-size: ${(props) => props.theme.size[props.size || "normal"]};

  border: ${({ theme, prefix }) => {
    switch (prefix) {
      case "note":
        return `solid ${theme.colors.accent.primary}`;
      case "danger":
        return `solid ${theme.colors.accent.danger}`;
      case "warning":
        return `solid ${theme.colors.accent.warning}`;
      case "success":
        return `solid ${theme.colors.accent.success}`;
      case "info":
        return `solid ${theme.colors.accent.info}`;
      default:
        return `solid ${theme.colors.accent.primary}`;
    }
  }};
`;

const Prefix = styled.span<{ hasContent: boolean }>`
  font-size: inherit;
  ${({ hasContent }) => hasContent && "margin-right: 7px;"}
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: inherit;
`;

const Content = styled.span`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
`;

const Button = styled.button`
  font-size: inherit;
  margin-left: 7px;
  background-color: inherit;
  color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.layout.light};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.layout.light};
  }
`;

export default Note;
