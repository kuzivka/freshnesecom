const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@common': path.resolve(__dirname, './src/common'),
      '@store': path.resolve(__dirname, './src/store'),
      '@selectors': path.resolve(__dirname, './src/selectors'),
      '@pages': path.resolve(__dirname, './src/pages'),

    },
  };
  return config;
};
