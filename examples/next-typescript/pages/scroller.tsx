import { Scroller, Container } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
import Image from "next/image";

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
        <p>vertical</p>
        <Container>
          <Scroller width="100%" height={220}>
            <Container style={{ width: 300 }}>
              <Container>
                <Image src={""} width={540} height={309} alt={"image"} />
              </Container>

              <Container>
                <Image src={""} width={540} height={309} alt={"image"} />
              </Container>
            </Container>
          </Scroller>
        </Container>
      </Container>
    </>
  );
};

export default ScrollerPage;
