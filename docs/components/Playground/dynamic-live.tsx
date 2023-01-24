import { useTheme } from "@tonightpass/kitchen";
import React from "react";
import { LivePreview, LiveProvider, LiveError } from "react-live";
import makeCodeTheme from "./code-theme";
import Editor from "./editor";
import kitchenScope from "./scope";

export interface Props {
  code: string;
  scope: {
    [key: string]: unknown;
  };
}

const DynamicLive: React.FC<Props> = ({ code, scope }) => {
  const { theme } = useTheme();
  const codeTheme = makeCodeTheme(theme);
  return (
    <LiveProvider
      code={code}
      scope={{ ...scope, ...kitchenScope }}
      theme={codeTheme}
    >
      <div className="wrapper">
        <LivePreview />
        <LiveError className="live-error" />
      </div>
      <Editor code={code} />
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .wrapper > :global(div) {
          width: 100%;
          background-color: transparent;
        }
        .wrapper > :global(.live-error) {
          padding: 10px 12px 0 12px;
          margin-bottom: 0;
          border: 2px ${theme.colors.accent.danger} dotted;
          border-radius: 10px;
          color: ${theme.colors.accent.danger};
          font-size: 13px;
        }
      `}</style>
    </LiveProvider>
  );
};

export default DynamicLive;
