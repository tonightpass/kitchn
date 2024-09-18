import Featured from "@components/Blog/Featured";
import List from "@components/Blog/List";
import { Container } from "kitchn";

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
