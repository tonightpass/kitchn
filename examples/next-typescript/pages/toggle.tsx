import { Toggle, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React, { useState } from "react";

const TogglePage: NextPage = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
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
          <Container>
            <Toggle checked={checked} onChange={() => setChecked(!checked)} />
          </Container>

          <Container>
            <Toggle
              checked={checked2}
              onChange={() => setChecked2(!checked2)}
            />
          </Container>
        </Container>
        <p>disabled</p>
        <Container gap={10}>
          <Container>
            <Toggle disabled />
          </Container>

          <Container>
            <Toggle disabled checked />
          </Container>
        </Container>
        <p>sizes</p>
        <Container row>
          <Container>
            <Toggle
              checked={checked3}
              onChange={() => setChecked3(!checked3)}
            />
          </Container>

          <Container>
            <Toggle
              large
              checked={checked4}
              onChange={() => setChecked4(!checked4)}
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default TogglePage;
