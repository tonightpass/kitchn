import { PrismTheme } from "prism-react-renderer";
import { DefaultTheme } from "@tonightpass/kitchen";

const makeCodeTheme = (theme: DefaultTheme): PrismTheme => ({
  plain: {
    backgroundColor: theme.colors.layout.darkest,
    color: theme.colors.text.lightest,
    fontWeight: "400",
    fontStyle: "normal",
    fontFamily: theme.family.monospace,
    fontSize: ".875rem",
    textRendering: "geometricPrecision",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#B362FF",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#3498db",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 1,
      },
    },
    {
      types: ["tag", "operator"],
      style: {
        color: "#9EFFFF",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#FF628C",
      },
    },
    {
      types: ["property", "function", "constant"],
      style: {
        color: "#FAD000",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#FAD000",
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
      ],
      style: {
        color: "#2980b9",
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#2ecc71",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#FF9D00",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["language-javascript", "script"],
      style: {
        color: theme.colors.accent.success,
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
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
        color: "#c4b9fe",
      },
    },
  ],
});

export default makeCodeTheme;
