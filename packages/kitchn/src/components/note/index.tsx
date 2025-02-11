import React from "react";
import {
  RiAlarmWarningLine,
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiInformationLine,
} from "react-icons/ri";
import styled from "styled-components";

import { withDecorator } from "../../hoc/with-decorator";
import { useTheme } from "../../hooks";
import { KitchnComponent, NormalSizes } from "../../types";
import { convertRGBToRGBA } from "../../utils/convert-rgb-to-rgba";
import Container from "../container";
import Icon from "../icon";

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

export type NoteProps = KitchnComponent<Props>;

const NoteComponent = styled(
  ({
    as: Component = "div",
    type,
    action,
    label = true,
    size,
    // Prevents the 'fill' prop from being passed to the DOM element
    fill: _fill,
    children,
    ...props
  }: NoteProps) => {
    const { theme } = useTheme();
    return (
      <Component role={"note"} size={size} {...props}>
        <Container align={"center"} gap={"small"} row>
          {label && (
            <NoteLabel>
              <Icon
                color={"inherit"}
                icon={
                  type === "success"
                    ? RiCheckboxCircleLine
                    : type === "danger"
                      ? RiAlarmWarningLine
                      : type === "warning"
                        ? RiErrorWarningLine
                        : RiInformationLine
                }
                size={
                  size === "small"
                    ? theme.size.compact
                    : size === "large"
                      ? theme.size.large
                      : theme.size.medium
                }
              />
            </NoteLabel>
          )}

          <NoteContent>{children}</NoteContent>
        </Container>
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
  font-weight: ${({ theme }) => theme.weight.light};
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
  }};

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
        return props.theme.size.normal;
      case "normal":
      default:
        return props.theme.size.compact;
    }
  }};

  border: ${({ theme, type }) => {
    switch (type) {
      case "danger":
        return `1px solid ${convertRGBToRGBA(theme.colors.accent.danger, 0.5)}`;
      case "warning":
        return `1px solid ${convertRGBToRGBA(theme.colors.accent.warning, 0.5)}`;
      case "info":
        return `1px solid ${convertRGBToRGBA(theme.colors.accent.info, 0.5)}`;
      case "success":
        return `1px solid ${convertRGBToRGBA(theme.colors.accent.success, 0.5)}`;
      case "secondary":
        return `1px solid ${convertRGBToRGBA(theme.colors.layout.light, 0.5)}`;
      case "primary":
      default:
        return `1px solid ${convertRGBToRGBA(theme.colors.layout.dark, 0.5)}`;
    }
  }};
`;

export const NoteLabel = styled.span`
  font-size: inherit;
  color: inherit;
`;

export const NoteContent = styled.span`
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  text-align: left;
`;

export const NoteAction = styled.div``;

NoteComponent.displayName = "KitchnNote";
export const Note = withDecorator(NoteComponent);
export default Note;
