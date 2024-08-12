import { Container, Text } from "kitchn";
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
      <Container align={"center"}>
        <Container mt={"normal"} align={"center"}>
          <Text align={"center"} size={"title"} weight={"bold"} h1>
            {"blog."}
          </Text>
          <Balancer>
            <Text
              size={"medium"}
              mt={"normal"}
              weight={"medium"}
              align={"center"}
              color={"light"}
            >
              {"Explore the latest articles, tutorials, and updates on Kitchn."}
            </Text>
          </Balancer>
        </Container>
      </Container>
    </Container>
  );
};

export default Featured;
