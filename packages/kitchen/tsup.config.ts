import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/next/index.ts", "src/native/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "react-dom", "react-native"],
  loader: {
    ".js": "jsx",
  },
  platform: "node",
  target: "node14",
});
