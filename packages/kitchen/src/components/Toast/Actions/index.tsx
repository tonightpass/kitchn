import React from "react";
import styled from "styled-components";
import { ToastAction } from "../../../hooks/useToasts";
import capitalize from "../../../utils/capitalize";
import Button from "../../Button";
import Container from "../../Container";

export type ToastActionsProps = {
  actions: ToastAction[];
  cancelHandle: () => void;
};

const ToastActions = styled(
  ({ actions, cancelHandle, ...props }: ToastActionsProps) => {
    const handler = (
      event: React.MouseEvent<HTMLButtonElement>,
      userHandler: ToastAction["handler"]
    ) => {
      userHandler && userHandler(event, cancelHandle);
    };

    return (
      <Container justify={"center"} align={"flex-end"} flex={"0"} {...props}>
        <Container gap={"tiny"}>
          {actions.map((action, i) => (
            <Button
              key={i}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                handler(event, action.handler)
              }
              size={"small"}
              type={action.passive ? "dark" : "light"}
            >
              {capitalize(action.name)}
            </Button>
          ))}
        </Container>
      </Container>
    );
  }
)``;

export default ToastActions;
