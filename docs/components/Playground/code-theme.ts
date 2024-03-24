import { DefaultTheme } from "@tonightpass/kitchn";
import { PrismTheme } from "prism-react-renderer";

const makeCodeTheme = (theme: DefaultTheme): PrismTheme => ({
  plain: {
    backgroundColor: theme.colors.layout.darkest,
    color: theme.colors.text.lightest,
    fontWeight: "400",
    fontStyle: "normal",
  },
  styles: [
    {
      types: [
        "comment",
        "prolog",
        "doctype",
        "cdata",
        "punctuation",
        "attr-name",
        "operator",
        "keyword",
      ],
      style: {
        color: theme.colors.text.dark,
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 1,
      },
    },
    {
      types: ["tag"],
      style: {
        color: theme.colors.accent.primary,
      },
    },
    {
      types: ["property", "function", "constant"],
      style: {
        color: theme.colors.accent.success,
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: theme.colors.accent.warning,
      },
    },
    {
      types: [
        "boolean",
        "entity",
        "url",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable",
        "imports",
        "class-name",
        "property-access",
        "string",
        "attr-value",
        "number",
        "language-javascript",
      ],
      style: {
        color: theme.colors.text.lightest,
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
        color: theme.colors.accent.danger,
      },
    },
    {
      types: ["script"],
      style: {
        color: theme.colors.accent.success,
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
        color: theme.colors.accent.success,
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: theme.colors.accent.warning,
      },
    },
  ],
});

export default makeCodeTheme;
