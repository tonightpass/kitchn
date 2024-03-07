import { Fieldset, Button, Text, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const FieldsetPage: NextPage = () => {
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
          <Fieldset.Container>
            <Fieldset.Content>
              <Fieldset.Title>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer>
              <Fieldset.FooterStatus>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button size={"small"} type={"light"}>
                  {"Submit"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>

        <Text>{"tabs"}</Text>
        <Container gap={10}>
          <Fieldset.Tabs tabs={["One", "Two"]}>
            <Fieldset.Container>
              <Fieldset.Content>
                <Fieldset.Title>
                  {"The Evil Rabbit Jumped over the Fence"}
                </Fieldset.Title>
                <Fieldset.Subtitle>
                  {"The Evil Rabbit Jumped over the Fence"}
                </Fieldset.Subtitle>
              </Fieldset.Content>
              <Fieldset.Footer>
                <Fieldset.FooterStatus accent={"light"}>
                  {"The Evil Rabbit Jumped over the Fence"}
                </Fieldset.FooterStatus>
                <Fieldset.FooterActions>
                  <Button type={"light"} size={"small"}>
                    {"Action"}
                  </Button>
                </Fieldset.FooterActions>
              </Fieldset.Footer>
            </Fieldset.Container>
            <Fieldset.Container>
              <Fieldset.Content>
                <Fieldset.Title>
                  {"The Fence Jumped over The Evil Rabbit"}
                </Fieldset.Title>
                <Fieldset.Subtitle>
                  {"The Fence Jumped over The Evil Rabbit"}
                </Fieldset.Subtitle>
              </Fieldset.Content>
              <Fieldset.Footer>
                <Fieldset.FooterStatus accent={"light"}>
                  {"The Fence Jumped over The Evil Rabbit"}
                </Fieldset.FooterStatus>
                <Fieldset.FooterActions>
                  <Button type={"light"} size={"small"}>
                    {"Action"}
                  </Button>
                </Fieldset.FooterActions>
              </Fieldset.Footer>
            </Fieldset.Container>
          </Fieldset.Tabs>
        </Container>

        <Text>{"error"}</Text>
        <Container gap={10}>
          <Fieldset.Container>
            <Fieldset.Content>
              <Fieldset.Title>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer>
              <Fieldset.FooterStatus accent={"danger"}>
                {"An error has occurred."}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button type={"light"} size={"small"} disabled>
                  {"Action"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>

        <Text>{"disabled"}</Text>
        <Container gap={10}>
          <Fieldset.Container disabled>
            <Fieldset.Content>
              <Fieldset.Title color={"darker"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle color={"darker"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer disabled>
              <Fieldset.FooterStatus color={"darker"}>
                {"An error has occurred."}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button type={"light"} size={"small"} disabled>
                  {"Action"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>

        <Text>{"disabled content only"}</Text>
        <Container gap={10}>
          <Fieldset.Container>
            <Fieldset.Content disabled>
              <Fieldset.Title color={"darker"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle color={"darker"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer>
              <Fieldset.FooterStatus accent={"light"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button type={"light"} size={"small"}>
                  {"Action"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>

        <Text>{"disabled footer only"}</Text>
        <Container gap={10}>
          <Fieldset.Container>
            <Fieldset.Content>
              <Fieldset.Title>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer disabled>
              <Fieldset.FooterStatus color={"darker"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button type={"light"} size={"small"} disabled>
                  {"Action"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>

        <Text>{"highlight footer"}</Text>
        <Container gap={10}>
          <Fieldset.Container>
            <Fieldset.Content disabled>
              <Fieldset.Title color={"darker"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle color={"darker"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer highlight>
              <Fieldset.FooterStatus color={"light"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button type={"light"} size={"small"}>
                  {"Action"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>

        <Text>{"error"}</Text>
        <Container gap={10}>
          <Fieldset.Container type={"danger"}>
            <Fieldset.Content>
              <Fieldset.Title>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer>
              <Fieldset.FooterStatus accent={"light"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button type={"danger"} size={"small"}>
                  {"Action"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>

        <Text>{"warning"}</Text>
        <Container gap={10}>
          <Fieldset.Container type={"warning"}>
            <Fieldset.Content>
              <Fieldset.Title>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Title>
              <Fieldset.Subtitle>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.Subtitle>
            </Fieldset.Content>
            <Fieldset.Footer>
              <Fieldset.FooterStatus accent={"light"}>
                {"The Evil Rabbit Jumped over the Fence"}
              </Fieldset.FooterStatus>
              <Fieldset.FooterActions>
                <Button type={"warning"} size={"small"}>
                  {"Action"}
                </Button>
              </Fieldset.FooterActions>
            </Fieldset.Footer>
          </Fieldset.Container>
        </Container>
      </Container>
    </>
  );
};

export default FieldsetPage;
