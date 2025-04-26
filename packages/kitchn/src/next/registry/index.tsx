import { useServerInsertedHTML } from "next/navigation";
import React from "react";

import { ServerStyleSheet, StyleSheetManager } from "../../styled-components";

export type KitchnRegistryProps = {
  children?: React.ReactNode;
};

export const KitchnRegistry: React.FC<KitchnRegistryProps> = ({
  children,
}: KitchnRegistryProps) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet(),
  );

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
