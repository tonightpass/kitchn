import GlobalStyle from "@components/GlobalStyle";
import { KitchnProvider } from "kitchn";
import { AppProps } from "next/app";
import { useTheme as useNextraTheme } from "nextra-theme-docs";

import "kitchn/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  const { resolvedTheme } = useNextraTheme();

  return (
    <KitchnProvider
      forcedTheme={resolvedTheme}
      attribute={"class"}
      dangerouslyDisableNextThemeProvider
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </KitchnProvider>
  );
};

export default App;
