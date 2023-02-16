import React from "react";
import { Button, Container, KitchenProvider } from "@tonightpass/kitchen";

import "@tonightpass/kitchen/fonts.css";

export default function App() {
  return (
    <KitchenProvider>
      <Container h={"100vh"} align={"center"} justify={"center"}>
        <Button>Button</Button>
      </Container>
    </KitchenProvider>
  );
}
