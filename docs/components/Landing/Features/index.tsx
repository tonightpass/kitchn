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
            <BlueContainer minH={200}>Accessible</BlueContainer>
            <BlueContainer minH={100}>Responsive support</BlueContainer>
          </Container>
          <Container gap={"normal"}>
            <BlueContainer minH={100}>Themeable</BlueContainer>
            <BlueContainer minH={200}>All platform support</BlueContainer>
          </Container>
          <Container gap={"normal"}>
            <BlueContainer minH={200}>Active Community</BlueContainer>
            <BlueContainer minH={100}>Reusable hooks</BlueContainer>
          </Container>
        </Container>
        <BlueContainer>Developer experience</BlueContainer>
        <Container direction={["column", "row"]} gap={"normal"}>
          <BlueContainer>Light & Dark support</BlueContainer>
          <BlueContainer>Stylable</BlueContainer>
        </Container>
      </Container>
    </Container>
  );
};

const BlueContainer = kitchen(Container)`
  background: ${({ theme }) => theme.colors.accent.info};
  color: ${({ theme }) => theme.colors.accent.light};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent.light};
`;

export default Features;
