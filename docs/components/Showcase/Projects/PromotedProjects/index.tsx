import { Container } from "kitchn";
import { SortedProject } from "types/showcase";

import Card from "./Card";

export type PromotedProjectsProps = {
  projects: SortedProject[];
};

const PromotedProjects: React.FC<PromotedProjectsProps> = ({
  projects,
}: PromotedProjectsProps) => {
  return (
    <Container mt={"large"} gap={"medium"} h={600} w={"100%"} row>
      <Container flex={1} gap={"medium"}>
        {!!projects[0] && <Card flex={1} maxH={"100%"} project={projects[0]} />}
      </Container>
      <Container flex={1} gap={"medium"}>
        {!!projects[1] && (
          <Card flex={0.8} maxH={"40%"} project={projects[1]} />
        )}
        {!!projects[2] && (
          <Card flex={1.2} maxH={"60%"} project={projects[2]} />
        )}
      </Container>
      <Container flex={1} gap={"medium"}>
        {!!projects[3] && (
          <Card flex={1.2} maxH={"60%"} project={projects[3]} />
        )}
        {!!projects[4] && (
          <Card flex={0.8} maxH={"40%"} project={projects[4]} />
        )}
      </Container>
    </Container>
  );
};

export default PromotedProjects;
