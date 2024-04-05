import { Button, Container, Progress, Text, useTheme } from "kitchn";
import { NextPage } from "next";
import React from "react";

const ProgressPage: NextPage = () => {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const { theme } = useTheme();

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
          <Progress value={30} />
        </Container>

        <Container gap={5}>
          <Text>{"custom max"}</Text>
          <Progress value={30} max={40} />
        </Container>

        <Container gap={5}>
          <Text>{"dynamic colors"}</Text>
          <Progress
            value={value1}
            colors={{
              0: theme.colors.accent.danger,
              25: theme.colors.accent.warning,
              50: theme.colors.accent.success,
              75: theme.colors.accent.info,
              100: theme.colors.accent.primary,
            }}
          />

          <Container gap={5} row>
            <Button type={"dark"} onClick={() => setValue1(value1 - 10)}>
              {"-\r"}
            </Button>
            <Button type={"dark"} onClick={() => setValue1(value1 + 10)}>
              {"+\r"}
            </Button>
            <Button type={"dark"} onClick={() => setValue1(0)}>
              {"reset\r"}
            </Button>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>{"states"}</Text>
          <Progress
            value={value2}
            colors={{
              0: theme.colors.accent.danger,
              25: theme.colors.accent.warning,
              50: theme.colors.accent.success,
              75: theme.colors.accent.info,
              100: theme.colors.accent.primary,
            }}
            states={{
              0: "Your package is in our hands",
              25: "It is in our network",
              50: "Your package has arrived at its delivery site",
              75: "We are preparing your package for delivery",
              100: "Your package has been delivered",
            }}
          />

          <Container gap={5} row>
            <Button type={"dark"} onClick={() => setValue2(value2 - 25)}>
              {"-\r"}
            </Button>
            <Button type={"dark"} onClick={() => setValue2(value2 + 25)}>
              {"+\r"}
            </Button>
            <Button type={"dark"} onClick={() => setValue2(0)}>
              {"reset\r"}
            </Button>
          </Container>
        </Container>

        <Container gap={5}>
          <Text>{"states"}</Text>
          <Progress
            value={value3}
            colors={{
              0: theme.colors.accent.danger,
              1: theme.colors.accent.warning,
              2: theme.colors.accent.success,
              3: theme.colors.accent.info,
              4: theme.colors.accent.primary,
            }}
            states={{
              0: "Your package is in our hands",
              1: "It is in our network",
              2: "Your package has arrived at its delivery site",
              3: "We are preparing your package for delivery",
              4: "Your package has been delivered",
            }}
            max={4}
            title={false}
            checkpointStyle={"bar"}
          />

          <Container gap={5} row>
            <Button type={"dark"} onClick={() => setValue3(value3 - 1)}>
              {"-\r"}
            </Button>
            <Button type={"dark"} onClick={() => setValue3(value3 + 1)}>
              {"+\r"}
            </Button>
            <Button type={"dark"} onClick={() => setValue3(0)}>
              {"reset\r"}
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default ProgressPage;
