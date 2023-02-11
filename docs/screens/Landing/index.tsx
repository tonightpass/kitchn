import Featured from "@components/Landing/Featured";
import Features from "@components/Landing/Features";
import Render from "@components/Landing/Render";
import { Container } from "@tonightpass/kitchen";
import Showcase from "components/Landing/Showcase";

const Landing: React.FC = () => {
  return (
    <Container maxW={"laptop"} mx={"auto"} px={"normal"}>
      <Featured />
      <Render />
      <Showcase />
      <Features />
    </Container>
  );
};

export default Landing;
