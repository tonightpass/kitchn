import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
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
        theme={theme.id === 2 ? "light" : nightOwl}
        files={{
          "/App.tsx": code,
        }}
        customSetup={{
          dependencies: {
            "@tonightpass/kitchen": "latest",
          },
        }}
      />
    </StyledContainer>
  );
};

const StyledContainer = kitchen(Container)`
  border-radius: ${({ theme }) => theme.radius.square};
  overflow: hidden;
  font-family: ${({ theme }) => theme.family.monospace};
  font-size: 14px;
  body, div, span, input, button, textarea, select, option {
    font-family: inherit;
    font-size: inherit;
  }
`;

export default Render;
