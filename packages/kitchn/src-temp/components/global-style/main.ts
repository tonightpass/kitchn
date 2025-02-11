import { css } from "styled-components";

export const mainCss = css`
  body {
    font-family:
      -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans",
      Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
    background-color: ${({ theme }) => theme.colors.layout.darkest};
  }

  option {
    background-color: ${({ theme }) => theme.colors.layout.darkest};
  }

  /* scrollbar */

  html,
  body {
    scrollbar-color: ${({ theme }) => theme.colors.layout.dark}
      ${({ theme }) => theme.colors.layout.darkest};
  }

  ::-webkit-scrollbar {
    width: 5px;
    /* for vertical scrollbars */
    height: 5px;
    /* for horizontal scrollbars */
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.layout.dark};
    height: 5px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track-piece {
    height: 30px;
  }

  /* fonts */

  body,
  input,
  button,
  textarea,
  select,
  option {
    font-family: ${({ theme }) => theme.family.primary};
    font-size: ${({ theme }) => theme.size.normal};
    font-weight: ${({ theme }) => theme.weight.regular};
    text-align: left;
    color: ${({ theme }) => theme.colors.text.lightest};
    line-height: 1.25;
  }

  span {
    line-height: 1;
  }

  strong,
  b {
    font-weight: ${(props) => props.theme.weight.bold};
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }

  pre,
  code {
    font-family: ${({ theme }) => theme.family.monospace};

    span {
      font-family: ${({ theme }) => theme.family.monospace};
    }
  }
`;
