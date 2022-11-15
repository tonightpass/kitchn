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
          <Badge mode="primary">primary</Badge>
          <Badge mode="secondary">secondary</Badge>
          <Badge mode="success">success</Badge>
          <Badge mode="warning">warning</Badge>
          <Badge mode="danger">danger</Badge>
          <Badge mode="info">info</Badge>
          <Badge mode="light">light</Badge>
          <Badge mode="dark">dark</Badge>
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
      </div>
    </>
  );
};

export default BadgePage;
