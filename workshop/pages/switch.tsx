import { Container, Switch } from "kitchn";
import { NextPage } from "next";
import React from "react";
import { RiAppleFill, RiAndroidFill, RiWindowsFill } from "react-icons/ri";

const TabsPage: NextPage = () => {
  const [selected1, setSelected1] = React.useState("apple");
  const [selected2, setSelected2] = React.useState("apple");
  const [selected3, setSelected3] = React.useState("apple");
  return (
    <>
      <Container gap={"small"} maxW={700} mx={"auto"}>
        <Container gap={5} align={"flex-start"}>
          <p>{"default"}</p>
          <Switch
            tabs={[
              { title: "Apple", value: "apple" },
              { title: "Orange", value: "orange" },
              { title: "Mango", value: "mango" },
            ]}
            selected={selected1}
            setSelected={setSelected1}
          />
        </Container>

        <Container gap={5} align={"flex-start"}>
          <p>{"disabled"}</p>
          <Switch
            tabs={[
              { title: "Apple", value: "apple" },
              { title: "Orange", value: "orange" },
              { title: "Mango", value: "mango" },
            ]}
            selected={selected2}
            setSelected={setSelected2}
            disabled
          />
        </Container>

        <Container gap={5} align={"flex-start"}>
          <p>{"with icons"}</p>
          <Switch
            tabs={[
              {
                title: "Apple",
                value: "apple",
                icon: <RiAppleFill />,
              },
              { title: "Orange", value: "orange", icon: <RiAndroidFill /> },
              { title: "Mango", value: "mango", icon: <RiWindowsFill /> },
            ]}
            selected={selected3}
            setSelected={setSelected3}
          />
        </Container>
      </Container>
    </>
  );
};

export default TabsPage;
