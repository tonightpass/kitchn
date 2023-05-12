# Linting

The Kitchen repository runs [ESLint](https://eslint.org) and [Prettier](https://prettier.io) to lint and format all code and documentation.

To lint all code you can run:

```sh
pnpm lint
```

If you get errors, you can run the ESLint and Prettier auto-fix using:

```sh
pnpm lint-fix
```

Not all rules can be auto-fixed, those require manual changes.

## ESLint

We recommend installing the [ESLint plugin for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

You can find the enabled rules in the [ESLint config](../../.eslintrc.json).

## Prettier

We recommend installing the [Prettier plugin for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
