import { Container, Error, Text } from "@tonightpass/kitchn";
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
        <Container gap={5}>
          <Text>{"default"}</Text>
          <Error>{"This email address is already in use."}</Error>
        </Container>

        <Container gap={5}>
          <Text>{"custom label"}</Text>
          <Error label={"Email Error"}>
            {"This email address is already in use.\r"}
          </Error>
        </Container>

        <Container gap={5}>
          <Text>{"no label"}</Text>
          <Error label={false}>
            {"This email address is already in use. "}
          </Error>
        </Container>

        <Container gap={5}>
          <Text>{"sizes"}</Text>
          <Container direction={["column", "row", "row"]} row>
            <Container align={"flex-start"}>
              <Error size={"small"}>{"This email is in use."}</Error>
            </Container>
            <Container align={"flex-start"}>
              <Error>{"This email is in use."}</Error>
            </Container>
            <Container align={"flex-start"}>
              <Error size={"large"}>{"This email is in use."}</Error>
            </Container>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>{"multiline"}</Text>
          <Container>
            <Container>
              <Error size={"small"}>
                {
                  "A valid email address is required so that we can verify your\r"
                }
                {
                  "GitHub installation. In the event that you cannot provide a\r"
                }
                {"valid email address, please contact support.\r"}
              </Error>
            </Container>
            <Container>
              <Error>
                {
                  "A valid email address is required so that we can verify your\r"
                }
                {
                  "GitHub installation. In the event that you cannot provide a\r"
                }
                {"valid email address, please contact support.\r"}
              </Error>
            </Container>
            <Container>
              <Error size={"large"}>
                {
                  "A valid email address is required so that we can verify your\r"
                }
                {
                  "GitHub installation. In the event that you cannot provide a\r"
                }
                {"valid email address, please contact support.\r"}
              </Error>
            </Container>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>{"with an `error` property"}</Text>
          <Container row>
            <Error
              error={{
                message: "The request failed.",
                action: "Contact Us",
                link: "https://tonightpass.com/contact",
              }}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ErrorPage;
