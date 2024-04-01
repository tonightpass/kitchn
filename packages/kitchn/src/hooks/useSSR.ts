import React from "react";

import { isBrowser } from "../utils/isBrowser";

export type SSRState = {
  isBrowser: boolean;
  isServer: boolean;
};

export const useSSR = (): SSRState => {
  const [browser, setBrowser] = React.useState<boolean>(false);
  React.useEffect(() => {
    setBrowser(isBrowser());
  }, []);

  return {
    isBrowser: browser,
    isServer: !browser,
  };
};
