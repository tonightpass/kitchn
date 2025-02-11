import { Button, Container, Link, Text } from "kitchn";
import Balancer from "react-wrap-balancer";

const Featured: React.FC = () => {
  return (
    <Container
      id={"header"}
      maxW={"mobile"}
      mx={"auto"}
      py={"extraLarge"}
      header
    >
      <Container mt={"normal"} align={"center"}>
        <Text align={"center"} size={"title"} weight={"bold"} h1>
          {"built for the best, used by the best."}
        </Text>
        <Balancer>
          <Text
            size={"medium"}
            mt={"normal"}
            weight={"medium"}
            align={"center"}
            color={"light"}
          >
            {
              "Your challenge is our mission. We provide the best tools for the best\r"
            }
            {"developers to build the best products.\r"}
          </Text>
        </Balancer>
      </Container>

      <Container row gap={"normal"} justify={"center"} mt={"large"}>
        <Link href={"https://github.com/tonightpass/kitchn/issues/new"}>
          <Button>{"Share yours"}</Button>
        </Link>
        <Link href={"https://discord.gg/VvvAkPqQ98"}>
          <Button type={"dark"}>{"Get in touch"}</Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Featured;
