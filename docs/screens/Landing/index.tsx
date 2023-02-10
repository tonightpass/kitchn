import { Button, Container, Link, Text, useTheme } from "@tonightpass/kitchen";
import { Sandpack } from "@codesandbox/sandpack-react";
import Showcase from "components/Landing/Showcase";

const Landing: React.FC = () => {
  const { theme } = useTheme();
  const code = `import { KitchenProvider, Container, Button } from "@tonightpass/kitchen";

import "@tonightpass/kitchen/fonts.css";

export default function App() {
  return (
    <KitchenProvider>
      <Container h={"100%"} align={"center"}>
        <Button>Button</Button>
      </Container>
    </KitchenProvider>
  );
}`;

  return (
    <Container maxW={"laptop"} mx={"auto"} px={"normal"}>
      <Container
        id={"header"}
        maxW={"mobile"}
        mx={"auto"}
        py={"extraLarge"}
        header
      >
        <Container align={"center"}>
          <Text
            align={"center"}
            size={"extraTitle"}
            weight={"black"}
            accent={"primary"}
            h1
          >
            Tonight Pass
          </Text>
          <Text align={"center"} size={"title"} weight={"bold"} h2>
            delicious react styled-components
          </Text>
        </Container>
        <Text
          size={"medium"}
          mt={"normal"}
          weight={"medium"}
          align={"center"}
          color={"darker"}
        >
          Design UI like Tonight Pass in React or React Native with optimized
          and customizable styled-components.
        </Text>
        <Container row gap={"normal"} justify={"center"} mt={"large"}>
          <Button forwardedAs={Link} href={"/docs"}>
            Get started
          </Button>
          <Button
            type={"dark"}
            forwardedAs={Link}
            href={"https://github.com/tonightpass/kitchen"}
          >
            Contribute
          </Button>
        </Container>
      </Container>
      <Container id={"render"} section>
        <Sandpack
          template="react-ts"
          theme={theme.id === 2 ? "light" : "dark"}
          files={{
            "/App.tsx": code,
          }}
          customSetup={{
            dependencies: {
              "@tonightpass/kitchen": "latest",
              next: "latest", // TODO: remove this after @tonightpass/kitchen is published
            },
          }}
        />
      </Container>
      <Showcase />
    </Container>
  );
};

export default Landing;
