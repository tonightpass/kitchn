import React from "react";
import { RiCheckLine, RiFileCopyLine } from "react-icons/ri";
import styled from "styled-components";

import { withDecorator } from "../../hoc";
import { useClipboard, useToasts } from "../../hooks";
import { AccentColors, KitchnComponent } from "../../types";
import Container, { ContainerProps } from "../Container";
import Icon from "../Icon";
import Text, { TextProps } from "../Text";

type Props = {
  text: string | string[];
  prompt?: boolean;
  type?: keyof AccentColors;
  onCopy?: (text: string) => void;
};

export type SnippetProps = KitchnComponent<Props, ContainerProps>;

const SnippetComponent = styled(
  ({ text, prompt = true, onCopy, ...props }: SnippetProps) => {
    const { copy } = useClipboard();
    const { setToast } = useToasts();
    const [isCopied, setIsCopied] = React.useState(false);

    const copyHandler = (event: React.MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();
      copy(Array.isArray(text) ? text.join("\n") : text);
      onCopy && onCopy(Array.isArray(text) ? text.join("\n") : text);
      setToast({ text: "Code copied." });
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return (
      <Container
        py={"small"}
        pl={"small"}
        pr={32 + 15}
        br={"square"}
        {...props}
        position={"relative"}
      >
        {Array.isArray(text) ? (
          text.map((t, i) => (
            <SnippetLine
              pre
              monospace
              size={"compact"}
              prompt={prompt}
              color={"inherit"}
              lineHeight={1.5}
              key={i}
            >
              {t}
            </SnippetLine>
          ))
        ) : (
          <SnippetLine
            pre
            monospace
            size={"compact"}
            prompt={prompt}
            color={"inherit"}
            lineHeight={1.5}
          >
            {text}
          </SnippetLine>
        )}

        <Container
          position={"absolute"}
          cursor={"pointer"}
          h={32}
          w={32}
          top={"50%"}
          right={"tiny"}
          align={"center"}
          justify={"center"}
          transform={"translateY(-50%)"}
          onClick={copyHandler}
          title={"Copy Code"}
        >
          <Text color={"inherit"} span>
            {isCopied ? (
              <Icon icon={RiCheckLine} color={"inherit"} />
            ) : (
              <Icon icon={RiFileCopyLine} color={"inherit"} />
            )}
          </Text>
        </Container>
      </Container>
    );
  },
)`
  color: ${({ theme, type }) => {
    switch (type) {
      case "danger":
      case "warning":
      case "info":
      case "success":
      case "secondary":
        return theme.colors.accent.light;
      case "primary":
      default:
        return theme.colors.text.lightest;
    }
  }};

  background-color: ${({ theme, type }) => {
    switch (type) {
      case "danger":
        return theme.colors.accent.danger;
      case "warning":
        return theme.colors.accent.warning;
      case "info":
        return theme.colors.accent.info;
      case "success":
        return theme.colors.accent.success;
      case "secondary":
        return theme.colors.layout.light;
      case "primary":
      default:
        return theme.colors.layout.darkest;
    }
  }};

  border: 1px solid
    ${({ theme, type }) => {
      switch (type) {
        case "danger":
          return theme.colors.accent.danger;
        case "warning":
          return theme.colors.accent.warning;
        case "info":
          return theme.colors.accent.info;
        case "success":
          return theme.colors.accent.success;
        case "secondary":
          return theme.colors.layout.light;
        case "primary":
        default:
          return theme.colors.layout.dark;
      }
    }};
`;

export type SnippetLineProps = TextProps & {
  prompt?: boolean;
};

export const SnippetLine = styled(
  ({ prompt: _prompt, ...props }: SnippetLineProps) => <Text {...props} />,
)<SnippetLineProps>`
  &::before {
    content: "${(props) => (props.prompt ? "$ " : "")}";
    user-select: none;
  }
`;

SnippetComponent.displayName = "KitchnSnippet";
export const Snippet = withDecorator(SnippetComponent);
export default Snippet;
