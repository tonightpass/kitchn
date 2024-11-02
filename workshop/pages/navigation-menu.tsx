import { Container, Text, NavigationMenu } from "kitchn";
import { NextPage } from "next";
import React from "react";

const NavigationMenuPage: NextPage = () => {
  return (
    <Container
      gap={15}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Container gap={"normal"} mt={"extraLarge"}>
        <Text>{"default"}</Text>
        <Container>
          <NavigationMenu.Container>
            <ul>
              <li>
                <button>{"Products"}</button>
                <div>
                  <ul>
                    <li>
                      <span>{"DX Platform"}</span>
                      <ul>
                        <li>{"Design"}</li>
                        <li>{"Develop"}</li>
                        <li>{"Deploy"}</li>
                      </ul>
                    </li>
                    <li>
                      <span>{"Managed Infrastructure"}</span>
                      <ul>
                        <li>{"Cloud"}</li>
                        <li>{"On-Prem"}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>{"Solutions"}</li>
              <li>
                <a href={"#"}>{"GitHub"}</a>
              </li>
            </ul>
          </NavigationMenu.Container>
        </Container>
      </Container>
    </Container>
  );
};

export default NavigationMenuPage;
