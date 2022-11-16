import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const IndexPage: NextPage = () => {
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
      <Link href={"/grid"}>Grid</Link>
      <Link href={"/button"}>Button</Link>
      <Link href={"/text"}>Text</Link>
      <Link href={"/icon"}>Icon</Link>
      <Link href={"/note"}>Note</Link>
    </div>
  );
};

export default IndexPage;
