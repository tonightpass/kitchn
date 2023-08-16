import {
  Badge,
  Button,
  Container,
  Text,
  ToastAction,
  useToasts,
} from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const ToastPage: NextPage = () => {
  const { setToast } = useToasts();

  const alertAction = {
    name: "alert",
    handler: () => alert("alert from toast"),
  };

  const cancelAction: ToastAction = {
    name: "cancel",
    passive: true,
    handler: (_, cancel) => cancel(),
  };

  return (
    <Container
      gap={"normal"}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Container>
        <Text>{"default"}</Text>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit jumped over the fence.",
              delay: 3000,
            });
          }}
        >
          {"Show Toast\r"}
        </Button>
      </Container>
      <Container>
        <Text>{"multiline"}</Text>
        <Button
          onClick={() => {
            setToast({
              text: "HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.",
            });
          }}
        >
          {"Show Toast\r"}
        </Button>
      </Container>
      <Container>
        <Text>{"with jsx"}</Text>
        <Button
          onClick={() => {
            setToast({
              text: (
                <Container align={"flex-start"}>
                  <Badge>{"Badge Component !"}</Badge>
                </Container>
              ),
            });
          }}
        >
          {"Show Toast\r"}
        </Button>
      </Container>
      <Container>
        <Text>{"action"}</Text>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit jumped over the fence.",
              actions: [alertAction],
            });
          }}
        >
          {"Show Toast\r"}
        </Button>
      </Container>

      <Container>
        <Text>{"cancel"}</Text>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit",
              actions: [alertAction, cancelAction],
            });
          }}
        >
          {"Show Toast\r"}
        </Button>
      </Container>

      <Container align={"flex-start"}>
        <Text>{"types"}</Text>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit",
              type: "success",
            });
          }}
          type={"success"}
        >
          {"Show Success\r"}
        </Button>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit",
              type: "warning",
            });
          }}
          type={"warning"}
        >
          {"Show Warning\r"}
        </Button>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit",
              type: "danger",
            });
          }}
          type={"danger"}
        >
          {"Show Danger\r"}
        </Button>
      </Container>
    </Container>
  );
};

export default ToastPage;
