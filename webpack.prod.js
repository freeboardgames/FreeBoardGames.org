const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('webpack-shell-plugin-next');

module.exports = merge(common, {
  mode: 'production', 
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

