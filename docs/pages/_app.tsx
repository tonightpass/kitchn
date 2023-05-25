import { AppProps } from "next/app";
import GlobalStyle from "@components/GlobalStyle";

import "@tonightpass/kitchen/fonts.css";
import { withKitchen } from "@tonightpass/kitchen/next";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default withKitchen(App);
