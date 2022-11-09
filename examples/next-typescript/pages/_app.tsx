import { KitchenProvider } from "@tonightpass/kitchen";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchenProvider>
      <Component {...pageProps} />
    </KitchenProvider>
  );
};

export default App;
