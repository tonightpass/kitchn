import React from "react";
import styled from "styled-components";
import { Toast, ToastLayout } from "../../../hooks/useToasts";
import { KitchenComponent } from "../../../types";
import getTranslateByPlacement from "../../../utils/getTranslateByPlacement";
import Container from "../../Container";
import Text from "../../Text";

export type ToastItemProps = KitchenComponent & {
  toast: Toast;
  layout: Required<ToastLayout>;
};

const ToastItem = styled(({ toast, layout, ...props }) => {
  const isReactNode = typeof toast.text !== "string";

  const { enter, leave } = React.useMemo(
    () => getTranslateByPlacement(layout.placement),
    [layout.placement]
  );

  return (
    <div key={toast.id} visible={toast.visible} clearTime={350} {...props}>
      {isReactNode ? (
        toast.text
      ) : (
        <>
          <Text>{toast.text}</Text>
          <Container>{/* actions */}</Container>
        </>
      )}
    </div>
  );
})<ToastItemProps>``;

const ToastItemMemo = React.memo(ToastItem);

export default ToastItemMemo;
