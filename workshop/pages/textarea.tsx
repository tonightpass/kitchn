import { Container, Text, Textarea } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const TextareaPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Text>{"default"}</Text>
        <Container gap={10}>
          <Textarea
            placeholder={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          />
        </Container>

        <Text>{"disabled"}</Text>
        <Container gap={10}>
          <Textarea
            disabled
            placeholder={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          />
        </Container>

        <Text>{"error"}</Text>
        <Container gap={10}>
          <Textarea
            errored
            defaultValue={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          />
        </Container>
      </Container>
    </>
  );
};

export default TextareaPage;
