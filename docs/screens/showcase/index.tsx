import { Container } from "kitchn";

import Featured from "@/components/showcase/featured";
import Projects from "@/components/showcase/projects";
import { sortedProjects } from "@/data/showcases";

const Showcase: React.FC = () => {
  return (
    <Container maxW={"desktop"} mx={"auto"} px={"large"}>
      <Featured />
      <Projects sortedProjects={sortedProjects} />
    </Container>
  );
};

export default Showcase;
