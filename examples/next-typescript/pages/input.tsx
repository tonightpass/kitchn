import { Container, Text, Input } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const ProgressPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Container gap={5}>
          <Text>default</Text>
          <Input placeholder={"Placeholder..."} />
        </Container>

        <Container gap={5}>
          <Text>sizes</Text>
          <Container direction={["column", "row", "row"]} row>
            <Container align="flex-start">
              <Input size="small" placeholder="Small" />
            </Container>

            <Container align="flex-start">
              <Input placeholder="Default" />
            </Container>

            <Container align="flex-start">
              <Input size="large" placeholder="Large" />
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ProgressPage;
