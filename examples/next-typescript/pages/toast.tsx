import React from "react";
import {
  Badge,
  Button,
  Container,
  Text,
  useToasts,
} from "@tonightpass/kitchen";
import { NextPage } from "next";

const ToastPage: NextPage = () => {
  const { setToast } = useToasts();

  const actions = [
    {
      name: "alert",
      handler: () => alert("alert from toast"),
    },
  ];

  return (
    <Container
      gap={15}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Container>
        <Text>default</Text>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit jumped over the fence.",
            });
          }}
        >
          Show Toast
        </Button>
      </Container>
      <Container>
        <Text>multiline</Text>
        <Button
          onClick={() => {
            setToast({
              text: "HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.",
            });
          }}
        >
          Show Toast
        </Button>
      </Container>
      <Container>
        <Text>with jsx</Text>
        <Button
          onClick={() => {
            setToast({
              text: (
                <Container align={"flex-start"}>
                  <Badge>Badge Component !</Badge>
                </Container>
              ),
            });
          }}
        >
          Show Toast
        </Button>
      </Container>
      <Container>
        <Text>action</Text>
        <Button
          onClick={() => {
            setToast({
              text: "The Evil Rabbit jumped over the fence.",
              actions,
            });
          }}
        >
          Show Toast
        </Button>
      </Container>
    </Container>
  );
};

export default ToastPage;
