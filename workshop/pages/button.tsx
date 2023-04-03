import { Button } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";

const ButtonPage: NextPage = () => {
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
          <Button size={"small"}>Button</Button>
          <Button>Button</Button>
          <Button size={"large"}>Button</Button>
        </div>

        <p>shapes</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button shape={"round"} size={"small"}>
            Button
          </Button>
          <Button shape={"round"}>Button</Button>
          <Button shape={"round"} size={"large"}>
            Button
          </Button>
          <Button shape={"square"} size={"small"}>
            Button
          </Button>
          <Button shape={"square"}>Button</Button>
          <Button shape={"square"} size={"large"}>
            Button
          </Button>
        </div>

        <p>prefix and suffix</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button prefix={"👋"}>Get started</Button>
          <Button suffix={"🥸"}>Documentation</Button>
          <Button prefix={"👉"} suffix={"👈"}>
            Button
          </Button>
        </div>
        <p>sizes with prefix and suffix</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size={"small"} prefix={"👋"}>
            Get started
          </Button>
          <Button suffix={"🥸"}>Documentation</Button>
          <Button size={"large"} prefix={"👉"} suffix={"👈"}>
            Button
          </Button>
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
          <Button type={"primary"}>Primary</Button>
          <Button type={"secondary"}>Secondary</Button>
          <Button type={"danger"}>Danger</Button>
          <Button type={"warning"}>Warning</Button>
          <Button type={"success"}>Success</Button>
          <Button type={"info"}>Info</Button>
          <Button type={"dark"}>Dark</Button>
          <Button type={"light"}>Light</Button>
        </div>

        <p>variant - ghost</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant={"ghost"} type={"primary"}>
            Primary
          </Button>
          <Button variant={"ghost"} type={"secondary"}>
            Secondary
          </Button>
          <Button variant={"ghost"} type={"danger"}>
            Danger
          </Button>
          <Button variant={"ghost"} type={"warning"}>
            Warning
          </Button>
          <Button variant={"ghost"} type={"success"}>
            Success
          </Button>
          <Button variant={"ghost"} type={"info"}>
            Info
          </Button>
          <Button variant={"ghost"} type={"dark"}>
            Dark
          </Button>
          <Button variant={"ghost"} type={"light"}>
            Light
          </Button>
        </div>

        <p>loading</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size={"small"} loading>
            Get started
          </Button>
          <Button loading>Get started</Button>
          <Button size={"large"} loading>
            Get started
          </Button>
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
          <Button prefix={"👋"} disabled>
            Get started
          </Button>
          <Button suffix={"🥸"} disabled>
            Documentation
          </Button>
          <Button prefix={"👉"} suffix={"👈"} disabled>
            Button
          </Button>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
