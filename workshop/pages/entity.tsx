import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Entity,
  EntityField,
  Icon,
  Link,
  Menu,
  Spacer,
  Text,
} from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import { RiGithubFill } from "react-icons/ri";

const EntityPage: NextPage = () => {
  return (
    <Container gap={"small"} maxW={700} mx={"auto"}>
      <Text>{"fields"}</Text>
      <Container>
        <Entity>
          <EntityField title={"GitHub"} description={"Jéremy Baudrin"} />
          <EntityField
            active={false}
            title={"Inactive"}
            description={"This field is inactive"}
          />
          <EntityField
            width={"20%"}
            title={"Fixed Width"}
            description={<Link href={"/"}>{"Open docs"}</Link>}
          />
          <EntityField
            label
            width={100}
            title={"Label"}
            description={"Encrypted"}
          />
          <EntityField
            justify={"flex-end"}
            description={"Right Aligned"}
            avatar={<Avatar size={24} text={"Younès Bessa"} />}
          />
        </Entity>
      </Container>

      <Text>{"thumbnail"}</Text>
      <Container>
        <Entity thumbnail={<Icon icon={RiGithubFill} size={24} />}>
          <EntityField
            title={"Twitter X"}
            description={
              <>
                {"Lucas Bodin ("}
                <Link href={"https://x.com/imazyx"} variant={"highlight"}>
                  {"@imazyx"}
                </Link>
                {")"}
              </>
            }
          />
          <EntityField justify={"flex-end"} description={"Connected 1h ago"} />
        </Entity>

        <Spacer y={"small"} />

        <Entity thumbnail={<Avatar size={36} text={"Younès Bessa"} />}>
          <EntityField
            title={"Younès Bessa"}
            description={"Thumbnail size and wrap options"}
          />
          <EntityField justify={"flex-end"} description={"Connected 1h ago"} />
        </Entity>
      </Container>

      <Text>{"menu"}</Text>
      <Entity
        thumbnail={<Icon icon={RiGithubFill} size={24} />}
        menuContent={
          <>
            <Menu.Item onClick={() => alert("clicked")}>{"Inspect"}</Menu.Item>
            <Menu.Item onClick={() => alert("clicked")}>
              <Text size={"inherit"} accent={"danger"}>
                {"Remove"}
              </Text>
            </Menu.Item>
          </>
        }
      >
        <EntityField title={"PUBLIC_KEY"} description={"Production"} />
        <EntityField
          label
          title={"VALUE"}
          description={"6863EFA205B4680BE7928E"}
        />
        <EntityField
          justify={"flex-end"}
          width={200}
          description={"Added 1h ago"}
          avatar={<Avatar size={24} text={"Younès Bessa"} />}
        />
      </Entity>

      <Text>{"actions"}</Text>
      <Container>
        <Entity
          thumbnail={<Avatar size={32} text={"Younès Bessa"} />}
          menuContent={
            <>
              <Menu.Item onClick={() => alert("clicked")}>
                {"Inspect"}
              </Menu.Item>
              <Menu.Item onClick={() => alert("clicked")}>
                <Text size={"inherit"} accent={"danger"}>
                  {"Remove"}
                </Text>
              </Menu.Item>
            </>
          }
          actions={
            <Container row gap={"tiny"}>
              <Button type={"dark"} size={"small"}>
                {"Decline"}
              </Button>
              <Container>
                <Button type={"light"} size={"small"}>
                  {"Accept"}
                </Button>
              </Container>
            </Container>
          }
        >
          <EntityField title={"Leo Lamprecht"} description={"leo"} />
        </Entity>
      </Container>

      <Text>{"checkbox"}</Text>
      <Container>
        <Entity
          checkbox={<Checkbox onChange={() => alert("clicked")} />}
          actions={
            <Button size={"small"} type={"dark"}>
              {"Revoke"}
            </Button>
          }
        >
          <EntityField
            title={"Vercel CLI on chris.lan"}
            description={"Last used just now"}
          />
        </Entity>
      </Container>

      <Text>{"mixed"}</Text>
      <Container>
        <Entity
          thumbnail={<Avatar size={32} text={"Younès Bessa"} />}
          checkbox={<Checkbox onChange={() => alert("clicked")} checked />}
          menuContent={<Menu.Item>{"Foo"}</Menu.Item>}
          actions={
            <Container row gap={"small"}>
              <Button size={"small"} type={"light"}>
                {"Accept"}
              </Button>
            </Container>
          }
        >
          <EntityField
            flex={0}
            width={160}
            title={"GitHub"}
            description={"Evil Rabbit"}
          />
          <EntityField
            label
            width={"20%"}
            title={"Hello"}
            description={"6863EFA205B4680BE7928E"}
          />
          <EntityField right description={"Connected 1h ago"} />
        </Entity>
        <Entity
          thumbnail={<Avatar size={32} text={"Younès Bessa"} />}
          menuContent={<Menu.Item>{"Foo"}</Menu.Item>}
          actions={
            <>
              <Container row gap={"small"}>
                <Button size={"small"} type={"dark"}>
                  {"Decline"}
                </Button>
                <Container>
                  <Button size={"small"} type={"light"}>
                    {"Accept"}
                  </Button>
                </Container>
              </Container>
            </>
          }
        >
          <EntityField
            width={120}
            title={"GitHub"}
            description={"Evil Rabbit"}
          />
          <EntityField
            label
            title={"VALUE"}
            description={"6863EFA205B4680BE7928E"}
          />
          <EntityField right width={"50%"} description={"Connected 1h ago"} />
        </Entity>
      </Container>

      <Text>{"skeleton"}</Text>
      <Container>
        <Entity
          placeholder
          thumbnail={<Avatar size={32} text={"Younès Bessa"} />}
          checkbox={<Checkbox onChange={() => alert("clicked")} checked />}
          menuContent={<Menu.Item>{"Foo"}</Menu.Item>}
          actions={
            <>
              <Button size={"small"}>{"Accept"}</Button>
            </>
          }
        >
          <EntityField
            width={160}
            title={"GitHub"}
            description={"Evil Rabbit"}
            titleSkeletonWidth={"50%"}
            descriptionSkeletonWidth={"80%"}
          />
          <EntityField
            label
            width={"20%"}
            title={"VALUE"}
            description={"6863EFA205B4680BE7928E"}
            descriptionSkeletonWidth={"100%"}
          />
          <EntityField right description={"Connected 1h ago"} />
        </Entity>
        <Entity
          placeholder
          thumbnail={<Avatar size={32} text={"Younès Bessa"} />}
          menuContent={<Menu.Item>{"Foo"}</Menu.Item>}
          actions={
            <Container row gap={0.5}>
              <Container>
                <Button size={"small"} type={"secondary"}>
                  {"Decline"}
                </Button>
              </Container>
              <Container>
                <Button size={"small"}>{"Accept"}</Button>
              </Container>
            </Container>
          }
        >
          <EntityField
            width={120}
            title={"GitHub"}
            description={"Evil Rabbit"}
          />
          <EntityField
            label
            title={"VALUE"}
            description={"6863EFA205B4680BE7928E"}
          />
          <EntityField right width={"50%"} description={"Connected 1h ago"} />
        </Entity>
      </Container>
    </Container>
  );
};

export default EntityPage;
