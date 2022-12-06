import { KitchenProvider } from "@tonightpass/kitchen";
import { AppProps } from "next/app";
import GlobalStyle from "@components/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchenProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </KitchenProvider>
  );
};

export default App;
