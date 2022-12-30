import { Avatar, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";

const AvatarPage: NextPage = () => {
  const url = "https://picsum.photos/200/300";

  return (
    <Container
      gap={10}
      style={{
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <p>default</p>
      <Container gap={"tiny"} row>
        <Avatar src={url} />
        <Avatar src={url} />
        <Avatar src={url} />
        <Avatar src={url} />
      </Container>
      <Container gap={"tiny"} row>
        <Avatar src={url} shape={"square"} />
        <Avatar src={url} shape={"square"} />
        <Avatar src={url} shape={"square"} />
        <Avatar src={url} shape={"square"} />
      </Container>
    </Container>
  );
};

export default AvatarPage;
