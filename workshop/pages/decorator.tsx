import { Container } from "kitchn";
import { NextPage } from "next";

const DecoratorPage: NextPage = () => {
  return (
    <Container
      mx={"auto"}
      bg={"red"}
      h={500}
      width={["100%", 500, 400, 300, 200]}
    >
      {/* Decorator */}
    </Container>
  );
};

export default DecoratorPage;
