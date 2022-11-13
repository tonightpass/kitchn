import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const IndexPage: NextPage = () => {
  const ref = React.useRef(null);

  console.log("ref", ref);

  return (
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
      <Link ref={ref} href={"/button"}>
        Button
      </Link>
      <Link href={"/text"}>Text</Link>
    </div>
  );
};

export default IndexPage;
