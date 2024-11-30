const path = require('path');

module.exports = async ({ config }) => {
  // Add support for TypeScript paths
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../packages/kitchn/src'),
  };

  // Add support for styled-components
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        ['react-app', { flow: false, typescript: true }],
        require.resolve('@babel/preset-typescript'),
      ],
      plugins: [
        require.resolve('babel-plugin-styled-components'),
      ],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
