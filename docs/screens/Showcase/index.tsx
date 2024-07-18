import Featured from "@components/Showcase/Featured";
import Projects from "@components/Showcase/Projects";
import { sortedProjects } from "data/showcases";
import { Container } from "kitchn";

const Showcase: React.FC = () => {
  return (
    <Container maxW={"desktop"} mx={"auto"} px={"large"}>
      <Featured />
      <Projects sortedProjects={sortedProjects} />
    </Container>
  );
};

export default Showcase;
