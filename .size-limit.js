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
      "react-native-remix-icon": true,
    },
  };
};

module.exports = [
  {
    path: "packages/kitchn/dist/index.cjs.js",
  },
  {
    path: "packages/kitchn/dist/index.esm.js",
  },
  {
    path: "packages/kitchn/dist/next/index.cjs.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchn/dist/next/index.esm.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchn/dist/native/index.cjs.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchn/dist/native/index.esm.js",
    modifyWebpackConfig,
  },
];
