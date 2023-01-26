import { Collapse, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";

const CollapsePage: NextPage = () => {
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
          <Collapse card title={"title"}>
            {"content"}
          </Collapse>
        </Container>
        <p>expanded</p>
        <Container gap={10}></Container>
        <p>subtitle</p>
        <Container gap={10}></Container>
        <p>card</p>
        <Container gap={10}></Container>
        <p>small</p>
        <Container gap={10}></Container>
      </Container>
    </>
  );
};

export default CollapsePage;
