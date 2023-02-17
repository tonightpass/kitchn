import { getSandpackCssText } from "@codesandbox/sandpack-react";
import { KitchenDocument } from "@tonightpass/kitchen/next";
import { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends KitchenDocument {
  render() {
    return (
      <Html>
        <Head>
          <style
            dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
            id="sandpack"
            key="sandpack-css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
