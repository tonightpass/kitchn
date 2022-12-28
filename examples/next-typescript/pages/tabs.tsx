import { Container, Tabs } from "@tonightpass/kitchen";
import { NextPage } from "next";
import React from "react";
// import { BsArrowUpCircle } from "react-icons/bs";

const TabsPage: NextPage = () => {
  const [selected, setSelected] = React.useState("apple");
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <p>default</p>
        <Container gap={10} row style={{ alignItems: "center" }}>
          <Container row>
            <Tabs
              tabs={[
                { title: "Apple", value: "apple" },
                { title: "Orange", value: "orange" },
                { title: "Mango", value: "mango" },
              ]}
              selected={selected}
              setSelected={setSelected}
            />
          </Container>
        </Container>

        <p>disabled</p>
        <Container row>
          <Tabs
            tabs={[
              { title: "Apple", value: "apple" },
              { title: "Orange", value: "orange" },
              { title: "Mango", value: "mango" },
            ]}
            selected={selected}
            setSelected={setSelected}
          />
        </Container>

        <p>with icons</p>
        <Container row>
          <Tabs
            tabs={[
              { title: "Apple", value: "apple" },
              { title: "Orange", value: "orange" },
              { title: "Mango", value: "mango" },
            ]}
            selected={selected}
            setSelected={setSelected}
          />
        </Container>

        <p>other</p>
        <Container row>
          <Tabs
            tabs={[
              { title: "Apple", value: "apple" },
              { title: "Orange", value: "orange" },
              { title: "Mango", value: "mango" },
            ]}
            selected={selected}
            setSelected={setSelected}
          />
        </Container>
      </Container>
    </>
  );
};

export default TabsPage;
