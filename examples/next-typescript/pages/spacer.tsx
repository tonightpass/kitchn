import { Spacer, Container } from "@tonightpass/kitchen";
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
        <p>vertical</p>
        <Container>
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

        <p>horizontal</p>
        <Container row>
          <Container style={{ background: "white" }} />
          <Spacer x={3} />
          <Container style={{ background: "white" }} />
        </Container>
      </Container>
    </>
  );
};

export default SpacerPage;
