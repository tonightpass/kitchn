import kitchn, { Container, Text } from "@tonightpass/kitchn";

const Features = () => {
  return (
    <Container id={"features"} py={"extraLarge"} align={"center"} section>
      <Text transform={"uppercase"} weight={"bold"} align={"center"} h3>
        {"All features"}{" "}
        <Text transform={"uppercase"} weight={"bold"} accent={"primary"} span>
          {"Kitchn contains\r"}
        </Text>
      </Text>
      <Text
        size={"medium"}
        mt={"normal"}
        weight={"medium"}
        align={"center"}
        color={"light"}
      >
        {
          "Discover all of them. Say bye to wasted time and hello to fresh design.\r"
        }
      </Text>
      <Container mt={"large"} w={"100%"} gap={"normal"}>
        <Container direction={["column", "column", "row"]} gap={"normal"}>
          <Container flex={1} gap={"normal"}>
            <FeatureContainer flex={1} minH={200} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                {"Accessible\r"}
              </Text>
              <Text mt={"small"} color={"lighter"}>
                {
                  "Kitchn strictly follows WAI-ARIA standards for all components.\r"
                }
              </Text>
            </FeatureContainer>
            <FeatureContainer flex={1} minH={100} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                {"Responsive support\r"}
              </Text>
              <Text mt={"small"} color={"lighter"}>
                {"Build simple web apps with our simple responsive system.\r"}
              </Text>
            </FeatureContainer>
          </Container>
          <Container flex={1} gap={"normal"}>
            <FeatureContainer flex={1} minH={100} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                {"Themeable\r"}
              </Text>
              <Text mt={"small"} color={"lighter"}>
                {
                  "Customize any part of our components to match your design needs.\r"
                }
              </Text>
            </FeatureContainer>
            <FeatureContainer flex={1} minH={200} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                {"All platform support\r"}
              </Text>
              <Text mt={"small"} color={"lighter"}>
                {"Whether you use React, React Native or a framework react,\r"}
                {"Kitchn is compatible with all platforms.\r"}
              </Text>
            </FeatureContainer>
          </Container>
          <Container flex={1} gap={"normal"}>
            <FeatureContainer flex={1} minH={200} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                {"Active Community\r"}
              </Text>
              <Text mt={"small"} color={"lighter"}>
                {
                  "We are a team of active maintainers ready to help you whenever\r"
                }
                {"you need, and using it for our own products.\r"}
              </Text>
            </FeatureContainer>
            <FeatureContainer flex={1} minH={100} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                {"Reusable hooks\r"}
              </Text>
              <Text mt={"small"} color={"lighter"}>
                {"Lots of useful hooks to use in your applications.\r"}
              </Text>
            </FeatureContainer>
          </Container>
        </Container>
        <FeatureContainer p={"medium"}>
          <Text size={"large"} weight={"bold"}>
            {"Developer experience\r"}
          </Text>
          <Text mt={"small"} color={"lighter"}>
            {
              "Guaranteed to boost your productivity when building your mobile app\r"
            }
            {"or website.\r"}
          </Text>
        </FeatureContainer>
        <Container direction={["column", "row", "row"]} gap={"normal"}>
          <FeatureContainer flex={1} p={"medium"}>
            <Text size={"large"} weight={"bold"}>
              {"Light & Dark support\r"}
            </Text>
            <Text mt={"small"} color={"lighter"}>
              {
                "Kitchn strictly follows WAI-ARIA standards for all components.\r"
              }
            </Text>
          </FeatureContainer>
          <FeatureContainer flex={1} p={"medium"}>
            <Text size={"large"} weight={"bold"}>
              {"Stylable\r"}
            </Text>
            <Text mt={"small"} color={"lighter"}>
              {
                "Easy to redesign with your standard thanks to styled components\r"
              }
              {"already implemented.\r"}
            </Text>
          </FeatureContainer>
        </Container>
      </Container>
    </Container>
  );
};

const FeatureContainer = kitchn(Container)`
  border-radius: ${({ theme }) => theme.radius.square};
  background-color: ${({ theme }) => theme.colors.layout.darker};

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    
  }
`;

export default Features;
