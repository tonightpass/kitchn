import React from "react";
import styled from "styled-components";
import { Toast, ToastLayout } from "../../../hooks/useToasts";
import { KitchenComponent } from "../../../types";
import getTranslateByPlacement from "../../../utils/getTranslateByPlacement";
import Container from "../../Container";
import Text from "../../Text";
import ToastActions from "../Actions";

export type ToastItemProps = KitchenComponent & {
  toast: Toast;
  layout: Required<ToastLayout>;
};

const ToastItem = styled(({ toast, layout, ...props }) => {
  const [animationState, setAnimationState] = React.useState<
    "entrance" | "exit" | "done" | null
  >(null);
  const [renderable, setRenderable] = React.useState<boolean>(toast.visible);
  const isReactNode = typeof toast.text !== "string";

  const { enter, leave } = React.useMemo(
    () => getTranslateByPlacement(layout.placement),
    [layout.placement]
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
    <AnimationContainer
      key={toast.id}
      animationState={animationState}
      enter={enter}
      leave={leave}
      layout={layout}
      {...props}
    >
      {isReactNode ? (
        toast.text
      ) : (
        <Container row justify={"space-between"}>
          <Text>{toast.text}</Text>
          <ToastActions actions={toast.actions} cancelHandle={toast.cancel} />
        </Container>
      )}
    </AnimationContainer>
  );
})<ToastItemProps>`
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
const AnimationContainer = styled.div<
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
  height: ${({ animationState }) => (animationState !== "done" ? "auto" : 0)};
  padding: ${({ layout, animationState }) =>
    animationState !== "done" ? layout.padding : 0};
  margin: ${({ layout, animationState }) =>
    animationState !== "done" ? layout.margin : 0};
  border: ${({ animationState }) => (animationState !== "done" ? "1px" : "0")}
    solid ${({ theme }) => theme.colors.layout.dark};
`;

const ToastItemMemo = React.memo(ToastItem);

export default ToastItemMemo;
