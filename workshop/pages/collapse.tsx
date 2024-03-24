import { Collapse, Text, Container } from "@tonightpass/kitchn";
import { NextPage } from "next";

const CollapsePage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Text>{"default"}</Text>
        <Container gap={10}>
          <Collapse title={"Question A"}>
            <Text>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r"
              }
              {
                "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r"
              }
              {
                "enim ad minim veniam, quis nostrud exercitation ullamco laboris\r"
              }
              {"nisi ut aliquip ex ea commodo consequat.\r"}
            </Text>
          </Collapse>
          <Collapse title={"Question B"}>
            <Text>
              {
                "Duis aute irure dolor in reprehenderit in voluptate velit esse\r"
              }
              {"cillum dolore eu fugiat nulla pariatur.\r"}
            </Text>
          </Collapse>
        </Container>
        <Text>{"expanded"}</Text>
        <Container gap={10}>
          <Collapse title={"Question A"} defaultExpanded>
            <Text>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r"
              }
              {
                "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r"
              }
              {
                "enim ad minim veniam, quis nostrud exercitation ullamco laboris\r"
              }
              {"nisi ut aliquip ex ea commodo consequat.\r"}
            </Text>
          </Collapse>
          <Collapse title={"Question B"}>
            <Text>
              {
                "Duis aute irure dolor in reprehenderit in voluptate velit esse\r"
              }
              {"cillum dolore eu fugiat nulla pariatur.\r"}
            </Text>
          </Collapse>
        </Container>
        <Text>{"subtitle"}</Text>
        <Container gap={10}>
          <Collapse
            title={"Question A"}
            subtitle={"More description about Question A"}
          >
            <Text>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r"
              }
              {
                "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r"
              }
              {
                "enim ad minim veniam, quis nostrud exercitation ullamco laboris\r"
              }
              {"nisi ut aliquip ex ea commodo consequat.\r"}
            </Text>
          </Collapse>
          <Collapse title={"Question B"}>
            <Text>
              {
                "Duis aute irure dolor in reprehenderit in voluptate velit esse\r"
              }
              {"cillum dolore eu fugiat nulla pariatur.\r"}
            </Text>
          </Collapse>
        </Container>
        <Text>{"card"}</Text>
        <Container gap={10}>
          <Collapse title={"Question A"} card>
            <Text>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r"
              }
              {
                "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r"
              }
              {
                "enim ad minim veniam, quis nostrud exercitation ullamco laboris\r"
              }
              {"nisi ut aliquip ex ea commodo consequat.\r"}
            </Text>
          </Collapse>
        </Container>
        <Text>{"small"}</Text>
        <Container gap={10}>
          <Collapse title={"Question A"} size={"small"}>
            <Text>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r"
              }
              {
                "eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\r"
              }
              {
                "enim ad minim veniam, quis nostrud exercitation ullamco laboris\r"
              }
              {"nisi ut aliquip ex ea commodo consequat.\r"}
            </Text>
          </Collapse>
        </Container>
      </Container>
    </>
  );
};

export default CollapsePage;
