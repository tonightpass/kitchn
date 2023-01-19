import { Spacer, Container } from "@tonightpass/kitchen";
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
        <p>vertical</p>
        <Container>
          <SpacerContainer style={{ background: "white" }}>
            <Spacer x={11} />
          </SpacerContainer>

          <SpacerContainer style={{ background: "white" }}>
            <Spacer x={32} />
          </SpacerContainer>

          <SpacerContainer style={{ background: "white" }}>
            <Spacer x={43} />
          </SpacerContainer>
        </Container>

        <p>horizontal</p>
        <Container row>
          <Container style={{ background: "white" }} />
          <Spacer x={23} y={213} />
          <Container style={{ background: "white" }} />
        </Container>
      </Container>
    </>
  );
};

const SpacerContainer = styled(Container)`
  margin-top: 24px;
`;

export default SpacerPage;
