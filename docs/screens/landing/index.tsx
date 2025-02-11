import { Container } from "kitchn";

import Examples from "@/components/landing/examples";
import Featured from "@/components/landing/featured";
import Features from "@/components/landing/features";
import Showcase from "@/components/landing/showcase";

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
