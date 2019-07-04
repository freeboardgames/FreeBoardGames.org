const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const webpack = require('webpack');
const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'static')],
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8000,
    hot: true,
    writeToDisk: true,
    publicPath: '/',
    historyApiFallback: {
      index: 'layout.html',
    },
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: ['node server-dist/server_bgio.js'],
        blocking: false,
        parallel: true,
      },
    }),
    new webpack.EnvironmentPlugin({
      BGIO_SERVER_URL: '',
    }),
  ],
});
