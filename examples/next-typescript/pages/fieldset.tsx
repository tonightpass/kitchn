import {
  Fieldset,
  Content,
  Title,
  Subtitle,
  Footer,
  Status,
  Action,
  Button,
  Tabs,
  Text,
  Container,
} from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const FieldsetPage: NextPage = () => {
  const [selected, setSelected] = React.useState("apple");
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Text>default</Text>
        <Container gap={10}>
          <Fieldset>
            <Content>
              <Title>Title</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>
                The Evil Rabbit Jumped over the Fence
              </Status>
              <Action>
                <Button size={"small"}>Action</Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>

        <Text>tabs</Text>
        <Container gap={10}>
          <Fieldset>
            <Tabs
              tabs={[
                { title: "One", value: "one" },
                { title: "Two", value: "two" },
              ]}
              selected={selected}
              setSelected={setSelected}
            />
            <Content>
              <Title>The Evil Rabbit Jumped over the Fence</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>
                The Evil Rabbit Jumped over the Fence
              </Status>
              <Action>
                <Button size={"small"}>Action</Button>
              </Action>
            </Footer>
          </Fieldset>
          <Fieldset>
            <Content>
              <Title>The Fence Jumped over The Evil Rabbit</Title>
              <Subtitle>The Fence Jumped over The Evil Rabbit</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>Status message goes here</Status>
              <Action>
                <Button size={"small"}>Action</Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>

        <Text>error</Text>
        <Container gap={10}>
          <Fieldset>
            <Content>
              <Title>The Evil Rabbit Jumped over the Fence</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>An error has occurred.</Status>
              <Action>
                <Button size={"small"} disabled>
                  Action
                </Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>

        <Text>disabled</Text>
        <Container gap={10}>
          <Fieldset>
            <Content>
              <Title>The Evil Rabbit Jumped over the Fence</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>An error has occurred.</Status>
              <Action>
                <Button size={"small"} disabled>
                  Action
                </Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>

        <Text>disabled content only</Text>
        <Container gap={10}>
          <Fieldset>
            <Content>
              <Title>The Evil Rabbit Jumped over the Fence</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>
                The Evil Rabbit Jumped over the Fence
              </Status>
              <Action>
                <Button size={"small"}>Action</Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>

        <Text>disabled footer only</Text>
        <Container gap={10}>
          <Fieldset>
            <Content>
              <Title>The Evil Rabbit Jumped over the Fence</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>
                The Evil Rabbit Jumped over the Fence
              </Status>
              <Action>
                <Button size={"small"}>Action</Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>

        <Text>highlight footer</Text>
        <Container gap={10}>
          <Fieldset>
            <Content>
              <Title>The Evil Rabbit Jumped over the Fence</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>
                The Evil Rabbit Jumped over the Fence
              </Status>
              <Action>
                <Button size={"small"}>Action</Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>

        <Text>error</Text>
        <Container gap={10}>
          <Fieldset>
            <Content>
              <Title>The Evil Rabbit Jumped over the Fence</Title>
              <Subtitle>The Evil Rabbit Jumped over the Fence</Subtitle>
            </Content>
            <Footer>
              <Status size={"small"}>
                The Evil Rabbit Jumped over the Fence
              </Status>
              <Action>
                <Button size={"small"}>Action</Button>
              </Action>
            </Footer>
          </Fieldset>
        </Container>
      </Container>
    </>
  );
};

export default FieldsetPage;
