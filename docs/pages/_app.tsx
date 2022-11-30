import { KitchenProvider } from "@tonightpass/kitchen";
import { AppProps } from "next/app";

import "../styles/custom.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <KitchenProvider>
      <Component {...pageProps} />
    </KitchenProvider>
  );
};

export default App;
