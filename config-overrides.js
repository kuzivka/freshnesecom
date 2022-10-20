const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@common': path.resolve(__dirname, './src/common'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@selectors': path.resolve(__dirname, './src/selectors'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),

    },
  };
  return config;
};
