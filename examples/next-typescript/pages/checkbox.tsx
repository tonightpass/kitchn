import { Checkbox, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const CheckboxPage: NextPage = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <Container
          gap={10}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p>default</p>
          <Checkbox>Default</Checkbox>
        </Container>
        <Container
          gap={10}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p>checked</p>
          <Checkbox checked>Checked</Checkbox>
        </Container>
        <Container
          gap={10}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p>no label</p>
          <Checkbox />
        </Container>
        <Container
          gap={10}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p>disabled</p>
          <Checkbox disabled>Disabled</Checkbox>
        </Container>
        <Container
          gap={10}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p>indeterminate</p>
          <Checkbox indeterminate>Indeterminate</Checkbox>
        </Container>
        <Container
          gap={10}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p>overflowing text</p>
          <Checkbox>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Checkbox>
        </Container>
        <Container
          gap={10}
          style={{
            maxWidth: 700,
            margin: "0 auto",
            marginTop: "15px",
            alignItems: "center",
          }}
        >
          <p>full width</p>
          <Checkbox fullWidth>Full Width</Checkbox>
        </Container>
      </Container>
    </>
  );
};

export default CheckboxPage;
