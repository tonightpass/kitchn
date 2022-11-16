import { Badge } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const BadgePage: NextPage = () => {
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
          <Badge>The</Badge>
          <Badge>Default</Badge>
          <Badge>Badge</Badge>
        </div>

        <p>types</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Badge type="primary">primary</Badge>
          <Badge type="secondary">secondary</Badge>
          <Badge type="success">success</Badge>
          <Badge type="warning">warning</Badge>
          <Badge type="danger">danger</Badge>
          <Badge type="info">info</Badge>
          <Badge type="light">light</Badge>
          <Badge type="dark">dark</Badge>
        </div>

        <p>sizes</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Badge size="small">Badge</Badge>
          <Badge size="normal">Badge</Badge>
          <Badge size="large">Badge</Badge>
        </div>

        <p>font size</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Badge>Normal</Badge>
          <Badge bold>Bold</Badge>
        </div>
      </div>
    </>
  );
};

export default BadgePage;
