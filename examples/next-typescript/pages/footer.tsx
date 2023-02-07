import {
  Footer,
  FooterGroup,
  FooterLink,
  FooterColumn,
  Text,
  Container,
} from "@tonightpass/kitchen";
import { NextPage } from "next";

const FooterPage: NextPage = () => {
  return (
    <>
      <Container
        gap={10}
        style={{
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <Text>default</Text>
        <Container gap={10}>
          <Footer>
            <FooterGroup title="Company">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Next.js Conf</FooterLink>
            </FooterGroup>

            <FooterGroup title="Product">
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Vercel for GitHub</FooterLink>
              <FooterLink href="#">Vercel for GitLab</FooterLink>
              <FooterLink href="#">Vercel for Bitbucket</FooterLink>
              <FooterLink href="#">Vercel Edge Network</FooterLink>
              <FooterLink href="#">Integrations Marketplace</FooterLink>
              <FooterLink href="#">Command-Line</FooterLink>
            </FooterGroup>

            <FooterGroup title="Education">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Guides</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </FooterGroup>

            <FooterGroup title="More">
              <FooterLink href="#">Open Source Software</FooterLink>
              <FooterLink href="#">Design System</FooterLink>
            </FooterGroup>
          </Footer>
        </Container>

        <Text>light</Text>
        <Container gap={10}>
          <Footer light>
            <FooterGroup title="Company">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Next.js Conf</FooterLink>
            </FooterGroup>

            <FooterGroup title="Product">
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Vercel for GitHub</FooterLink>
              <FooterLink href="#">Vercel for GitLab</FooterLink>
              <FooterLink href="#">Vercel for Bitbucket</FooterLink>
              <FooterLink href="#">Vercel Edge Network</FooterLink>
              <FooterLink href="#">Integrations Marketplace</FooterLink>
              <FooterLink href="#">Command-Line</FooterLink>
            </FooterGroup>

            <FooterGroup title="Education">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Guides</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </FooterGroup>

            <FooterGroup title="More">
              <FooterLink href="#">Open Source Software</FooterLink>
              <FooterLink href="#">Design System</FooterLink>
            </FooterGroup>
          </Footer>
        </Container>

        <Text>multi-group columns</Text>
        <Container gap={10}>
          <Footer light>
            <FooterGroup title="Company">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Next.js Conf</FooterLink>
            </FooterGroup>

            <FooterGroup title="Product">
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Vercel for GitHub</FooterLink>
              <FooterLink href="#">Vercel for GitLab</FooterLink>
              <FooterLink href="#">Vercel for Bitbucket</FooterLink>
              <FooterLink href="#">Vercel Edge Network</FooterLink>
              <FooterLink href="#">Integrations Marketplace</FooterLink>
              <FooterLink href="#">Command-Line</FooterLink>
            </FooterGroup>

            <FooterColumn>
              <FooterGroup title="Education">
                <FooterLink href="#">Documentation</FooterLink>
                <FooterLink href="#">Guides</FooterLink>
                <FooterLink href="#">Support</FooterLink>
              </FooterGroup>

              <FooterGroup title="More">
                <FooterLink href="#">Open Source Software</FooterLink>
                <FooterLink href="#">Design System</FooterLink>
              </FooterGroup>
            </FooterColumn>
          </Footer>
        </Container>

        <Text>subfooter</Text>
        <Container gap={10}>
          <Footer subfooter="Copyright © Vercel 2020. All rights reserved.">
            <FooterGroup title="Company">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Next.js Conf</FooterLink>
            </FooterGroup>

            <FooterGroup title="Product">
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Vercel for GitHub</FooterLink>
              <FooterLink href="#">Vercel for GitLab</FooterLink>
              <FooterLink href="#">Vercel for Bitbucket</FooterLink>
              <FooterLink href="#">Vercel Edge Network</FooterLink>
              <FooterLink href="#">Integrations Marketplace</FooterLink>
              <FooterLink href="#">Command-Line</FooterLink>
            </FooterGroup>

            <FooterGroup title="Education">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Guides</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </FooterGroup>

            <FooterGroup title="More">
              <FooterLink href="#">Open Source Software</FooterLink>
              <FooterLink href="#">Design System</FooterLink>
            </FooterGroup>
          </Footer>
        </Container>
      </Container>
    </>
  );
};

export default FooterPage;
