const modifyWebpackConfig = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
    externals: {
      "react-native": true,
    },
  };
};

module.exports = [
  {
    name: "Kitchen (CJS)",
    path: "packages/kitchen/dist/index.js",
    modifyWebpackConfig,
  },
  {
    name: "Kitchen (ESM)",
    path: "packages/kitchen/dist/index.mjs",
    modifyWebpackConfig,
  },
  {
    name: "Kitchen Next (CJS)",
    path: "packages/kitchen/dist/next/index.js",
    modifyWebpackConfig,
  },
  {
    name: "Kitchen Next (ESM)",
    path: "packages/kitchen/dist/next/index.mjs",
    modifyWebpackConfig,
  },
];
