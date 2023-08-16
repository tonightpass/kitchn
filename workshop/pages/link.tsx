import kitchen, { Container, Note, Text } from "@tonightpass/kitchen";
import { FragmentLink, Link } from "@tonightpass/kitchen/next";
import { NextPage } from "next";
import { useRouter } from "next/router";

const LinkPage: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <Container>
          <p>{"default"}</p>
          <Link href={"/"}>{"Return to menu"}</Link>
        </Container>
        <Container>
          <p>{"using onClick"}</p>
          <Link onClick={() => router.push("/")}>{"Return to menu"}</Link>
        </Container>
        <Container>
          <p>{"disabled"}</p>
          <Link disabled>{"Disabled link"}</Link>
          <Link href={undefined} onClick={undefined}>
            {"Disabled link (no href or onClick)\r"}
          </Link>
          <Link href={"#"} disabled>
            {"Disabled link (href=#)"}
          </Link>
        </Container>
        <p>{"non text"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href={"/"}>
            <Card>{"This entire div is wrapped in a link"}</Card>
          </Link>
        </div>
        <Container gap={10}>
          <Text>{"variants"}</Text>
          <Container>
            <Text size={"small"}>{"highlight"}</Text>
            <Link href={"#"} variant={"highlight"}>
              {"Highlight variant\r"}
            </Link>
          </Container>
          <Container>
            <Text size={"small"}>{"primary"}</Text>
            <Link href={"#"} variant={"primary"}>
              {"Primary variant\r"}
            </Link>
          </Container>

          <Container align={"flex-start"}>
            <Text size={"small"}>{"secondary"}</Text>
            <Link href={"#"} variant={"secondary"}>
              {"Secondary variant\r"}
            </Link>
          </Container>

          <Container>
            <Text size={"small"}>{"blend"}</Text>
            <Note type={"danger"} label={false}>
              <Link href={"#"} variant={"blend"}>
                {"Blend variant\r"}
              </Link>{" "}
              {"works well with themed components.\r"}
            </Note>
          </Container>
        </Container>
        <Container>
          <p>{"fragment link (anchor)"}</p>
          <FragmentLink id={"fragment-link-example"}>
            {"Click on this to jump to this section of the page\r"}
          </FragmentLink>
        </Container>
        <Container>
          <p>{"internal href"}</p>
          <Link href={"/"}>{"Click on this to jump back to the menu"}</Link>
        </Container>

        <Container>
          <p>{"external href"}</p>
          <Link href={"https://tonightpass.com/"}>
            {"Click on this to go to our website\r"}
          </Link>
        </Container>
      </Container>
    </>
  );
};
const Card = kitchen.div`
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: 8px;
  padding: 16px;
`;

export default LinkPage;
