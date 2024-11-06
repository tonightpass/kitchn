import { Container, Text, NavigationMenu, Link } from "kitchn";
import { NextPage } from "next";
import React from "react";
import {
  RiArrowDropDownLine,
  RiStoreLine,
  RiPencilRulerLine,
  RiCodeLine,
  RiRocketLine,
  RiCloudLine,
  RiServerLine,
  RiHospitalLine,
  RiBankLine,
} from "react-icons/ri";
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
                  suffix={
                    <NavigationMenu.ButtonIcon icon={RiArrowDropDownLine} />
                  }
                >
                  {"Products"}
                </NavigationMenu.Button>
                <NavigationMenu.Content>
                  <NavigationMenu.Section>
                    <NavigationMenu.SectionHeader>
                      {"DX Platform"}
                    </NavigationMenu.SectionHeader>
                    <NavigationMenu.SectionContent>
                      <Link href={"#"}>
                        <NavigationMenu.SectionItem>
                          <NavigationMenu.SectionItemIcon
                            icon={RiPencilRulerLine}
                          />
                          <Container>
                            <NavigationMenu.SectionItemName>
                              {"Design"}
                            </NavigationMenu.SectionItemName>
                            <NavigationMenu.SectionItemDescription>
                              {
                                "Create beautiful and intuitive user experiences"
                              }
                            </NavigationMenu.SectionItemDescription>
                          </Container>
                        </NavigationMenu.SectionItem>
                      </Link>

                      <Link href={"#"}>
                        <NavigationMenu.SectionItem>
                          <NavigationMenu.SectionItemIcon icon={RiCodeLine} />
                          <Container>
                            <NavigationMenu.SectionItemName>
                              {"Develop"}
                            </NavigationMenu.SectionItemName>
                            <NavigationMenu.SectionItemDescription>
                              {"Build robust and scalable applications"}
                            </NavigationMenu.SectionItemDescription>
                          </Container>
                        </NavigationMenu.SectionItem>
                      </Link>

                      <NavigationMenu.SectionItem>
                        <NavigationMenu.SectionItemIcon icon={RiRocketLine} />
                        <Container>
                          <NavigationMenu.SectionItemName>
                            {"Deploy"}
                          </NavigationMenu.SectionItemName>
                          <NavigationMenu.SectionItemDescription>
                            {"Ship your products with confidence"}
                          </NavigationMenu.SectionItemDescription>
                        </Container>
                      </NavigationMenu.SectionItem>
                    </NavigationMenu.SectionContent>
                  </NavigationMenu.Section>
                  <NavigationMenu.Section>
                    <NavigationMenu.SectionHeader>
                      {"Managed Infrastructure"}
                    </NavigationMenu.SectionHeader>
                    <NavigationMenu.SectionContent>
                      <NavigationMenu.SectionItem>
                        <NavigationMenu.SectionItemIcon icon={RiCloudLine} />
                        <Container>
                          <NavigationMenu.SectionItemName>
                            {"Cloud"}
                          </NavigationMenu.SectionItemName>
                          <NavigationMenu.SectionItemDescription>
                            {"Scalable cloud infrastructure solutions"}
                          </NavigationMenu.SectionItemDescription>
                        </Container>
                      </NavigationMenu.SectionItem>

                      <NavigationMenu.SectionItem>
                        <NavigationMenu.SectionItemIcon icon={RiServerLine} />
                        <Container>
                          <NavigationMenu.SectionItemName>
                            {"On-Prem"}
                          </NavigationMenu.SectionItemName>
                          <NavigationMenu.SectionItemDescription>
                            {"Secure on-premise deployment options"}
                          </NavigationMenu.SectionItemDescription>
                        </Container>
                      </NavigationMenu.SectionItem>
                    </NavigationMenu.SectionContent>
                  </NavigationMenu.Section>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Button
                  suffix={
                    <NavigationMenu.ButtonIcon icon={RiArrowDropDownLine} />
                  }
                >
                  {"Solutions"}
                </NavigationMenu.Button>
                <NavigationMenu.Content>
                  <NavigationMenu.Section>
                    <NavigationMenu.SectionHeader>
                      {"Use Cases"}
                    </NavigationMenu.SectionHeader>
                    <NavigationMenu.SectionContent>
                      <NavigationMenu.SectionContent>
                        <NavigationMenu.SectionItem>
                          <NavigationMenu.SectionItemIcon icon={RiStoreLine} />
                          <Container>
                            <NavigationMenu.SectionItemName>
                              {"Retail"}
                            </NavigationMenu.SectionItemName>
                            <NavigationMenu.SectionItemDescription>
                              {
                                "Helping retailers deliver a seamless shopping experience"
                              }
                            </NavigationMenu.SectionItemDescription>
                          </Container>
                        </NavigationMenu.SectionItem>

                        <NavigationMenu.SectionItem>
                          <NavigationMenu.SectionItemIcon
                            icon={RiHospitalLine}
                          />
                          <Container>
                            <NavigationMenu.SectionItemName>
                              {"Healthcare"}
                            </NavigationMenu.SectionItemName>
                            <NavigationMenu.SectionItemDescription>
                              {
                                "Revolutionizing patient care and medical services"
                              }
                            </NavigationMenu.SectionItemDescription>
                          </Container>
                        </NavigationMenu.SectionItem>

                        <NavigationMenu.SectionItem>
                          <NavigationMenu.SectionItemIcon icon={RiBankLine} />
                          <Container>
                            <NavigationMenu.SectionItemName>
                              {"Finance"}
                            </NavigationMenu.SectionItemName>
                            <NavigationMenu.SectionItemDescription>
                              {
                                "Empowering financial institutions with modern solutions"
                              }
                            </NavigationMenu.SectionItemDescription>
                          </Container>
                        </NavigationMenu.SectionItem>
                      </NavigationMenu.SectionContent>
                    </NavigationMenu.SectionContent>
                  </NavigationMenu.Section>
                  <NavigationMenu.Section>
                    <NavigationMenu.SectionHeader>
                      {"Industries"}
                    </NavigationMenu.SectionHeader>
                    <NavigationMenu.SectionContent>
                      <NavigationMenu.SectionItem>
                        <NavigationMenu.SectionItemIcon icon={RiHospitalLine} />
                        <Container>
                          <NavigationMenu.SectionItemName>
                            {"Healthcare"}
                          </NavigationMenu.SectionItemName>
                          <NavigationMenu.SectionItemDescription>
                            {"Transforming patient care delivery"}
                          </NavigationMenu.SectionItemDescription>
                        </Container>
                      </NavigationMenu.SectionItem>

                      <NavigationMenu.SectionItem>
                        <NavigationMenu.SectionItemIcon icon={RiBankLine} />
                        <Container>
                          <NavigationMenu.SectionItemName>
                            {"Finance"}
                          </NavigationMenu.SectionItemName>
                          <NavigationMenu.SectionItemDescription>
                            {"Innovative financial technology solutions"}
                          </NavigationMenu.SectionItemDescription>
                        </Container>
                      </NavigationMenu.SectionItem>
                    </NavigationMenu.SectionContent>
                  </NavigationMenu.Section>
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
