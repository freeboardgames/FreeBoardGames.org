const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin-next');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new WebpackShellPlugin({
       onBuildEnd: {
         scripts: ['node server-build/server.js'],
         blocking: false,
         parallel: true,
       }
    })
  ]
});
