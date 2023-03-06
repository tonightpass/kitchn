import { Container, Text } from "@tonightpass/kitchen";
import ShowcaseList from "./List";

const Showcase: React.FC = () => {
  return (
    <Container id={"showcase"} pt={"extraLarge"} align={"center"} section>
      <Text transform={"uppercase"} weight={"bold"} align={"center"} h3>
        Trusted by teams{" "}
        <Text transform={"uppercase"} weight={"bold"} accent={"primary"} span>
          around the world
        </Text>
      </Text>
      <ShowcaseList />
    </Container>
  );
};

export default Showcase;
