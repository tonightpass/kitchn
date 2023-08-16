import { withKitchen } from "@tonightpass/kitchen/next";
import { AppProps } from "next/app";

import "@tonightpass/kitchen/fonts.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withKitchen(App);
