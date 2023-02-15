import { Sandpack } from "@codesandbox/sandpack-react";
import kitchen, { Container, useTheme } from "@tonightpass/kitchen";

const Render: React.FC = () => {
  const { theme } = useTheme();

  const code = `import { KitchenProvider, Container, Button } from "@tonightpass/kitchen";

import "@tonightpass/kitchen/fonts.css";

export default function App() {
  return (
    <KitchenProvider>
      <Container h={"100vh"} align={"center"} justify={"center"}>
        <Button>Button</Button>
      </Container>
    </KitchenProvider>
  );
}`;

  return (
    <StyledContainer id={"render"} section>
      <Sandpack
        template={"react-ts"}
        theme={theme.id === 2 ? "light" : "dark"}
        files={{
          "/App.tsx": code,
        }}
        customSetup={{
          dependencies: {
            "@tonightpass/kitchen": "1.0.0",
            next: "latest", // TODO: remove this after @tonightpass/kitchen is published
          },
        }}
      />
    </StyledContainer>
  );
};

const StyledContainer = kitchen(Container)`
  font-family: ${({ theme }) => theme.family.monospace};
  font-size: 14px;
  body, div, span, input, button, textarea, select, option {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default Render;
