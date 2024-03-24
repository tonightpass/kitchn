import { Container, Text, Toggle, useCheckbox } from "@tonightpass/kitchn";
import { NextPage } from "next";
import React from "react";

const TogglePage: NextPage = () => {
  const [checked1, toggle1] = useCheckbox();
  const [checked2, toggle2] = useCheckbox(true);
  const [checked3, toggle3] = useCheckbox();
  const [checked4, toggle4] = useCheckbox();
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
          <Container>
            <Toggle checked={checked1} onChange={toggle1} />
          </Container>

          <Container>
            <Toggle checked={checked2} onChange={toggle2} />
          </Container>
        </Container>
        <Text>{"disabled"}</Text>
        <Container gap={10}>
          <Container>
            <Toggle disabled />
          </Container>

          <Container>
            <Toggle disabled checked />
          </Container>
        </Container>
        <Text>{"sizes"}</Text>
        <Container row>
          <Container>
            <Toggle checked={checked3} onChange={toggle3} />
          </Container>

          <Container>
            <Toggle large checked={checked4} onChange={toggle4} />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default TogglePage;
