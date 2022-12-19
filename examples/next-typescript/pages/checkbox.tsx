import { Checkbox, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const CheckboxPage: NextPage = () => {
  return (
    <Container
      style={{
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <Container gap={10}>
        <p>default</p>
        <Checkbox>Default</Checkbox>
      </Container>
      <Container gap={10}>
        <p>checked</p>
        <Checkbox checked>Checked</Checkbox>
      </Container>
      <Container gap={10}>
        <p>no label</p>
        <Checkbox />
      </Container>
      <Container gap={10}>
        <p>disabled</p>
        <Checkbox disabled>Disabled</Checkbox>
      </Container>
      <Container gap={10}>
        <p>indeterminate</p>
        <Checkbox indeterminate>Indeterminate</Checkbox>
      </Container>
      <Container gap={10}>
        <p>overflowing text</p>
        <Checkbox>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Checkbox>
      </Container>
      <Container gap={10}>
        <p>full width</p>
        <Checkbox fullWidth>Full Width</Checkbox>
      </Container>
    </Container>
  );
};

export default CheckboxPage;
