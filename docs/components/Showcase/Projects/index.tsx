import { Container, Link, Text } from "kitchn";
import { SortedProject } from "types/showcase";

import PromotedProjects from "./PromotedProjects";

export type ProjectsProps = {
  sortedProjects: Record<string, SortedProject>;
};

const Projects: React.FC<ProjectsProps> = ({
  sortedProjects,
}: ProjectsProps) => {
  const projects = Object.values(sortedProjects).slice(0, 6);

  return (
    <Container
      id={"projects"}
      w={"100%"}
      maxW={"laptop"}
      mx={"auto"}
      py={"extraLarge"}
      align={"center"}
      section
    >
      <Text transform={"uppercase"} weight={"bold"} align={"center"} h2>
        {"Discover projects built with "}{" "}
        <Text transform={"uppercase"} weight={"bold"} accent={"primary"} span>
          {"Kitchn by Tonight Pass\r"}
        </Text>
      </Text>

      <PromotedProjects projects={projects} />

      <Container mt={"large"} gap={"small"}>
        <Text align={"center"} span>
          {"Add your project top of the list by submitting "}
          <Link
            href={"https://github.com/tonightpass/kitchn/issues/new"}
            variant={"highlight"}
          >
            {"an issue on GitHub"}
          </Link>
          {"."}
        </Text>
        <Text align={"center"} span>
          {"We love to see what you've built with Kitchn."}
        </Text>
      </Container>

      <Container
        mt={"normal"}
        w={"100%"}
        gap={"normal"}
        direction={["column", "row", "row"]}
        row
      >
        <Container
          flex={1}
          bw={1}
          p={"normal"}
          br={"square"}
          justify={"center"}
        >
          {"Get a backlink to your project's website or GitHub repository."}
        </Container>
        <Container
          flex={1}
          bw={1}
          p={"normal"}
          br={"square"}
          justify={"center"}
        >
          {
            "Showcase your project to the Kitchn community and get feedback from the Tonight Pass team."
          }
        </Container>
      </Container>
    </Container>
  );
};

export default Projects;
