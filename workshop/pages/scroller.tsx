import { Scroller, Container } from "kitchn";
import { NextPage } from "next";
import React from "react";

const ScrollerPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <p>{"vertical"}</p>
        <Container>
          <Scroller width={"100%"} height={220}>
            <Container>
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
            </Container>
          </Scroller>
        </Container>
        <p>{"horizontal"}</p>
        <Container>
          <Scroller width={"100%"} height={"100%"}>
            <Container row>
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
            </Container>
          </Scroller>
        </Container>
        <p>{"free"}</p>
        <Container>
          <Scroller width={"100%"} height={220}>
            <Container row>
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
            </Container>
            <Container row>
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
              <img
                src={
                  "https://assets.vercel.com/image/upload/q_auto/front/assets/design/black-triangle.png"
                }
                width={540}
                height={309}
                alt={"image"}
              />
            </Container>
          </Scroller>
        </Container>
      </Container>
    </>
  );
};

export default ScrollerPage;
