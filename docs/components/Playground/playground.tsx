import React from "react";
import dynamic from "next/dynamic";
import { Skeleton, useTheme } from "@tonightpass/kitchen";

const DynamicLive: React.ComponentType<{
  code: PlaygroundProps["code"];
  scope: PlaygroundProps["scope"];
}> = dynamic(() => import("./dynamic-live"), {
  ssr: false,
  loading: () => <Skeleton width="100%" height={100} />,
});

export type PlaygroundProps = {
  title?: React.ReactNode | string;
  desc?: React.ReactNode | string;
  code: string;
  scope: {
    [key: string]: unknown;
  };
};

const defaultProps = {
  desc: "",
  code: "",
  bindings: {},
};

const Playground: React.FC<PlaygroundProps> = React.memo(
  ({ code: inputCode, scope }: PlaygroundProps & typeof defaultProps) => {
    const { theme } = useTheme();
    const code = inputCode.trim();

    return (
      <>
        <div className="playground">
          <DynamicLive code={code} scope={scope} />
          <style jsx>{`
            .playground {
              margin-top: 20px;
              width: 100%;
              border-radius: 8px;
              border: 1px solid ${theme.colors.layout.dark};
              overflow: hidden;
            }
          `}</style>
        </div>
      </>
    );
  }
);

Playground.defaultProps = defaultProps;
Playground.displayName = "Playground";
export default Playground;
