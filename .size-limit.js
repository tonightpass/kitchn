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
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/dist/tonightpass-kitchen.esm.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/next/dist/tonightpass-kitchen-next.cjs.prod.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/next/dist/tonightpass-kitchen-next.esm.js",
    modifyWebpackConfig,
  },
];
