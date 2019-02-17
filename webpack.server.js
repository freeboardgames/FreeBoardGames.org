var path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var config = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  
  entry: {
    server: path.resolve(__dirname, 'src/server.tsx'),
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "server-build"),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },

  plugins: [
    new CleanWebpackPlugin(['server-build'], { root: __dirname, dry: false, exclude: [] }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", "*"],
    modules: [
      "node_modules",
      "src"
    ]
  },

  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  "targets": {
                    "node": true
                  }
                }
              ]
            ]
          } 
        },
        {
          loader: 'ts-loader'
        }
      ]
    },
    {
      test: /\.(png|jpg|webp|svg|mp3|wav)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "file-loader"
        }
      ]
    }
    ]
  }
};

module.exports = config
