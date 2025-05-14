import { useTheme } from "kitchn";
import React from "react";

interface Props {
  code: string;
}

const EditorServer: React.FC<Props> = ({ code }) => {
  const { theme } = useTheme();

  return (
    <div className={"editor"}>
      <details>
        <summary>
          <div className={"summary-safari"}>
            <div className={"action"}>
              <span className={"arrow"}>{"↓"}</span>
              <span>{"Code Editor"}</span>
            </div>
            <div className={"action"} />
          </div>
        </summary>
        <div className={"area"}>
          <pre>{code}</pre>
        </div>
      </details>

      <style jsx>{`
        .editor {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        details {
          transition: all 0.2s ease;
          overflow: hidden;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        details summary::-webkit-details-marker {
          display: none;
        }

        summary {
          box-sizing: border-box;
          border-top: 1px solid ${theme.colors.layout.dark};
          border-radius: 0;
          color: ${theme.colors.text.light};
          width: 100%;
          list-style: none;
          user-select: none;
          outline: none;
        }

        .summary-safari {
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 2.875rem;
          padding: 0 10px;
        }

        summary {
          cursor: pointer;
        }

        .action {
          width: auto;
          display: flex;
          align-items: center;
          font-size: 0.8rem;
        }

        .area {
          position: relative;
          box-sizing: border-box;
          white-space: pre;
          font-family: ${theme.family.monospace};
          color: ${theme.colors.text.lightest};
          font-size: 1em;
          overflow: hidden;
          border-top: 1px solid ${theme.colors.layout.dark};
          padding: 10px;
        }

        .arrow {
          transition: all 0.2s ease;
          transform: rotate(0deg);
          display: inline-flex;
          align-items: center;
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }

        pre {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
        }
      `}</style>
    </div>
  );
};

export default EditorServer;
