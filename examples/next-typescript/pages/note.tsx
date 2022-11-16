import { Note } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const NotePage: NextPage = () => {
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
        <p>sizes</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Note size="small">Note</Note>
          <Note size="normal">Note</Note>
          <Note size="large">Note</Note>
        </div>

        <p>action</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Note button="Ok">Action</Note>
          <Note button="Upgrade">Action</Note>
          <Note button="Cancel">Action</Note>
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
          <Note>{"default (no prefix)"}</Note>
          <Note filled prefix="note">
            note
          </Note>
          <Note prefix="danger">danger</Note>
          <Note prefix="warning">warning</Note>
          <Note prefix="success">success</Note>
          <Note prefix="info">info</Note>
        </div>

        <p>filled</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Note>{"default (no fill color)"}</Note>
          <Note filled prefix="note">
            note
          </Note>
          <Note filled prefix="danger">
            danger
          </Note>
          <Note filled prefix="warning">
            warning
          </Note>
          <Note filled prefix="success">
            success
          </Note>
          <Note filled prefix="info">
            info
          </Note>
        </div>
      </div>
    </>
  );
};

export default NotePage;
