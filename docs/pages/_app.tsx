import GlobalStyle from "@components/GlobalStyle";
import { AppProps } from "next/app";

import "@tonightpass/kitchen/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
