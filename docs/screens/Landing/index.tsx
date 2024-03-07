import Examples from "@components/Landing/Examples";
import Featured from "@components/Landing/Featured";
import Features from "@components/Landing/Features";
import { Container } from "@tonightpass/kitchen";
import Showcase from "components/Landing/Showcase";

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
