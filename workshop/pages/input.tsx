import { Container, Text, Input, ControlledInput } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { RiArrowUpCircleLine } from "react-icons/ri";

type FormData = {
  name: string;
};

const InputPage: NextPage = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

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
          <Text>{"default"}</Text>
          <Input placeholder={"Placeholder..."} />
        </Container>

        <Container gap={5}>
          <Text>{"sizes"}</Text>
          <Container row>
            <Container align={"flex-start"}>
              <Input size={"small"} placeholder={"Small"} />
            </Container>

            <Container align={"flex-start"}>
              <Input placeholder={"Default"} />
            </Container>

            <Container align={"flex-start"}>
              <Input size={"large"} placeholder={"Large"} />
            </Container>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>{"sizes, prefix, and suffix"}</Text>
          <Container gap={5} row>
            <Container align={"flex-start"}>
              <Input
                size={"small"}
                placeholder={"Small"}
                prefix={<RiArrowUpCircleLine />}
                suffix={<RiArrowUpCircleLine />}
              />
            </Container>

            <Container align={"flex-start"}>
              <Input
                placeholder={"Default"}
                prefix={<RiArrowUpCircleLine />}
                suffix={<RiArrowUpCircleLine />}
              />
            </Container>

            <Container align={"flex-start"}>
              <Input
                size={"large"}
                placeholder={"Large"}
                prefix={<RiArrowUpCircleLine />}
                suffix={<RiArrowUpCircleLine />}
              />
            </Container>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>{"disabled"}</Text>
          <Container row gap={5}>
            <Container>
              <Input placeholder={"Disabled with placeholder"} disabled />
            </Container>

            <Container>
              <Input value={"Disabled with value"} disabled />
            </Container>
          </Container>
        </Container>

        <Container gap={5} align={"flex-start"}>
          <Text>{"prefix and suffix"}</Text>
          <Container>
            <Input placeholder={"Default"} prefix={<RiArrowUpCircleLine />} />
          </Container>

          <Container>
            <Input placeholder={"Default"} suffix={<RiArrowUpCircleLine />} />
          </Container>

          <Container>
            <Input
              placeholder={"Default"}
              prefix={"https://"}
              suffix={".com"}
            />
          </Container>

          <Container>
            <Input
              placeholder={"Default"}
              prefix={<RiArrowUpCircleLine />}
              suffix={<RiArrowUpCircleLine />}
              prefixStyling={false}
              suffixStyling={false}
            />
          </Container>

          <Container>
            <Input
              placeholder={"Default"}
              prefix={"kitchen/"}
              suffix={<RiArrowUpCircleLine />}
              suffixStyling={false}
              suffixContainer={false}
            />
          </Container>
        </Container>

        <Container gap={5} align={"flex-start"}>
          <Text>{"prefix and suffix disabled"}</Text>
          <Container>
            <Input
              placeholder={"Default"}
              prefix={<RiArrowUpCircleLine />}
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder={"Default"}
              suffix={<RiArrowUpCircleLine />}
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder={"Default"}
              prefix={"https://"}
              suffix={".com"}
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder={"Default"}
              prefix={<RiArrowUpCircleLine />}
              suffix={<RiArrowUpCircleLine />}
              prefixStyling={false}
              suffixStyling={false}
              disabled
            />
          </Container>

          <Container>
            <Input
              placeholder={"Default"}
              prefix={"kitchen/"}
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

        <Container gap={"tiny"}>
          <Text>{"clearable"}</Text>
          <Container gap={"tiny"} align={"flex-start"}>
            <Container>
              <Input
                clearable
                placeholder={"Enter some text..."}
                value={"hey"}
              />
            </Container>

            <Container>
              <Input
                clearable
                placeholder={"Really really long placeholder text..."}
              />
            </Container>

            <Container>
              <Input clearable disabled placeholder={"Disabled"} />
            </Container>

            <Container>
              <Input clearable disabled value={"Disabled with value"} />
            </Container>

            <Container>
              <Input clearable placeholder={"Custom width"} width={300} />
            </Container>

            <Container>
              <Input
                clearable
                prefix={"https://"}
                placeholder={"tonightpass.com"}
              />
            </Container>

            <Container>
              <Input
                clearable
                placeholder={"Enter some text..."}
                error={"A valid email address is required."}
              />
            </Container>
          </Container>
        </Container>
        <Container gap={"tiny"}>
          <Text>{"types"}</Text>
          <Container gap={"tiny"} row>
            <Container>
              <Input placeholder={"Default"} type={"danger"} />
            </Container>

            <Container>
              <Input placeholder={"Default"} type={"warning"} />
            </Container>

            <Container>
              <Input placeholder={"Default"} type={"success"} />
            </Container>
          </Container>
        </Container>

        <Container gap={"tiny"}>
          <Text>{"error"}</Text>
          <Container gap={"tiny"} align={"flex-start"}>
            <Container>
              <Input
                placeholder={"error@gmail.com"}
                error={"A valid email address is required."}
              />
            </Container>

            <Container>
              <Input
                width={200}
                placeholder={"wrapping-error@gmail.com"}
                error={
                  "A valid email address is required so that we can verify your GitHub installation. In the event that you cannot provide a valid email address, please contact support."
                }
              />
            </Container>

            <Container>
              <Input
                size={"small"}
                placeholder={"small-error@gmail.com"}
                error={
                  "A valid email address is required so that we can verify your GitHub installation. In the event that you cannot provide a valid email address, please contact support."
                }
              />
            </Container>

            <Container>
              <Input
                placeholder={"long-error@gmail.com"}
                error={
                  "A valid email address is required so that we can verify your GitHub installation. In the event that you cannot provide a valid email address, please contact support."
                }
              />
            </Container>

            <Container>
              <Input
                size={"large"}
                placeholder={"large-error@gmail.com"}
                error={
                  "A valid email address is required so that we can verify your GitHub installation. In the event that you cannot provide a valid email address, please contact support."
                }
              />
            </Container>
          </Container>
        </Container>

        <Container gap={"tiny"}>
          <Text>{"label"}</Text>
          <Container>
            <Input placeholder={"With label"} label={"My label"} />
          </Container>
        </Container>

        <Container gap={5}>
          <Text>{"controlled"}</Text>
          <Container row>
            <Container align={"flex-start"}>
              <form onSubmit={onSubmit}>
                <ControlledInput name={"name"} control={control} />
              </form>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default InputPage;
