import { Button, Container, Image, Text } from "@tonightpass/kitchen";

const CodeSandboxPage = () => {
  return (
    <Container h={"100vh"} align={"center"} justify={"center"}>
      <Container maxW={245}>
        <Image
          src={
            "https://unsplash.com/photos/RUvW1KGD9a4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNoYW1icmV8ZnJ8MHx8fHwxNjgwNDcwNjM2&w=640"
          }
          br={"square"}
          alt={"Example"}
          w={"100%"}
        />
        <Container mt={"small"} align={"center"} justify={"space-between"} row>
          <Text weight={"bold"}>Apartment in Paris</Text>
          <Text>
            ⭐ <Text weight={"bold"}>4.9</Text> (20)
          </Text>
        </Container>
        <Container mt={"tiny"}>
          <Text color={"lighter"}>Large 2 rooms flat with a terrace</Text>
          <Text color={"lighter"}>1 king bed</Text>
          <Text color={"lighter"}>Aug 19 - 26</Text>
        </Container>
        <Text color={"lighter"} mt={"tiny"}>
          <Text color={"lighter"} decoration={"line-through"}>
            $114
          </Text>{" "}
          <Text color={"lightest"} weight={"bold"}>
            $120
          </Text>{" "}
          <Text color={"lightest"}>{"night ·"}</Text> $735 total
        </Text>
        <Container>
          <Button mt={"small"}>Book now</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default CodeSandboxPage;
