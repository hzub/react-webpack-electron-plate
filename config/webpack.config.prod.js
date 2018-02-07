const paths = require('./paths.js');

const baseConfig = require('./webpack.base.js');

const DEFINES = {
  ELECTRON: true,
};

module.exports = () => ({
  devtool: 'none',
  entry: baseConfig.getEntry(),
  output: baseConfig.getOutput(),
  context: baseConfig.getContext(),
  plugins: [
    ...baseConfig.getBasePlugins(),
    ...baseConfig.getProdPlugins(),
    ...baseConfig.getDefinePlugin(DEFINES),
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
