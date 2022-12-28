import React from "react";
import styled from "styled-components";
import { Toast, ToastAction, ToastLayout } from "../../../hooks/useToasts";
import { KitchenComponent } from "../../../types";
import getTranslateByPlacement from "../../../utils/getTranslateByPlacement";
import Button from "../../Button";
import Container from "../../Container";
import Text from "../../Text";
import ToastActions from "../Actions";

export type ToastItemProps = KitchenComponent & {
  toast: Toast;
  layout: Required<ToastLayout>;
};

const ToastItem = styled(({ toast, layout, ...props }) => {
  const [animationState, setAnimationState] = React.useState<
    "entrance" | "exit" | null
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
        <Container>
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
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: ${({ theme }) => theme.radius.square};
  overflow: hidden;
  transition: all 350ms cubic-bezier(0.1, 0.2, 0.1, 1);
`;
const AnimationContainer = styled.div<
  ToastItemProps & {
    animationState: "entrance" | "exit";
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
  height: ${({ animationState }) => (animationState ? "auto" : 0)};
  padding: ${({ layout, animationState }) =>
    animationState ? layout.padding : 0};
  margin: ${({ layout, animationState }) =>
    animationState ? layout.margin : 0};
`;

const ToastItemMemo = React.memo(ToastItem);

export default ToastItemMemo;