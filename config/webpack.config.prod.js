const paths = require('./paths.js');

const baseConfig = require('./webpack.base.js');

module.exports = () => ({
  devtool: 'none',
  entry: baseConfig.getEntry(),
  output: baseConfig.getOutput(),
  context: baseConfig.getContext(),
  plugins: [
    ...baseConfig.getBasePlugins(),
    ...baseConfig.getProdPlugins(),
  ],
  module: {
    rules: [
      ...baseConfig.getProdStyleRules(),
      ...baseConfig.getBabelRules(),
      ...baseConfig.getImageRules(),
    ]
  },
  resolve: baseConfig.getResolve(),
});
