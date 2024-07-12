import { Button, Container, Link, Tabs } from "kitchn";
import React from "react";

import AuthenticationExample from "./Authentication";
import ProgressExample from "./Progress";
import ShopItemExample from "./ShopItem";
const Examples: React.FC = () => {
  const tabs = [
    {
      title: "Authentication",
      value: "authentication",
      file: "Authentication",
    },
    { title: "Shop Item", value: "shop-item", file: "ShopItem" },
    { title: "Progress", value: "progress", file: "Progress" },
  ];
  const [selected, setSelected] = React.useState("authentication");

  console.log("selected", selected);
  return (
    <Container>
      <Tabs
        tabs={tabs.map((tab) => {
          return { title: tab.title, value: tab.value };
        })}
        selected={selected}
        setSelected={setSelected}
      />
      <Container
        bw={1}
        btw={0}
        br={"square"}
        btlr={0}
        btrr={0}
        position={"relative"}
      >
        <Container r={"medium"} t={"medium"} position={"absolute"}>
          <Link
            href={`https://github.com/tonightpass/kitchn/blob/master/docs/components/Landing/Examples/${
              tabs.find((tab) => tab.value === selected)?.file
            }/index.tsx`}
          >
            <Button size={"small"}>{"View code"}</Button>
          </Link>
        </Container>
        {selected === "authentication" && <AuthenticationExample />}
        {selected === "progress" && <ProgressExample />}
        {selected === "shop-item" && <ShopItemExample />}
      </Container>
    </Container>
  );
};

export default Examples;
