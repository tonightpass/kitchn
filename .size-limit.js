const modifyWebpackConfig = (config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        path: require.resolve("path-browserify"),
      },
    },
  };
};

module.exports = [
  {
    path: "packages/kitchen/dist/tonightpass-kitchen.cjs.prod.js",
    limit: "1 s",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/dist/tonightpass-kitchen.esm.js",
    limit: "1 s",
    modifyWebpackConfig,
  },
];
