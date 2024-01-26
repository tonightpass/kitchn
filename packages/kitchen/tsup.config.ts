import { defineConfig, Options } from "tsup";

const config: Options = {
  entry: [
    "src/index.ts",
    "src/next/index.ts",
    // "src/native/index.ts"
  ],
  splitting: false,
  sourcemap: true,
  clean: true,
  platform: "node",
  dts: true,
  minify: true,
  treeshake: true,
};

export default defineConfig(config);
