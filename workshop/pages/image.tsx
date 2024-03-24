import { Image, Container } from "@tonightpass/kitchn";
import { NextPage } from "next";
import React from "react";

const ImagePage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <p>{"static"}</p>
        <Image
          src={"https://assets.vercel.com/image/upload/front/zeit/og.png"}
          alt={"triangle"}
          width={540}
          height={309}
          margin={0}
        />
        <p>{"gif with caption"}</p>
        <Container>
          <Image
            src={
              "https://assets.vercel.com/image/upload/front/assets/design/components/triangle.gif"
            }
            alt={"triangle"}
            width={540}
            height={309}
            margin={0}
            // caption={"Source: giphy.com"}
            // captionSpacing={20}
          />
        </Container>
      </Container>
    </>
  );
};

export default ImagePage;
