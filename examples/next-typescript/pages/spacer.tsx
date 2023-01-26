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
          <Spacer x={11} style={{ background: "white" }} />

          <Spacer x={32} style={{ background: "white" }} />

          <Spacer x={43} style={{ background: "white" }} />
        </Container>

        <Text>horizontal</Text>
        <Container row>
          <Container style={{ background: "white" }} />
          <Spacer x={23} y={213} />
          <Container style={{ background: "white" }} />
        </Container>
      </Container>
    </>
  );
};

export default SpacerPage;
