const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const paths = require('./paths.js');

const getContext = () => paths.appRoot;

const getEntry = () => ([
  paths.appSrcIndex,
]);

const getOutput = () => ({
  path: paths.appDist,
  filename: 'js/app.[hash:8].js',
  chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  publicPath: paths.appPublicPath,
});

const getBasePlugins = () => ([
  new HtmlWebpackPlugin({
    template: paths.appTemplateHtmlPath,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.[hash:8].js',
    minChunks(module, count) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
]);

const getDefinePlugin = (entry) => ([
  new webpack.DefinePlugin(entry),
]);

const getElectronPlugins = () => ([
  new CopyWebpackPlugin(
    [
      { from: paths.appElectronProdMain, to: 'main.js' },
      { from: paths.appElectronPackageJson, to: 'package.json' }
    ]
  ),
]);

const getProdPlugins = () => ([
  new ExtractTextPlugin(paths.appDistStylesRelative),
  new webpack.optimize.UglifyJsPlugin(),
]);

const getBabelRules = () => ([
  {
    test: /\.jsx?$/,
    include: [paths.appSrc],
    use: [{
      loader: 'babel-loader',
    }],
  }
]);

const getImageRules = () => ([
  {
    test: /\.(png|jpg|jpeg|gif)$/,
    include: [paths.appSrc],
    use: [{
      loader: 'file-loader',
      options: {
        name: "[path][name].[hash:20].[ext]",
        context: paths.appSrc,
      }
    }]
  }
]);

const getDevStyleRules = () => ([
  {
    test: /\.scss$/,
    include: [paths.appSrc],
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        camelCase: true,
        modules: true,
        localIdentName: '[name]__[local]___[hash:base64:5]'
      },
    }, {
      loader: 'sass-loader',
    }]
  }
]);

const getProdStyleRules = () => ([
  {
    test: /\.scss$/,
    include: [paths.appSrc],
    use: ExtractTextPlugin.extract({
      use: [{
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          camelCase: true,
          modules: true,
        },
      }, {
        loader: 'sass-loader',
      }]
    }),
  }
]);

const getResolve = () => ({
  extensions: ['.js', '.jsx'],
  alias: paths.appAliases,
});

module.exports = {
  getContext,
  getEntry,
  getOutput,
  getBasePlugins,
  getElectronPlugins,
  getDevStyleRules,
  getImageRules,
  getBabelRules,
  getProdStyleRules,
  getProdPlugins,
  getResolve,
  getDefinePlugin,
};
