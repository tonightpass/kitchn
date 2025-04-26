import { defineConfig, type Options } from "tsup";

const config: Options = {
  format: ["cjs", "esm"],
  entry: [
    "src/index.ts",
    "src/next/index.ts",
    "src/next/document/index.tsx",
    "src/next/registry/index.tsx",
    "src/native/index.ts",
    "src/logos/index.ts",
  ],
  splitting: true,
  treeshake: false, // https://github.com/egoist/tsup/issues/835
  sourcemap: true,
  clean: false,
  platform: "browser",
  dts: true,
  minify: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
      mjs: `.${format}.js`,
    };
  },
  esbuildOptions: (options) => {
    options.banner = {
      // eslint-disable-next-line quotes
      js: '"use client"',
    };
  },
};

export default defineConfig(config);
