import Examples from "@components/Landing/Examples";
import Featured from "@components/Landing/Featured";
import Features from "@components/Landing/Features";
import Showcase from "components/Landing/Showcase";
import { Container } from "kitchn";

const Landing: React.FC = () => {
  return (
    <Container maxW={"desktop"} mx={"auto"} px={"large"}>
      <Featured />
      <Examples />
      <Showcase />
      <Features />
    </Container>
  );
};

export default Landing;
