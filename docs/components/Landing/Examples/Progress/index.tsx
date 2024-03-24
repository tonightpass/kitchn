import { Button, Container, Progress, useTheme } from "@tonightpass/kitchn";
import React from "react";

const ProgressExample: React.FC = () => {
  const { theme } = useTheme();
  const [value, setValue] = React.useState(0);

  return (
    <Container gap={"small"} maxW={"laptop"} mx={"auto"} py={"extraLarge"}>
      <Progress
        value={value}
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
      <Container gap={"tiny"} row>
        <Button type={"dark"} onClick={() => setValue(value - 25)}>
          {"-"}
        </Button>
        <Button type={"dark"} onClick={() => setValue(value + 25)}>
          {"+"}
        </Button>
        <Button type={"dark"} onClick={() => setValue(0)}>
          {"reset"}
        </Button>
      </Container>
    </Container>
  );
};

export default ProgressExample;
