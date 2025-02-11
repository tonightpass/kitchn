import showcases from "data/showcases";
import { Container, Text } from "kitchn";

import ShowcaseList from "./list";

const Showcase: React.FC = () => {
  return (
    <Container id={"showcase"} pt={"extraLarge"} section>
      <Text transform={"uppercase"} weight={"bold"} align={"center"} h2>
        {"Trusted by teams"}{" "}
        <Text transform={"uppercase"} weight={"bold"} accent={"primary"} span>
          {"around the world\r"}
        </Text>
      </Text>
      <Container mt={"large"}>
        <ShowcaseList companies={showcases} />
        <ShowcaseList companies={showcases} reverse />
      </Container>
    </Container>
  );
};

export default Showcase;
