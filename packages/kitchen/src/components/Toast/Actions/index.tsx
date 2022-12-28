import React from "react";
import styled from "styled-components";
import { ToastAction } from "../../../hooks/useToasts";
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
      <Container row {...props}>
        {actions.map((action, i) => (
          <Button
            key={i}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handler(event, action.handler)
            }
          >
            {action.name}
          </Button>
        ))}
      </Container>
    );
  }
)``;

export default ToastActions;
