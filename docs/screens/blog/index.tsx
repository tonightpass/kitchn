import { Container } from "kitchn";

import Featured from "@/components/blog/featured";
import List from "@/components/blog/list";

const Blog: React.FC = () => {
  return (
    <>
      <Featured />
      <Container gap={"small"}>
        <List />
      </Container>
    </>
  );
};

export default Blog;
