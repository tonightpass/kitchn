import { Container, Text } from "kitchn";
import {
  KitchnMark,
  KitchnWordmark,
  TonightPassMark,
  TonightPassWordmark,
} from "kitchn/logos";
import { NextPage } from "next";

const LogosPage: NextPage = () => {
  return (
    <Container gap={"small"} align={"center"}>
      <Container gap={"small"} align={"center"}>
        <Text>{"tonightpass mark"}</Text>
        <Container gap={"small"} row>
          <TonightPassMark height={30} />
          <TonightPassMark height={30} fill={"#FFFFFF"} />
        </Container>
      </Container>

      <Container gap={"small"} align={"center"}>
        <Text>{"tonightpass wordmark"}</Text>
        <Container gap={"small"} row>
          <TonightPassWordmark height={30} />
          <TonightPassWordmark height={30} fill={"#FFFFFF"} />
        </Container>
      </Container>

      <Container gap={"small"} align={"center"}>
        <Text>{"kitchn mark"}</Text>
        <Container gap={"small"} row>
          <KitchnMark height={30} />
          <KitchnMark height={30} fill={"#FFFFFF"} />
        </Container>
      </Container>

      <Container gap={"small"} align={"center"}>
        <Text>{"kitchn wordmark"}</Text>
        <Container gap={"small"} row>
          <KitchnWordmark height={30} />
          <KitchnWordmark height={30} fill={"#FFFFFF"} />
        </Container>
      </Container>
    </Container>
  );
};

export default LogosPage;
