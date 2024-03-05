import React from "react";
import styled from "styled-components";

import { withScale } from "../../hoc/withScale";
import { KitchenComponent, NormalSizes } from "../../types";
import { capitalize } from "../../utils/capitalize";

type Props = {
  /**
   * The size of the note.
   * @default "normal"
   */
  size?: NormalSizes;

  /**
   * The type of the note.
   * @default "primary"
   */
  type?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";

  /**
   * The action of the note.
   */
  action?: JSX.Element;

  /**
   * The fill color of the note.
   * @default false
   */
  fill?: boolean;

  /**
   * The label of the note.
   * @default true
   */
  label?: boolean | string;
};

export type NoteProps = KitchenComponent<Props>;

const NoteComponent = styled(
  ({
    as: Component = "div",
    type,
    action,
    label = true,
    children,
    ...props
  }: NoteProps) => {
    return (
      <Component role={"note"} {...props}>
        <div>
          {label && (
            <NoteLabel>
              {typeof label === "string"
                ? label
                : type && type !== "secondary"
                  ? capitalize(type)
                  : "Note"}
              {label ? ": " : ""}
            </NoteLabel>
          )}

          <NoteContent>{children}</NoteContent>
        </div>
        {action && <NoteAction>{action}</NoteAction>}
      </Component>
    );
  },
)<NoteProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  flex: 1;
  gap: 10px;
  font-weight: ${({ theme }) => theme.weight.medium};
  border-radius: 8px;
  background-color: ${({ theme, type, fill }) => {
    if (fill) {
      switch (type) {
        case "danger":
          return theme.colors.accent.danger;
        case "warning":
          return theme.colors.accent.warning;
        case "info":
          return theme.colors.accent.info;
        case "success":
          return theme.colors.accent.success;
        case "secondary":
          return theme.colors.layout.light;
        case "primary":
        default:
          return theme.colors.layout.dark;
      }
    }
    return "transparent";
  }};
  
  color: ${({ theme, type, fill }) => {
    if (fill) {
      switch (type) {
        case "danger":
        case "warning":
        case "info":
        case "success":
        case "secondary":
          return theme.colors.accent.light;
        case "primary":
        default:
          return theme.colors.text.lightest;
      }
    } else {
      switch (type) {
        case "danger":
          return theme.colors.accent.danger;
        case "warning":
          return theme.colors.accent.warning;
        case "info":
          return theme.colors.accent.info;
        case "success":
          return theme.colors.accent.success;
        case "secondary":
          return theme.colors.text.light;
        case "primary":
        default:
          return theme.colors.text.lightest;
      }
    }
  }}};

  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "4px 8px";
      case "large":
        return "12px 16px";
      case "normal":
      default:
        return "8px 12px";
    }
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return props.theme.size.small;
      case "large":
        return props.theme.size.medium;
      case "normal":
      default:
        return props.theme.size.normal;
    }
  }};

  border: ${({ theme, type }) => {
    switch (type) {
      case "danger":
        return `1px solid ${theme.colors.accent.danger}`;
      case "warning":
        return `1px solid ${theme.colors.accent.warning}`;
      case "info":
        return `1px solid ${theme.colors.accent.info}`;
      case "success":
        return `1px solid ${theme.colors.accent.success}`;
      case "secondary":
        return `1px solid ${theme.colors.layout.light}`;
      case "primary":
      default:
        return `1px solid ${theme.colors.layout.dark}`;
    }
  }};
`;

export const NoteLabel = styled.span`
  font-size: inherit;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: inherit;
`;

export const NoteContent = styled.span`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
`;

export const NoteAction = styled.div``;

NoteComponent.displayName = "KitchenNote";
export const Note = withScale(NoteComponent);
export default Note;
