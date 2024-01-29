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
    path: "packages/kitchen/dist/index.cjs.js",
  },
  {
    path: "packages/kitchen/dist/index.esm.js",
  },
  {
    path: "packages/kitchen/dist/next/index.cjs.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/dist/next/index.esm.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/dist/native/index.cjs.js",
    modifyWebpackConfig,
  },
  {
    path: "packages/kitchen/dist/native/index.esm.js",
    modifyWebpackConfig,
  },
];
