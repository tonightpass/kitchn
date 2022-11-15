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
    path: "packages/kitchen/dist/tonightpass-kitchen.cjs.prod.js",
    limit: "1.25 s",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/dist/tonightpass-kitchen.esm.js",
    limit: "1.25 s",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/next/dist/tonightpass-kitchen-next.cjs.prod.js",
    limit: "1 s",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/next/dist/tonightpass-kitchen-next.esm.js",
    limit: "1 s",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/native/dist/tonightpass-kitchen-native.cjs.prod.js",
    limit: "1.25 s",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/native/dist/tonightpass-kitchen-native.esm.js",
    limit: "1.25 s",
    modifyWebpackConfig,
  },
];
