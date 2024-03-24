import { Container, Text, Menu, Avatar, Icon } from "@tonightpass/kitchn";
import { NextPage } from "next";
import React from "react";
import { RiAddLine, RiArrowDownSLine, RiCheckLine } from "react-icons/ri";

const MenuPage: NextPage = () => {
  return (
    <Container
      gap={15}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Container gap={"normal"} mt={"extraLarge"}>
        <Text>{"default"}</Text>
        <Container>
          <Menu.Container>
            <Menu.Button>{"Actions"}</Menu.Button>
            <Menu.Content width={200}>
              <Menu.Item onClick={() => alert("One")}>{"One"}</Menu.Item>
              <Menu.Item onClick={() => alert("Two")}>{"Two"}</Menu.Item>
              <Menu.Item onClick={() => alert("Three")}>{"Three"}</Menu.Item>
              <Menu.Item onClick={() => alert("Four")}>{"Four"}</Menu.Item>
            </Menu.Content>
          </Menu.Container>
        </Container>

        <Text>{"disabled items"}</Text>
        <Container>
          <Menu.Container>
            <Menu.Button>{"Actions"}</Menu.Button>
            <Menu.Content width={200}>
              <Menu.Item disabled>{"One"}</Menu.Item>
              <Menu.Item>{"Two"}</Menu.Item>
              <Menu.Item disabled>{"Three"}</Menu.Item>
              <Menu.Item>{"Four"}</Menu.Item>
            </Menu.Content>
          </Menu.Container>
        </Container>

        <Text>{"link items"}</Text>
        <Container>
          <Menu.Container>
            <Menu.Button>{"Links"}</Menu.Button>
            <Menu.Content width={200}>
              <Menu.Link href={"#"}>{"One"}</Menu.Link>
              <Menu.Link href={"#"}>{"Two"}</Menu.Link>
              <Menu.Link href={"#"}>{"Three"}</Menu.Link>
            </Menu.Content>
          </Menu.Container>
        </Container>
      </Container>

      <Text>{"unstyled"}</Text>
      <Container>
        <Menu.Container>
          <Menu.Button unstyled>
            <Avatar text={"Hello world"} />
          </Menu.Button>
          <Menu.Content width={200}>
            <Menu.Item onClick={() => alert("One")}>{"One"}</Menu.Item>
            <Menu.Item onClick={() => alert("Two")}>{"Two"}</Menu.Item>
            <Menu.Item onClick={() => alert("Three")}>{"Three"}</Menu.Item>
            <Menu.Item onClick={() => alert("Four")}>{"Four"}</Menu.Item>
          </Menu.Content>
        </Menu.Container>
      </Container>

      <Text>{"scope switcher"}</Text>
      <Container>
        <Menu.Container>
          <Menu.Button>
            <Icon icon={RiArrowDownSLine} />
          </Menu.Button>
          <Menu.Content width={240}>
            <Menu.Section title={"Personal Account"}>
              <Menu.Link href={"#"}>
                <Container w={"100%"} gap={"small"} align={"center"} row>
                  <Avatar size={22} src={"https://picsum.photos/200/300"} />
                  {"Lucas"}
                </Container>
              </Menu.Link>
            </Menu.Section>

            <Menu.Divider />

            <Menu.Section title={"Teams"}>
              <Menu.Link href={"#"}>
                <Container w={"100%"} gap={"small"} align={"center"} row>
                  <Avatar size={22} src={"https://picsum.photos/200/300"} />
                  {"Acme"}
                </Container>
              </Menu.Link>
              <Menu.Link href={"#"}>
                <Container w={"100%"} gap={"small"} align={"center"} row>
                  <Avatar size={22} src={"https://picsum.photos/200/300"} />
                  {"onRuntime Studio"}
                  <Icon ml={"auto"} icon={RiCheckLine} />
                </Container>
              </Menu.Link>
              <Menu.Link href={"#"}>
                <Container w={"100%"} gap={"small"} align={"center"} row>
                  <Avatar size={22} src={"https://picsum.photos/200/300"} />
                  {"Ibiza Club"}
                </Container>
              </Menu.Link>
            </Menu.Section>

            <Menu.Divider />

            <Menu.Link href={"#"}>
              <Container w={"100%"} gap={"small"} align={"center"} row>
                {"Create a Team"}
                <Icon ml={"auto"} icon={RiAddLine} />
              </Container>
            </Menu.Link>
          </Menu.Content>
        </Menu.Container>
      </Container>
    </Container>
  );
};

export default MenuPage;
