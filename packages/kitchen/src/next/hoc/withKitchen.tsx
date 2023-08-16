import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import React from "react";

import KitchenProvider, {
  KitchenProviderProps,
} from "../../components/Provider";
import { PREFIX } from "../../constants";
import themes from "../../themes";
import { parseCookieString } from "../../utils/_collections";

export type NextAppInitialProps = AppInitialProps & {
  cookies: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
};

export type NextAppProps = {
  (_props: AppProps): JSX.Element;
  getInitialProps?: (appContext: AppContext) => Promise<NextAppInitialProps>;
};

const withKitchen = (
  nextApp: NextAppProps,
  kitchenProviderProps?: KitchenProviderProps,
) => {
  nextApp.getInitialProps = async (context: AppContext) => {
    const ctx = await App.getInitialProps(context);

    const cookies = parseCookieString(context.ctx.req?.headers.cookie || "");

    return { ...ctx, cookies };
  };

  const WrappedApp = (props: AppProps & NextAppInitialProps) => {
    return (
      <KitchenProvider
        theme={themes[props.cookies[`${PREFIX}-theme`] as keyof typeof themes]}
        {...kitchenProviderProps}
      >
        {React.createElement(nextApp, props)}
      </KitchenProvider>
    );
  };

  WrappedApp.getInitialProps = nextApp.getInitialProps;

  return WrappedApp;
};

export default withKitchen;
