const paths = require('./paths.js');

const baseConfig = require('./webpack.base.js');

const DEFINES = {
  ELECTRON: false,
};

module.exports = env => ({
  target: 'web',
  devtool: 'cheap-module-eval-source-map',
  entry: baseConfig.getEntry(),
  output: baseConfig.getOutput(),
  context: baseConfig.getContext(),
  plugins: [
    ...baseConfig.getBasePlugins(),
    ...baseConfig.getDefinePlugin(DEFINES),
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
