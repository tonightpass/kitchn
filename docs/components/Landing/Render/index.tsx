import { Sandpack } from "@codesandbox/sandpack-react";
import { Container, useTheme } from "@tonightpass/kitchen";

const Render: React.FC = () => {
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
  );
};

export default Render;
