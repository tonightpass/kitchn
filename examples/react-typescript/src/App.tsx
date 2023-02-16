import React from "react";
import {
  Button,
  Container,
  KitchenProvider,
  useToasts,
} from "@tonightpass/kitchen";

export default function App() {
  const { setToast } = useToasts();
  return (
    <KitchenProvider>
      <Container h={"100vh"} align={"center"} justify={"center"}>
        <Button
          onClick={() => {
            console.log("Hello World");
            setToast({
              text: "Hello World",
            });
          }}
        >
          Button
        </Button>
      </Container>
    </KitchenProvider>
  );
}
