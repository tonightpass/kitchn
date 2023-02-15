import kitchen, { Container, Text } from "@tonightpass/kitchen";

const Features = () => {
  return (
    <Container id={"features"} py={"extraLarge"} align={"center"} section>
      <Text transform={"uppercase"} weight={"bold"} align={"center"} h3>
        All features{" "}
        <Text transform={"uppercase"} weight={"bold"} accent={"primary"} span>
          Kitchen contains
        </Text>
      </Text>
      <Text
        size={"medium"}
        mt={"normal"}
        weight={"medium"}
        align={"center"}
        color={"darker"}
      >
        Discover all of them. Say bye to wasted time and hello to fresh design.
      </Text>
      <Container mt={"large"} w={"100%"} gap={"normal"}>
        <Container direction={["column", "column", "row"]} gap={"normal"}>
          <Container gap={"normal"}>
            <FeatureContainer minH={200} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                Accessible
              </Text>
              <Text mt={"small"} color={"lighter"}>
                Kitchen strictly follows WAI-ARIA standards for all components.
              </Text>
            </FeatureContainer>
            <FeatureContainer minH={100} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                Responsive support
              </Text>
              <Text mt={"small"} color={"lighter"}>
                Build simple web apps with our simple responsive system.
              </Text>
            </FeatureContainer>
          </Container>
          <Container gap={"normal"}>
            <FeatureContainer minH={100} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                Themeable
              </Text>
              <Text mt={"small"} color={"lighter"}>
                Customize any part of our components to match your design needs.
              </Text>
            </FeatureContainer>
            <FeatureContainer minH={200} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                All platform support
              </Text>
              <Text mt={"small"} color={"lighter"}>
                Whether you use React, React Native or a framework react,
                Kitchen is compatible with all platforms.
              </Text>
            </FeatureContainer>
          </Container>
          <Container gap={"normal"}>
            <FeatureContainer minH={200} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                Active Community
              </Text>
              <Text mt={"small"} color={"lighter"}>
                We are a team of active maintainers ready to help you whenever
                you need, and using it for our own products.
              </Text>
            </FeatureContainer>
            <FeatureContainer minH={100} p={"medium"}>
              <Text size={"large"} weight={"bold"}>
                Reusable hooks
              </Text>
              <Text mt={"small"} color={"lighter"}>
                Lots of useful hooks to use in your applications.
              </Text>
            </FeatureContainer>
          </Container>
        </Container>
        <FeatureContainer p={"medium"}>
          <Text size={"large"} weight={"bold"}>
            Developer experience
          </Text>
          <Text mt={"small"} color={"lighter"}>
            Guaranteed to boost your productivity when building your mobile app
            or website.
          </Text>
        </FeatureContainer>
        <Container direction={["column", "row"]} gap={"normal"}>
          <FeatureContainer p={"medium"}>
            <Text size={"large"} weight={"bold"}>
              Light & Dark support
            </Text>
            <Text mt={"small"} color={"lighter"}>
              Kitchen strictly follows WAI-ARIA standards for all components.
            </Text>
          </FeatureContainer>
          <FeatureContainer p={"medium"}>
            <Text size={"large"} weight={"bold"}>
              Stylable
            </Text>
            <Text mt={"small"} color={"lighter"}>
              Easy to redesign with your standard thanks to styled components
              already implemented.
            </Text>
          </FeatureContainer>
        </Container>
      </Container>
    </Container>
  );
};

const FeatureContainer = kitchen(Container)`
  background-color: ${({ theme }) => theme.colors.layout.darker};

  @media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    
  }
`;

export default Features;
