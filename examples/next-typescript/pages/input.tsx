import { Container, Text, Input } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import { RiArrowUpCircleLine } from "react-icons/ri";

const ProgressPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Container gap={5}>
          <Text>default</Text>
          <Input placeholder={"Placeholder..."} />
        </Container>

        <Container gap={5}>
          <Text>sizes</Text>
          <Container row>
            <Container align="flex-start">
              <Input size="small" placeholder="Small" />
            </Container>

            <Container align="flex-start">
              <Input placeholder="Default" />
            </Container>

            <Container align="flex-start">
              <Input size="large" placeholder="Large" />
            </Container>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>sizes, prefix, and suffix</Text>
          <Container gap={5} row>
            <Container align="flex-start">
              <Input
                size="small"
                placeholder="Small"
                prefix={<RiArrowUpCircleLine />}
                suffix={<RiArrowUpCircleLine />}
              />
            </Container>

            <Container align="flex-start">
              <Input
                placeholder="Default"
                prefix={<RiArrowUpCircleLine />}
                suffix={<RiArrowUpCircleLine />}
              />
            </Container>

            <Container align="flex-start">
              <Input
                size="large"
                placeholder="Large"
                prefix={<RiArrowUpCircleLine />}
                suffix={<RiArrowUpCircleLine />}
              />
            </Container>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>disabled</Text>
          <Container row gap={5}>
            <Container>
              <Input placeholder="Disabled with placeholder" disabled />
            </Container>

            <Container>
              <Input value="Disabled with value" disabled />
            </Container>
          </Container>
        </Container>

        <Container gap={5} align="flex-start">
          <Text>prefix and suffix</Text>
          <Container>
            <Input placeholder="Default" prefix={<RiArrowUpCircleLine />} />
          </Container>

          <Container>
            <Input placeholder="Default" suffix={<RiArrowUpCircleLine />} />
          </Container>

          <Container>
            <Input placeholder="Default" prefix="https://" suffix=".com" />
          </Container>

          <Container>
            <Input
              placeholder="Default"
              prefix={<RiArrowUpCircleLine />}
              suffix={<RiArrowUpCircleLine />}
              prefixStyling={false}
              suffixStyling={false}
            />
          </Container>

          <Container>
            <Input
              placeholder="Default"
              prefix="kitchen/"
              suffix={<RiArrowUpCircleLine />}
              suffixStyling={false}
              suffixContainer={false}
            />
          </Container>
        </Container>

        <Container gap={5} align="flex-start">
          <Text>prefix and suffix</Text>
          <Container>
            <Input
              placeholder="Default"
              prefix={<RiArrowUpCircleLine />}
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder="Default"
              suffix={<RiArrowUpCircleLine />}
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder="Default"
              prefix="https://"
              suffix=".com"
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder="Default"
              prefix={<RiArrowUpCircleLine />}
              suffix={<RiArrowUpCircleLine />}
              prefixStyling={false}
              suffixStyling={false}
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder="Default"
              prefix="vercel/"
              suffix={
                <span onClick={() => alert("hey")}>
                  <RiArrowUpCircleLine />
                </span>
              }
              suffixStyling={false}
              suffixContainer={false}
              disabled
            />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ProgressPage;
