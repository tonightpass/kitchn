import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/next/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: false,
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "react-dom"],
  loader: {
    ".js": "jsx",
  },
});
