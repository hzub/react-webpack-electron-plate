const paths = require('./paths.js');

const baseConfig = require('./webpack.base.js');

module.exports = () => ({
  devtool: 'cheap-module-eval-source-map',
  entry: baseConfig.getEntry(),
  output: baseConfig.getOutput(),
  context: baseConfig.getContext(),
  plugins: [
    ...baseConfig.getBasePlugins(),
  ],
  module: {
    rules: [
      ...baseConfig.getDevStyleRules(),
      ...baseConfig.getBabelRules(),
      ...baseConfig.getImageRules(),
    ]
  },
  resolve: baseConfig.getResolve(),
});
