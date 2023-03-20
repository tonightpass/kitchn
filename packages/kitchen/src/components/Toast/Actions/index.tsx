import React from "react";
import styled from "styled-components";
import { ToastAction } from "../../../hooks/useToasts";
import withScale from "../../../hoc/withScale";
import { KitchenComponent } from "../../../types";
import capitalize from "../../../utils/capitalize";
import Button from "../../Button";
import Container from "../../Container";

type Props = {
  actions: ToastAction[];
  cancelHandle: () => void;
};

export type ToastActionsProps = KitchenComponent<Props>;

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

export default withScale(ToastActions);
