import { Link } from "@tonightpass/kitchen";
import { NextPage } from "next";
import styled from "styled-components";

const LinkPage: NextPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <p>default</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="https://tonightpass.com/">Link to our website</Link>
        </div>

        <p>using onClick</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link onClick={() => console.log("clicked")}>Check the console</Link>
        </div>

        <p>disabled</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link disabled>Disabled link</Link>
        </div>

        <p>non text</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="https://tonightpass.com/">
            <Content>This entire div is wrapped in a link</Content>
          </Link>
        </div>

        <p>variants</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Link href="https://tonightpass.com/" variant="primary">
            Primary variant
          </Link>
          <Link href="https://tonightpass.com/" variant="secondary">
            Secondary variant
          </Link>
          <Link href="https://tonightpass.com/" variant="highlight">
            Highlight variant
          </Link>
          <Link href="https://tonightpass.com/" variant="blend">
            Blend variant
          </Link>
        </div>

        <p>fragment link (anchor)</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="#">
            Click on this to jump to this section of the page
          </Link>
        </div>
      </div>
    </>
  );
};
const Content = styled.div`
  color: lime;
  border: 1px solid lime;
`;

export default LinkPage;
