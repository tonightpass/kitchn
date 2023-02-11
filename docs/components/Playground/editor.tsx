import { Icon, useClipboard, useTheme, useToasts } from "@tonightpass/kitchen";
import React, { useState } from "react";
import { LiveEditor } from "react-live";
import { RiArrowRightSLine, RiFileCopyLine } from "react-icons/ri";

interface Props {
  code: string;
}

const Editor: React.FC<Props> = ({ code }) => {
  const { theme } = useTheme();
  const { copy } = useClipboard();
  const [visible, setVisible] = useState(false);
  const { setToast } = useToasts();
  const clickHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setVisible(!visible);
  };

  const copyHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    copy(code);
    setToast({ text: "Code copied." });
  };

  return (
    <div className="editor">
      <details open={visible}>
        <summary onClick={clickHandler}>
          <div className="summary-safari">
            <div className="action">
              <span className="arrow">
                <Icon icon={RiArrowRightSLine} />
              </span>
              <span>{"Code Editor"}</span>
            </div>
            <div className="action">
              {visible && (
                <span
                  className="copy"
                  onClick={copyHandler}
                  title={"Copy Code"}
                >
                  <Icon icon={RiFileCopyLine} />
                </span>
              )}
            </div>
          </div>
        </summary>
        <div className="area">
          <LiveEditor />
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
          transform: rotate(${visible ? 90 : 0}deg);
          display: inline-flex;
          align-items: center;
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
        }

        .copy i {
          display: inline-flex;
          align-items: center;
          color: ${theme.colors.text.light};
          transition: color 0.2s ease;
        }

        .copy:hover i {
          color: ${theme.colors.text.lightest};
        }
      `}</style>
    </div>
  );
};

export default Editor;
