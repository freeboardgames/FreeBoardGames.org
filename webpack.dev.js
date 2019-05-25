const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new WebpackShellPlugin({
       onBuildEnd: {
         scripts: ['node server-build/server_fbg.js','node server-build/server_bgio.js'],
         blocking: false,
         parallel: true
       }
    }),
    new webpack.EnvironmentPlugin({
      BGIO_SERVER_URL: ''
    }),
  ]
});
