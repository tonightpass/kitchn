import { Badge, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const BadgePage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <p>{"default"}</p>
        <Container gap={5} align={"flex-start"}>
          <Badge>{"1"}</Badge>
          <Badge>{"5"}</Badge>
          <Badge>{"Badge"}</Badge>
        </Container>
        <p>{"size"}</p>
        <Container gap={5} align={"flex-start"}>
          <Badge size={"small"}>{"Small"}</Badge>
          <Badge size={"normal"}>{"Normal"}</Badge>
          <Badge size={"large"}>{"Large"}</Badge>
        </Container>
        <p>{"variants"}</p>
        <Container gap={5} align={"flex-start"}>
          <Badge type={"primary"}>{"Primary"}</Badge>
          <Badge type={"secondary"}>{"Secondary"}</Badge>
          <Badge type={"info"}>{"Info"}</Badge>
          <Badge type={"success"}>{"Success"}</Badge>
          <Badge type={"warning"}>{"Warning"}</Badge>
          <Badge type={"danger"}>{"Danger"}</Badge>
        </Container>
      </Container>
    </>
  );
};

export default BadgePage;
