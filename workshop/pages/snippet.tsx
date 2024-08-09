import { Container, Snippet, Text } from "kitchn";
import { NextPage } from "next";
import React from "react";

const SnippetPage: NextPage = () => {
  return (
    <>
      <Container gap={"small"} maxW={700} mx={"auto"}>
        <Text>{"default"}</Text>
        <Container>
          <Snippet text={"npm install kitchn"} width={"300px"} />
        </Container>

        <Text>{"type"}</Text>
        <Container>
          <Snippet
            text={"npm install kitchn"}
            type={"danger"}
            width={"300px"}
          />
        </Container>

        <Text>{"muli-line"}</Text>
        <Container>
          <Snippet
            text={[
              "npm install kitchn",
              "npm install kitchn",
              "npm install kitchn",
            ]}
          />
        </Container>

        <Text>{"no prompt"}</Text>
        <Container>
          <Snippet w={300} text={"npm install kitchn"} prompt={false} />
        </Container>

        <Text>{"callback"}</Text>
        <Container>
          <Snippet
            w={300}
            text={"npm install kitchn"}
            onCopy={() => alert("copied")}
          />
        </Container>
      </Container>
    </>
  );
};

export default SnippetPage;
