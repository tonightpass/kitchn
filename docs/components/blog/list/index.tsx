import { Container, Link, Text } from "kitchn";
import { getPagesUnderRoute } from "nextra/context";

const List: React.FC = () => {
  return getPagesUnderRoute("/blog").map((page) => {
    if (page.kind !== "MdxPage") {
      return null;
    }
    return (
      <Container key={page.route}>
        <Link href={page.route}>
          <Text size={"large"} weight={"semiBold"} h2>
            {page.frontMatter?.title || page.meta?.title || page.name}
          </Text>
        </Link>
        <Text mt={"small"} color={"light"}>
          {page.frontMatter?.description}{" "}
          <Link href={page.route} variant={"secondary"}>
            {"Read more →"}
          </Link>
        </Text>
        <Text color={"darker"} size={"compact"} mt={"normal"}>
          {page.frontMatter?.date}
        </Text>
      </Container>
    );
  });
};

export default List;
