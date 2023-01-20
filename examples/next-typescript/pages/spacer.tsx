import { Spacer, Container, Text } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

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
          <Space x={11} />

          <Space x={32} />

          <Space x={43} />
        </Container>

        <Text>horizontal</Text>
        <Container row>
          <Container style={{ background: "white" }} />
          <Space x={23} y={213} />
          <Container style={{ background: "white" }} />
        </Container>
      </Container>
    </>
  );
};

const Space = styled(Spacer)`
  background-color: red;
`;

export default SpacerPage;
