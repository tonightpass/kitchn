import {
  Footer,
  FooterGroup,
  FooterLink,
  FooterColumn,
  Text,
  Container,
} from "@tonightpass/kitchn";
import { NextPage } from "next";

const FooterPage: NextPage = () => {
  return (
    <>
      <Container gap={10}>
        <Text>{"default"}</Text>
        <Container gap={10}>
          <Footer>
            <FooterGroup title={"Company"}>
              <FooterLink href={"#"}>{"Home"}</FooterLink>
              <FooterLink href={"#"}>{"About"}</FooterLink>
              <FooterLink href={"#"}>{"Careers"}</FooterLink>
              <FooterLink href={"#"}>{"Partners"}</FooterLink>
              <FooterLink href={"#"}>{"Blog"}</FooterLink>
              <FooterLink href={"#"}>{"Next.js Conf"}</FooterLink>
            </FooterGroup>

            <FooterGroup title={"Product"}>
              <FooterLink href={"#"}>{"Pricing"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for GitHub"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for GitLab"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for Bitbucket"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass Edge Network"}</FooterLink>
              <FooterLink href={"#"}>{"Integrations Marketplace"}</FooterLink>
              <FooterLink href={"#"}>{"Command-Line"}</FooterLink>
            </FooterGroup>

            <FooterGroup title={"Education"}>
              <FooterLink href={"#"}>{"Documentation"}</FooterLink>
              <FooterLink href={"#"}>{"Guides"}</FooterLink>
              <FooterLink href={"#"}>{"Support"}</FooterLink>
            </FooterGroup>

            <FooterGroup title={"More"}>
              <FooterLink href={"#"}>{"Open Source Software"}</FooterLink>
              <FooterLink href={"#"}>{"Design System"}</FooterLink>
            </FooterGroup>
          </Footer>
        </Container>

        <Text>{"multi-group columns"}</Text>
        <Container gap={10}>
          <Footer>
            <FooterGroup title={"Company"}>
              <FooterLink href={"#"}>{"Home"}</FooterLink>
              <FooterLink href={"#"}>{"About"}</FooterLink>
              <FooterLink href={"#"}>{"Careers"}</FooterLink>
              <FooterLink href={"#"}>{"Partners"}</FooterLink>
              <FooterLink href={"#"}>{"Blog"}</FooterLink>
              <FooterLink href={"#"}>{"Next.js Conf"}</FooterLink>
            </FooterGroup>

            <FooterGroup title={"Product"}>
              <FooterLink href={"#"}>{"Pricing"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for GitHub"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for GitLab"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for Bitbucket"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass Edge Network"}</FooterLink>
              <FooterLink href={"#"}>{"Integrations Marketplace"}</FooterLink>
              <FooterLink href={"#"}>{"Command-Line"}</FooterLink>
            </FooterGroup>

            <FooterColumn>
              <FooterGroup title={"Education"}>
                <FooterLink href={"#"}>{"Documentation"}</FooterLink>
                <FooterLink href={"#"}>{"Guides"}</FooterLink>
                <FooterLink href={"#"}>{"Support"}</FooterLink>
              </FooterGroup>

              <FooterGroup title={"More"}>
                <FooterLink href={"#"}>{"Open Source Software"}</FooterLink>
                <FooterLink href={"#"}>{"Design System"}</FooterLink>
              </FooterGroup>
            </FooterColumn>
          </Footer>
        </Container>

        <Text>{"subfooter"}</Text>
        <Container gap={10}>
          <Footer
            subfooter={"Copyright © onRuntime 2023. All rights reserved."}
          >
            <FooterGroup title={"Company"}>
              <FooterLink href={"#"}>{"Home"}</FooterLink>
              <FooterLink href={"#"}>{"About"}</FooterLink>
              <FooterLink href={"#"}>{"Careers"}</FooterLink>
              <FooterLink href={"#"}>{"Partners"}</FooterLink>
              <FooterLink href={"#"}>{"Blog"}</FooterLink>
              <FooterLink href={"#"}>{"Next.js Conf"}</FooterLink>
            </FooterGroup>

            <FooterGroup title={"Product"}>
              <FooterLink href={"#"}>{"Pricing"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for GitHub"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for GitLab"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass for Bitbucket"}</FooterLink>
              <FooterLink href={"#"}>{"Tonight Pass Edge Network"}</FooterLink>
              <FooterLink href={"#"}>{"Integrations Marketplace"}</FooterLink>
              <FooterLink href={"#"}>{"Command-Line"}</FooterLink>
            </FooterGroup>

            <FooterGroup title={"Education"}>
              <FooterLink href={"#"}>{"Documentation"}</FooterLink>
              <FooterLink href={"#"}>{"Guides"}</FooterLink>
              <FooterLink href={"#"}>{"Support"}</FooterLink>
            </FooterGroup>

            <FooterGroup title={"More"}>
              <FooterLink href={"#"}>{"Open Source Software"}</FooterLink>
              <FooterLink href={"#"}>{"Design System"}</FooterLink>
            </FooterGroup>
          </Footer>
        </Container>
      </Container>
    </>
  );
};

export default FooterPage;
