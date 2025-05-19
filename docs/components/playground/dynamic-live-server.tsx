import { useTheme } from "kitchn";
import React from "react";

import EditorServer from "./editor-server";

export interface Props {
  code: string;
  scope: {
    [key: string]: unknown;
  };
}

const DynamicLiveServer: React.FC<Props> = ({ code }) => {
  const { theme } = useTheme();

  return (
    <>
      <div className={"wrapper"}>
        <div className={"preview"}>
          <pre>{code}</pre>
        </div>
        <div className={"live-error"} />
      </div>
      <EditorServer code={code} />
      <style jsx>{`
        .wrapper {
          width: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .wrapper > .preview {
          width: 100%;
          background-color: transparent;
          font-family: ${theme.family.monospace};
          font-size: ${theme.size.small};
          white-space: pre-wrap;
          color: ${theme.colors.text.light};
        }
        .wrapper > .live-error {
          padding: 10px 12px 0 12px;
          margin-bottom: 0;
          border: 2px ${theme.colors.accent.danger} dotted;
          border-radius: 10px;
          color: ${theme.colors.accent.danger};
          font-size: 13px;
          display: none;
        }
      `}</style>
    </>
  );
};

export default DynamicLiveServer;
