import { Container, Error } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const ErrorPage: NextPage = () => {
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

        <Container row>
          <Error>This email address is already in use.</Error>
        </Container>

        <p>custom label</p>
        <Container row>
          <Error label="Email Error">
            This email address is already in use.
          </Error>
        </Container>

        <p>no label</p>
        <Container row>
          <Error label={false}>This email address is already in use. </Error>
        </Container>

        <p>sizes</p>
        <Container gap={10}>
          <Container row>
            <Error size="small">This email is in use.</Error>
          </Container>
          <Container row>
            <Error size="normal">This email is in use.</Error>
          </Container>
          <Container row>
            <Error size="large">This email is in use.</Error>
          </Container>
        </Container>

        <p>multiline</p>
        <Container row>
          <Error>
            A valid email address is required so that we can verify your GitHub
            installation. In the event that you cannot provide a valid email
            address, please contact support.
          </Error>
        </Container>
        <Container row>
          <Error size="large">
            A valid email address is required so that we can verify your GitHub
            installation. In the event that you cannot provide a valid email
            address, please contact support.
          </Error>
        </Container>
        <Container row>
          <Error size="title">
            A valid email address is required so that we can verify your GitHub
            installation. In the event that you cannot provide a valid email
            address, please contact support.
          </Error>
        </Container>

        <p>with an `error` property</p>
        <Container row>
          <Error
            error={{
              message: "The request failed.",
              action: "Contact Us",
              link: "https://vercel.com/contact",
            }}
          />
        </Container>
      </Container>
    </>
  );
};

export default ErrorPage;
