import { Container, Select } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import { RiArrowUpCircleLine } from "react-icons/ri";

const SelectPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <p>sizes</p>
        <Container gap={10} row style={{ alignItems: "center" }}>
          <Container row>
            <Select size="small" placeholder="Small">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </Select>
          </Container>
          <Container row>
            <Select size="normal" placeholder="Default" />
          </Container>
          <Container row>
            <Select size="large" placeholder="Large" />
          </Container>
        </Container>

        <p>sizes, prefix and suffix</p>
        <Container gap={10} row style={{ alignItems: "center" }}>
          <Container row>
            <Select
              size="small"
              placeholder="Small"
              prefix={<RiArrowUpCircleLine />}
              suffix={<RiArrowUpCircleLine />}
            />
          </Container>
          <Container row>
            <Select
              size="normal"
              placeholder="Default"
              prefix={<RiArrowUpCircleLine />}
              suffix={<RiArrowUpCircleLine />}
            />
          </Container>
          <Container row>
            <Select
              size="large"
              placeholder="Large"
              prefix={<RiArrowUpCircleLine />}
              suffix={<RiArrowUpCircleLine />}
            />
          </Container>
        </Container>

        <p>disabled</p>
        <Container row>
          <Select placeholder="Disabled with placeholder" disabled />
        </Container>

        <p>prefix and suffix disabled</p>
        <Container row>
          <Select
            placeholder="Default"
            prefix={<RiArrowUpCircleLine />}
            disabled
          />
        </Container>

        <p>other</p>
        <Container row>
          <Select placeholder="With label" label="My label" />
        </Container>
      </Container>
    </>
  );
};

export default SelectPage;
