import { Button, Container, Note } from "@tonightpass/kitchn";
import { NextPage } from "next";
import React from "react";

const NotePage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <p>{"sizes"}</p>
        <Container row align={"flex-start"} gap={10}>
          <Note size={"small"}>{"A small note."}</Note>
          <Note>{"A default note."}</Note>
          <Note size={"large"}>{"A large note."}</Note>
        </Container>

        <p>{"action"}</p>
        <Container gap={10}>
          <Container>
            <Note
              action={
                <Button
                  size={"small"}
                  onClick={() => alert("i'll take note ahah")}
                >
                  {"Upgrade\r"}
                </Button>
              }
            >
              {"This note details some information.\r"}
            </Note>
          </Container>

          <Container>
            <Note
              action={
                <Button
                  size={"small"}
                  onClick={() => alert("i'll take note ahah")}
                >
                  {"Upgrade\r"}
                </Button>
              }
            >
              {"This note details a large amount information that could\r"}
              {
                "potentially wrap into two or more lines, forcing the height of the\r"
              }
              {"Note to be larger.\r"}
            </Note>
          </Container>
        </Container>

        <p>{"types"}</p>
        <Container gap={10}>
          <Note type={"secondary"}>
            {"This note details some information."}
          </Note>
          <Note type={"info"}>{"info"}</Note>
          <Note type={"success"}>{"success"}</Note>
          <Note type={"danger"}>{"danger"}</Note>
          <Note type={"warning"}>{"warning"}</Note>
        </Container>

        <p>{"hidden label"}</p>
        <Container>
          <Note label={false}>{"This note details some information."}</Note>
        </Container>

        <p>{"custom label"}</p>
        <Container>
          <Note label={"Custom"}>{"This note details some information"}</Note>
        </Container>

        <p>{"filled"}</p>
        <Container gap={10}>
          <Note fill>{"This note details something important."}</Note>
          <Note fill type={"secondary"}>
            {"This note details some information.\r"}
          </Note>
          <Note fill type={"info"}>
            {"This note details an info.\r"}
          </Note>
          <Note fill type={"success"}>
            {"This note details a success.\r"}
          </Note>
          <Note fill type={"danger"}>
            {"This note details a danger.\r"}
          </Note>
          <Note fill type={"warning"}>
            {"This note details a warning.\r"}
          </Note>
        </Container>
      </Container>
    </>
  );
};

export default NotePage;
