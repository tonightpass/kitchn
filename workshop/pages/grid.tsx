import { NextPage } from "next";
import kitchen, { Container, Text } from "@tonightpass/kitchen";

const GridPage: NextPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "700px",
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <p>rows</p>
          <Container>
            <TestContainer>
              <Text size={"small"}>Container</Text>
            </TestContainer>
            <TestContainer>
              <Text size={"small"}>Container</Text>
            </TestContainer>
          </Container>

          <p>columns</p>
          <Container row>
            <TestContainer>
              <Text size={"small"}>Container</Text>
            </TestContainer>
            <TestContainer>
              <Text size={"small"}>Container</Text>
            </TestContainer>
            <TestContainer>
              <Text size={"small"}>Container</Text>
            </TestContainer>
          </Container>

          <p>flexboxes</p>
          <Container row>
            <TestContainer flex={1}>
              <Text size={"small"}>Flex = 1</Text>
            </TestContainer>
            <TestContainer flex={2}>
              <Text size={"small"}>Flex = 2</Text>
            </TestContainer>
            <TestContainer flex={3}>
              <Text size={"small"}>Flex = 3</Text>
            </TestContainer>
            <TestContainer flex={4}>
              <Text size={"small"}>Flex = 4</Text>
            </TestContainer>
          </Container>

          <p>mix</p>
          <Container row>
            <TestContainer>
              <Text size={"small"}>Container</Text>
            </TestContainer>
            <TestContainer flex={2}>
              <Text size={"small"}>Container</Text>
            </TestContainer>
            <TestContainer flex={3}>
              <TestContainer>
                <Text size={"small"}>Container</Text>
              </TestContainer>
              <TestContainer>
                <Text size={"small"}>Container</Text>
              </TestContainer>
            </TestContainer>
          </Container>

          <p>alignments</p>
          <Container>
            <Container row>
              <TestContainer flex={2} style={{ height: 100 }}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
              <TestContainer style={{ alignSelf: "flex-start" }}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
              <TestContainer style={{ alignSelf: "center" }}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
              <TestContainer style={{ alignSelf: "flex-end" }}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
            </Container>
            <Container>
              <TestContainer align={"center"}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
              <TestContainer style={{ alignSelf: "flex-start" }}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
              <TestContainer style={{ alignSelf: "center" }}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
              <TestContainer style={{ alignSelf: "flex-end" }}>
                <Text size={"small"}>Container</Text>
              </TestContainer>
            </Container>
          </Container>

          <p>responsive</p>
          <Container row direction={["column", "row", "column"]}>
            <TestContainer>
              <Text size={"small"}>Container 1</Text>
            </TestContainer>
            <TestContainer>
              <Text size={"small"}>Container 2</Text>
            </TestContainer>
          </Container>

          <p>gaps</p>
          <Container row gap={10}>
            <TestContainer>
              <Text size={"small"}>Container 1</Text>
            </TestContainer>
            <TestContainer>
              <Text size={"small"}>Container 2</Text>
            </TestContainer>
            <Container gap={20}>
              <TestContainer>
                <Text size={"small"}>Container 3</Text>
              </TestContainer>
              <TestContainer>
                <Text size={"small"}>Container 4</Text>
              </TestContainer>
            </Container>
          </Container>
        </div>
      </div>
    </>
  );
};

const TestContainer = kitchen(Container)`
  background: blue;
  color: white;
  padding: 10px;
  border: 1px solid white;
`;

export default GridPage;
