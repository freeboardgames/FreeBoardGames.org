var path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 8000;
const {GenerateSW} = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


var config = {
  entry: {
    index: path.resolve(__dirname, 'src/app.tsx')
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "dist"),
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { root: __dirname, verbose: true, dry: false, exclude: [] }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: true,
      chunksSortMode: 'none' // https://github.com/jantimon/html-webpack-plugin/issues/870
    }),
		new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      navigateFallbackBlacklist: [/^\/blog.*/, /^.*\.txt$/, /^.*\.xml$/, /^.*\.mp3$/, /^.*\.png$/, /^.*\.js$/],
      navigateFallback: '/',
    }),
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
                '@babel/preset-env',
                {
                  "modules": false,
                  "targets": {
                    "browsers": [">1%"]
                  }
                }
              ]
            ],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
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
