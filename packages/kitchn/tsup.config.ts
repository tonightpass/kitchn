import { defineConfig, Options } from "tsup";

const config: Options = {
  format: ["cjs", "esm"],
  entry: [
    "src/index.ts",
    "src/next/index.ts",
    "src/native/index.ts",
    "src/logos/index.ts",
  ],
  splitting: true,
  sourcemap: true,
  clean: false,
  platform: "browser",
  dts: true,
  minify: true,
  treeshake: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
      mjs: `.${format}.js`,
    };
  },
};

export default defineConfig(config);
