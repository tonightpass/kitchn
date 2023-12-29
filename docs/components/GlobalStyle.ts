import {
  convertRGBToRGBA,
  createGlobalStyle,
  Input,
} from "@tonightpass/kitchen";

const GlobalStyle = createGlobalStyle`
  html body {
    background: ${({ theme }) => theme.colors.layout.darkest};
  }

  .nextra-scrollbar::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .nextra-scrollbar:hover::-webkit-scrollbar-thumb {
    background-clip: border-box;
  }

  html.dark {
    body {
      background: ${({ theme }) => theme.colors.layout.darkest};
    }

    .dark\\:nx-bg-dark {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.layout.darkest};
      background-color: ${({ theme }) => theme.colors.layout.darkest};
    }

    .dark\\:nx-bg-neutral-800 {
      background-color: ${({ theme }) => theme.colors.layout.darker};
    }

    .dark\\:nx-bg-neutral-900 {
      background-color: ${({ theme }) => theme.colors.layout.darker};
    }

    .dark\\:nx-border-neutral-800, .dark\\.nx-border-neutral-200\/70 {
      content: "example";
      border-color: hsl(var(--nextra-primary-hue)100% 94%/.1)
    }

    .dark\\::before\\:nx-bg-neutral-800::before {
      background-color: hsl(var(--nextra-primary-hue)100% 94%/.1)
    }

    .dark\\:focus\\:nx-bg-dark:focus {
      background-color: hsl(var(--nextra-primary-hue)100% 94%/.1)
    }

    .nextra-sidebar-container {
      background-color: ${({ theme }) => theme.colors.layout.darkest};
    }
    
    .nextra-nav-container-blur {
      background-color: ${({ theme }) =>
        convertRGBToRGBA(theme.colors.layout.darker, 0.8)} !important;
    }
    
    .nextra-search ul {
      background-color: ${({ theme }) => theme.colors.layout.darker};
    }

    .dark\\:nx-text-neutral-500 {
      color: ${({ theme }) => theme.colors.text.light};
    }

    .nx-bg-white {
      background-color: ${({ theme }) => theme.colors.layout.darkest};
    }

    kbd {
      span {
        color: inherit;
      }
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a:hover {
    filter: brightness(1) !important;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0 solid ${({ theme }) => theme.colors.layout.dark}
  }

  ${Input}:focus-visible {
    box-shadow: none;
  }

  .prism-code span {
    font-size: ${({ theme }) => theme.size.small} !important;
  }
`;

export default GlobalStyle;
