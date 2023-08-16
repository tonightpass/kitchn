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
        <p>{"sizes"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size={"small"}>{"Button"}</Button>
          <Button>{"Button"}</Button>
          <Button size={"large"}>{"Button"}</Button>
        </div>

        <p>{"shapes"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button shape={"round"} size={"small"}>
            {"Button\r"}
          </Button>
          <Button shape={"round"}>{"Button"}</Button>
          <Button shape={"round"} size={"large"}>
            {"Button\r"}
          </Button>
          <Button shape={"square"} size={"small"}>
            {"Button\r"}
          </Button>
          <Button shape={"square"}>{"Button"}</Button>
          <Button shape={"square"} size={"large"}>
            {"Button\r"}
          </Button>
        </div>

        <p>{"prefix and suffix"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button prefix={"👋"}>{"Get started"}</Button>
          <Button suffix={"🥸"}>{"Documentation"}</Button>
          <Button prefix={"👉"} suffix={"👈"}>
            {"Button\r"}
          </Button>
        </div>
        <p>{"sizes with prefix and suffix"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size={"small"} prefix={"👋"}>
            {"Get started\r"}
          </Button>
          <Button suffix={"🥸"}>{"Documentation"}</Button>
          <Button size={"large"} prefix={"👉"} suffix={"👈"}>
            {"Button\r"}
          </Button>
        </div>

        <p>{"types"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button type={"primary"}>{"Primary"}</Button>
          <Button type={"secondary"}>{"Secondary"}</Button>
          <Button type={"danger"}>{"Danger"}</Button>
          <Button type={"warning"}>{"Warning"}</Button>
          <Button type={"success"}>{"Success"}</Button>
          <Button type={"info"}>{"Info"}</Button>
          <Button type={"dark"}>{"Dark"}</Button>
          <Button type={"light"}>{"Light"}</Button>
        </div>

        <p>{"variant - ghost"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant={"ghost"} type={"primary"}>
            {"Primary\r"}
          </Button>
          <Button variant={"ghost"} type={"secondary"}>
            {"Secondary\r"}
          </Button>
          <Button variant={"ghost"} type={"danger"}>
            {"Danger\r"}
          </Button>
          <Button variant={"ghost"} type={"warning"}>
            {"Warning\r"}
          </Button>
          <Button variant={"ghost"} type={"success"}>
            {"Success\r"}
          </Button>
          <Button variant={"ghost"} type={"info"}>
            {"Info\r"}
          </Button>
          <Button variant={"ghost"} type={"dark"}>
            {"Dark\r"}
          </Button>
          <Button variant={"ghost"} type={"light"}>
            {"Light\r"}
          </Button>
        </div>

        <p>{"loading"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size={"small"} loading>
            {"Get started\r"}
          </Button>
          <Button loading>{"Get started"}</Button>
          <Button size={"large"} loading>
            {"Get started\r"}
          </Button>
        </div>

        <p>{"disabled"}</p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button prefix={"👋"} disabled>
            {"Get started\r"}
          </Button>
          <Button suffix={"🥸"} disabled>
            {"Documentation\r"}
          </Button>
          <Button prefix={"👉"} suffix={"👈"} disabled>
            {"Button\r"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
