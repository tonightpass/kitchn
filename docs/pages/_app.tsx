import { KitchenProvider } from "@tonightpass/kitchen";
import { AppProps } from "next/app";
import GlobalStyle from "@components/GlobalStyle";

import "@tonightpass/kitchen/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchenProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </KitchenProvider>
  );
};

export default App;
