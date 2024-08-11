import { Container } from "kitchn";
import { NextPage } from "next";

const DecoratorPage: NextPage = () => {
  return (
    <Container
      mx={"auto"}
      bg={"red"}
      h={500}
      width={["100%", 200, 300, 400, 500]}
    >
      {/* Decorator */}
    </Container>
  );
};

export default DecoratorPage;
