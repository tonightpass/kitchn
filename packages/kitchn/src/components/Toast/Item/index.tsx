import React from "react";
import styled from "styled-components";

import { convertRGBToRGBA } from "../../..";
import { withDecorator } from "../../../hoc/withDecorator";
import { Toast, ToastLayout } from "../../../hooks/useToasts";
import { KitchnComponent } from "../../../types";
import { getTranslateByPlacement } from "../../../utils/getTranslateByPlacement";
import Container from "../../Container";
import Text from "../../Text";
import ToastActions from "../Actions";

type Props = {
  toast: Toast;
  layout: Required<ToastLayout>;
};

export type ToastItemProps = KitchnComponent<Props>;

const ToastItemComponent = styled(
  ({ toast, layout, ...props }: ToastItemProps) => {
    const [animationState, setAnimationState] = React.useState<
      "entrance" | "exit" | "done" | null
    >(null);
    const [renderable, setRenderable] = React.useState<boolean>(toast.visible);
    const isReactNode = typeof toast.text !== "string";

    const { enter, leave } = React.useMemo(
      () => getTranslateByPlacement(layout.placement),
      [layout.placement],
    );

    React.useEffect(() => {
      const time = 60;
      if (toast.visible && !renderable) {
        setRenderable(true);
      }

      const timer = setTimeout(() => {
        setAnimationState(toast.visible ? "entrance" : "exit");
        setTimeout(() => {
          if (!toast.visible) setAnimationState("done");
        }, 350);
        clearTimeout(timer);
      }, time);

      return () => {
        clearTimeout(timer);
      };
    }, [renderable, toast.visible]);

    if (!renderable) return null;
    return (
      <ToastItemAnimationContainer
        role={"alert"}
        aria-live={"polite"}
        key={toast.id}
        animationState={animationState}
        enter={enter}
        leave={leave}
        layout={layout}
        toast={toast}
        {...props}
      >
        {isReactNode ? (
          toast.text
        ) : (
          <Container row justify={"space-between"} w={"100%"}>
            <Text>{toast.text}</Text>
            <ToastActions actions={toast.actions} cancelHandle={toast.cancel} />
          </Container>
        )}
      </ToastItemAnimationContainer>
    );
  },
)<ToastItemProps>`
  width: ${({ layout }) => layout.width};
  max-width: ${({ layout }) => layout.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.layout.lightest};
  border-radius: ${({ theme }) => theme.radius.square};
  overflow: hidden;
  transition: all 350ms cubic-bezier(0.1, 0.2, 0.1, 1);

  color: ${({ theme, toast }) => {
    switch (toast.type) {
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
  }};

  background-color: ${({ theme, toast }) => {
    switch (toast.type) {
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
        return theme.colors.layout.darkest;
    }
  }};
`;
export const ToastItemAnimationContainer = styled.div<
  ToastItemProps & {
    animationState: "entrance" | "exit" | "done";
    enter: string;
    leave: string;
  }
>`
  opacity: ${({ animationState }) => (animationState === "entrance" ? 1 : 0)};
  transform: ${({ animationState, enter, leave }) =>
    animationState === null
      ? enter
      : animationState === "entrance"
        ? "translate(0, 0)"
        : leave};
  height: ${({ animationState }) =>
    animationState && animationState !== "done" ? "auto" : 0};
  padding: ${({ layout, animationState }) =>
    animationState && animationState !== "done" ? layout.padding : 0};
  margin: ${({ layout, animationState }) =>
    animationState && animationState !== "done" ? layout.margin : 0};
  border: ${({ animationState }) =>
      animationState && animationState !== "done" ? "1px" : "0"}
    solid
    ${({ theme, toast }) => {
      switch (toast.type) {
        case "danger":
          return convertRGBToRGBA(theme.colors.accent.danger, 0.5);
        case "warning":
          return convertRGBToRGBA(theme.colors.accent.warning, 0.5);
        case "info":
          return convertRGBToRGBA(theme.colors.accent.info, 0.5);
        case "success":
          return convertRGBToRGBA(theme.colors.accent.success, 0.5);
        case "secondary":
          return theme.colors.layout.lighter;
        case "primary":
        default:
          return theme.colors.layout.dark;
      }
    }};
`;

ToastItemComponent.displayName = "KitchnToastItem";
const ToastItemMemo = React.memo(ToastItemComponent);
export const ToastItem = withDecorator(ToastItemMemo);
export default ToastItem;
