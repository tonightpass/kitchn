import React from "react";
import { Button, Container, Text, useToasts } from "@tonightpass/kitchen";
import { NextPage } from "next";

const ToastPage: NextPage = () => {
  const { setToast } = useToasts();
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
    </Container>
  );
};

export default ToastPage;
