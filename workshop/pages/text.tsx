import {
  InlineCode,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  Code,
} from "@tonightpass/kitchn";

const TextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text align={"center"}>{"sizes"}</Text>
        <Text size={"extraTitle"}>{"The Evil Rabbit jumps."}</Text>
        <Text size={"title"}>{"The Evil Rabbit jumps."}</Text>
        <Text size={"large"}>{"The Evil Rabbit jumps."}</Text>
        <Text size={"medium"}>{"The Evil Rabbit jumps."}</Text>
        <Text size={"normal"}>{"The Evil Rabbit jumps."}</Text>
        <Text size={"small"}>{"The Evil Rabbit jumps."}</Text>
        <Text size={"tiny"}>{"The Evil Rabbit jumps."}</Text>

        <Text align={"center"}>{"weights"}</Text>
        <Text weight={"black"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"extraBold"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"bold"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"semiBold"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"medium"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"regular"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"light"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"extraLight"}>{"The Evil Rabbit jumps."}</Text>
        <Text weight={"thin"}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"center"}>{"colors - text"}</Text>
        <Text>{"The Evil Rabbit jumps."}</Text>
        <Text color={"lightest"}>{"The Evil Rabbit jumps."}</Text>
        <Text color={"lighter"}>{"The Evil Rabbit jumps."}</Text>
        <Text color={"light"}>{"The Evil Rabbit jumps."}</Text>
        <Text color={"dark"}>{"The Evil Rabbit jumps."}</Text>
        <Text color={"darker"}>{"The Evil Rabbit jumps."}</Text>
        <Text color={"darkest"}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"center"}>{"colors - accent"}</Text>
        <Text accent={"primary"}>{"The Evil Rabbit jumps."}</Text>
        <Text accent={"secondary"}>{"The Evil Rabbit jumps."}</Text>
        <Text accent={"info"}>{"The Evil Rabbit jumps."}</Text>
        <Text accent={"success"}>{"The Evil Rabbit jumps."}</Text>
        <Text accent={"warning"}>{"The Evil Rabbit jumps."}</Text>
        <Text accent={"danger"}>{"The Evil Rabbit jumps."}</Text>
        <Text accent={"light"}>{"The Evil Rabbit jumps."}</Text>
        <Text accent={"dark"}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"center"}>{"modifiers"}</Text>
        <Text>
          {"The "}
          <strong>{"Evil Rabbit"}</strong> <em>{"jumps"}</em>
          {"over the "}
          <s>{"quick brown fox"}</s> <u>{"Lawful Meerkat"}</u>
          {".\r"}
        </Text>
        <Text align={"center"}>{"polymorphic"}</Text>
        <Text as={"span"}>
          {"<p>"}
          {" semantically, "}
          {"<h2>"} {"visually.\r"}
        </Text>
        <Text align={"center"}>{"truncate"}</Text>
        <div style={{ maxWidth: 100 }}>
          <Text truncate>{"The Evil Rabbit jumps."}</Text>
        </div>
        <Text align={"center"}>{"clamp"}</Text>
        <div style={{ maxHeight: 100 }}>
          <Text truncate={2}>
            {
              "The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps.\r"
            }
            {
              "The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps.\r"
            }
            {
              "The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps.\r"
            }
            {"The Evil Rabbit jumps. The Evil Rabbit jumps.\r"}
          </Text>
        </div>
        <Text align={"center"}>{"align"}</Text>
        <Text align={"center"}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"left"}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"right"}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"center"}>{"transform"}</Text>
        <Text transform={"uppercase"}>{"The Evil Rabbit jumps."}</Text>
        <Text transform={"lowercase"}>{"The Evil Rabbit jumps."}</Text>
        <Text transform={"capitalize"}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"center"}>{"title"}</Text>
        <Text title={"The Evil Rabbit jumps."}>{"The Evil Rabbit jumps."}</Text>
        <Text align={"center"}>{"line height"}</Text>
        <Text lineHeight={3}>
          {
            "The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps.\r"
          }
          {
            "The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps.\r"
          }
          {
            "The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps.\r"
          }
          {"The Evil Rabbit jumps. The Evil Rabbit jumps.\r"}
        </Text>
        <Text align={"center"}>{"wrap"}</Text>
        <Text wrap={false}>
          {
            "The Evil Rabbit jumps. The Evil Rabbit jumps. The Evil Rabbit jumps.\r"
          }
          {"The Evil Rabbit jumps. The Evil Rabbit jumps.\r"}
        </Text>
        <Text align={"center"}>{"monospace"}</Text>
        <Text>{"This is a sans-serif font."}</Text>
        <Text monospace>{"This is a monospace font."}</Text>
        <Text align={"center"}>{"unordered list"}</Text>
        <UnorderedList>
          <ListItem>
            {
              "Static websites and static generators (React, Vue, Angular, etc)\r"
            }
          </ListItem>
          <ListItem>{"Code that renders HTML on the server-side"}</ListItem>
          <ListItem>
            {
              "API endpoints that query databases or web APIs and return dynamic\r"
            }
            {"data\r"}
          </ListItem>
        </UnorderedList>
        <Text align={"center"}>{"ordered list"}</Text>
        <OrderedList>
          <ListItem>{"Push a commit to trigger the deployment."}</ListItem>
          <ListItem>
            {"You'll see the deployment status on GitHub and Vercel dashboard."}
          </ListItem>
        </OrderedList>
        <Text align={"center"}>{"code"}</Text>
        <Text>
          {"It’s a matter of running "}
          <InlineCode>{"kitchn"}</InlineCode> {"to get it up\r"}
          {"and running instantly.\r"}
        </Text>
        <Text align={"center"}>{"codeblock"}</Text>
        <Code title={"/components/Code.tsx"}>
          {"npm i vercel -g\nvercel init nextjs"}
        </Code>
      </div>
    </div>
  );
};

export default TextPage;
