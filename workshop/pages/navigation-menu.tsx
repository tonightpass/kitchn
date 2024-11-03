import { Container, Text, NavigationMenu } from "kitchn";
import { NextPage } from "next";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

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
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Button
                  suffix={<NavigationMenu.Icon icon={RiArrowDropDownLine} />}
                >
                  {"Products"}
                </NavigationMenu.Button>
                <NavigationMenu.Content>
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
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Button
                  suffix={<NavigationMenu.Icon icon={RiArrowDropDownLine} />}
                >
                  {"Solutions"}
                </NavigationMenu.Button>
                <NavigationMenu.Content>
                  <li>
                    <span>{"Use Cases"}</span>
                    <ul>
                      <li>{"Retail"}</li>
                      <li>{"Healthcare"}</li>
                      <li>{"Finance"}</li>
                    </ul>
                  </li>
                  <li>
                    <span>{"Industries"}</span>
                    <ul>
                      <li>{"Retail"}</li>
                      <li>{"Healthcare"}</li>
                      <li>{"Finance"}</li>
                    </ul>
                  </li>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <a href={"#"}>
                  <NavigationMenu.Button>{"Pricing"}</NavigationMenu.Button>
                </a>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Container>
        </Container>
      </Container>
    </Container>
  );
};

export default NavigationMenuPage;
