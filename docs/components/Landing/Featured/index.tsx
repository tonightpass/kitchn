import { Button, Container, Text, Image, useTheme } from "@tonightpass/kitchen";
import { Link } from "@tonightpass/kitchen/next";

const Featured: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Container
      id={"header"}
      maxW={"mobile"}
      mx={"auto"}
      py={"extraLarge"}
      header
    >
      <Container align={"center"}>
        <Text
          align={"center"}
          size={"extraTitle"}
          weight={"bold"}
          accent={"primary"}
          h1
        >
          {"Tonight Pass\r"}
        </Text>
        <Text align={"center"} size={"title"} weight={"bold"} h2>
          {"Delicious React styled-components\r"}
        </Text>
      </Container>
      <Text
        size={"medium"}
        mt={"normal"}
        weight={"medium"}
        align={"center"}
        color={"light"}
      >
        {
          "Design UI like Tonight Pass in React or React Native with optimized and\r"
        }
        {"customizable styled-components.\r"}
      </Text>
      <Container mt={"normal"} align={"center"}>
        <Link
          href={
            "https://producthunt.com/posts/kitchen?utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-kitchen"
          }
        >
          <Image
            src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=379927&theme=${
              theme.name === "dark" ? "light" : "neutral"
            }&period=weekly&topic_id=44`}
            alt={
              "Kitchen - Delicious&#0032;React&#0032;styled&#0032;components | Product Hunt"
            }
            width={"250"}
            height={"54"}
          />
        </Link>
      </Container>
      <Container row gap={"normal"} justify={"center"} mt={"large"}>
        <Link href={"/docs"}>
          <Button>{"Get started"}</Button>
        </Link>
        <Link href={"https://github.com/tonightpass/kitchen"}>
          <Button type={"dark"}>{"Contribute"}</Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Featured;
