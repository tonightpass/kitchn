import { Container, Tabs } from "@tonightpass/kitchn";
import React from "react";

import ProgressExample from "./Progress";
import ShopItemExample from "./ShopItem";
const Examples: React.FC = () => {
  const [selected, setSelected] = React.useState("shop-item");

  return (
    <Container>
      <Tabs
        tabs={[
          { title: "Shop Item", value: "shop-item" },
          { title: "Progress", value: "progress" },
        ]}
        selected={selected}
        setSelected={setSelected}
      />
      <Container bw={1} btw={0} br={"square"} btlr={0} btrr={0}>
        {selected === "progress" && <ProgressExample />}
        {selected === "shop-item" && <ShopItemExample />}
      </Container>
    </Container>
  );
};

export default Examples;
