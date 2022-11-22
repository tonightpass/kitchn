import { Avatar, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";

const AvatarPage: NextPage = () => {
  return (
    <Container
      gap={10}
      style={{
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <Avatar
        size={40}
        url="https://assets.gitlab-static.net/uploads/-/system/user/avatar/2839379/avatar.png"
      />
    </Container>
  );
};

export default AvatarPage;
