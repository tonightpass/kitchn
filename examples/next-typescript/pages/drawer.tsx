import React from "react";
import { Button, Container, Drawer, Text } from "@tonightpass/kitchen";
import { NextPage } from "next";

const DrawerPage: NextPage = () => {
  const [active1, setActive1] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [active3, setActive3] = React.useState(false);
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
        <Button size={"medium"} onClick={() => setActive1(!active1)}>
          Open Drawer
        </Button>
        <Drawer show={active1} onDismiss={() => setActive1(false)}>
          <Container align="center" gap={10} style={{ padding: 20 }}>
            <Text size={"title"} weight={"bold"}>
              Drawer
            </Text>
            <Text>
              Drawers should be reserved for small viewports. Use a Modal on
              large viewports.
            </Text>
          </Container>
        </Drawer>
      </Container>
      <Container>
        <Text>custom height</Text>
        <Button size={"medium"} onClick={() => setActive2(!active2)}>
          Open Drawer (with custom height)
        </Button>
        <Drawer show={active2} onDismiss={() => setActive2(false)} height={300}>
          <Container align="center" gap={10} style={{ padding: 20 }}>
            <Text size={"title"} weight={"bold"}>
              Drawer
            </Text>
            <Text>
              Drawers should be reserved for small viewports. Use a Modal on
              large viewports.
            </Text>
          </Container>
        </Drawer>
      </Container>
      <Container>
        <Text>callback</Text>
        <Button size={"medium"} onClick={() => setActive3(!active3)}>
          Open Drawer (with callback)
        </Button>
        <Drawer
          show={active3}
          onDismiss={() => setActive3(false)}
          onAnimationDone={() => alert("Dismissed!")}
        >
          <Container align="center" gap={10} style={{ padding: 20 }}>
            <Text size={"title"} weight={"bold"}>
              Drawer
            </Text>
            <Text>
              Drawers should be reserved for small viewports. Use a Modal on
              large viewports.
            </Text>
          </Container>
        </Drawer>
      </Container>
    </Container>
  );
};

export default DrawerPage;
