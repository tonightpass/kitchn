import { Avatar, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";

const AvatarPage: NextPage = () => {
  return (
    <Container
      gap={10}
      style={{
        maxWidth: 700,
        margin: "0 auto",
      }}
    >
      <p>default</p>
      <Avatar>
        <Image src="" alt="lolilol" />
      </Avatar>
      <div>
        <Icon src="" alt="iiivi" width={120} height={120} />
      </div>
    </Container>
  );
};

const Icon = styled(Image)``;

export default AvatarPage;
