import { Avatar, Container, AvatarGroup } from "@tonightpass/kitchen";
import { NextPage } from "next";

const AvatarPage: NextPage = () => {
  const url = "https://picsum.photos/200/300";

  return (
    <Container
      gap={10}
      style={{
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <p>{"default"}</p>
      <Container gap={"tiny"} row>
        <Avatar src={url} />
        <Avatar src={url} />
        <Avatar src={url} />
        <Avatar src={url} />
      </Container>
      <Container gap={"tiny"} row>
        <Avatar src={url} shape={"square"} />
        <Avatar src={url} shape={"square"} />
        <Avatar src={url} shape={"square"} />
        <Avatar src={url} shape={"square"} />
      </Container>
      <p>{"text"}</p>
      <Container gap={"tiny"} row>
        <Avatar text={"A"} />
        <Avatar text={"Joe"} />
        <Avatar text={"Jérémy Baudrin"} />
      </Container>
      <Container gap={"tiny"}>
        <p>{"group"}</p>
        <AvatarGroup
          members={[
            { src: url },
            { src: url },
            { text: "Younès Bessa" },
            { src: url },
          ]}
        />

        <AvatarGroup
          members={[
            { src: url },
            { text: "Younès Bessa" },
            { src: url },
            { text: "Joe" },
          ]}
          limit={3}
        />
      </Container>
    </Container>
  );
};

export default AvatarPage;
