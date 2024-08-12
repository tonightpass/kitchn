import kitchn, { Button, Container, Link, Text, Image, Snippet } from "kitchn";
import Balancer from "react-wrap-balancer";

const Featured: React.FC = () => {
  return (
    <Container
      id={"header"}
      maxW={"mobile"}
      mx={"auto"}
      py={"extraLarge"}
      header
    >
      <Container align={"center"}>
        <Link
          href={
            "https://producthunt.com/posts/kitchn?utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-kitchn"
          }
        >
          <Image
            src={`https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=379927&theme=${"neutral"}&period=weekly&topic_id=44`}
            alt={
              "Kitchn - Delicious&#0032;React&#0032;styled&#0032;components | Product Hunt"
            }
            width={200}
            height={"auto"}
            htmlWidth={200}
            htmlHeight={43}
          />
        </Link>
      </Container>
      <Container mt={"normal"} align={"center"}>
        <Text align={"center"} size={"title"} weight={"bold"} h1>
          {"delicious. modern. styled."}
        </Text>
        <Balancer>
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
        </Balancer>
      </Container>
      <Container row gap={"normal"} justify={"center"} mt={"large"}>
        <Link href={"/docs"}>
          <Button>{"Get started"}</Button>
        </Link>
        <Link href={"https://github.com/tonightpass/kitchn"}>
          <Button type={"dark"}>{"Contribute"}</Button>
        </Link>
      </Container>
      <Container mt={"large"} align={"center"}>
        <CustomSnippet text={"npm install kitchn"} prompt={false} />
      </Container>
    </Container>
  );
};

export const CustomSnippet = kitchn(Snippet)`
  ${Text} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export default Featured;
