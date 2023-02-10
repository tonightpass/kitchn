import { Button, Container, Link, Text } from "@tonightpass/kitchen";

const Featured: React.FC = () => {
  return (
    <Container
      id={"header"}
      maxW={"mobile"}
      mx={"auto"}
      py={"extraLarge"}
      header
    >
      <Container align={"center"}>
        <Text
          align={"center"}
          size={"extraTitle"}
          weight={"black"}
          accent={"primary"}
          h1
        >
          Tonight Pass
        </Text>
        <Text align={"center"} size={"title"} weight={"bold"} h2>
          delicious react styled-components
        </Text>
      </Container>
      <Text
        size={"medium"}
        mt={"normal"}
        weight={"medium"}
        align={"center"}
        color={"darker"}
      >
        Design UI like Tonight Pass in React or React Native with optimized and
        customizable styled-components.
      </Text>
      <Container row gap={"normal"} justify={"center"} mt={"large"}>
        <Button forwardedAs={Link} href={"/docs"}>
          Get started
        </Button>
        <Button
          type={"dark"}
          forwardedAs={Link}
          href={"https://github.com/tonightpass/kitchen"}
        >
          Contribute
        </Button>
      </Container>
    </Container>
  );
};

export default Featured;
