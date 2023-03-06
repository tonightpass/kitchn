import { Spacer, Container, Text } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const SpacerPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Text>vertical</Text>
        <Container gap={24}>
          <Container style={{ background: "white" }}>
            <Spacer y={1} />
          </Container>

          <Container style={{ background: "white" }}>
            <Spacer y={2} />
          </Container>

          <Container style={{ background: "white" }}>
            <Spacer y={3} />
          </Container>
        </Container>

        <Text>horizontal</Text>
        <Container row>
          <Container h={"large"} style={{ background: "white" }} />
          <Spacer x={3} />
          <Container h={"large"} style={{ background: "white" }} />
          <Spacer x={"large"} />
          <Container h={"large"} style={{ background: "white" }} />
        </Container>
      </Container>
    </>
  );
};

export default SpacerPage;
