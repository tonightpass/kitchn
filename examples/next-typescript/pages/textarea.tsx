import { Textarea, Container } from "@tonightpass/kitchen";
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
        <p>default</p>
        <Container gap={10}>
          <Textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></Textarea>
        </Container>

        <p>disabled</p>
        <Container gap={10}>
          <Textarea
            disabled
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></Textarea>
        </Container>

        <p>error</p>
        <Container gap={10}>
          <Textarea
            errored
            defaultValue={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          ></Textarea>
        </Container>
      </Container>
    </>
  );
};

export default TextareaPage;
