var path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 8000;
const { GenerateSW } = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

var config = {
  entry: {
    index: path.resolve(__dirname, 'src/app.tsx'),
  },

  optimization: {
    runtimeChunk: 'single',
    // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    chunkFilename: '[chunkhash].js',
    globalObject: 'this',
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], { root: __dirname, verbose: true, dry: false, exclude: [] }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'layout.html',
      inject: true,
      chunksSortMode: 'none', // https://github.com/jantimon/html-webpack-plugin/issues/870
    }),
    new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      navigateFallbackBlacklist: [/^\/blog.*/, /^.*\.txt$/, /^.*\.xml$/, /^.*\.mp3$/, /^.*\.png$/, /^.*\.js$/],
      navigateFallback: '/layout.html',
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '*'],
    modules: ['node_modules', 'src'],
  },

  module: {
    rules: [
      {
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
                    modules: false,
                    targets: {
                      browsers: ['>1%'],
                    },
                  },
                ],
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|webp|svg|mp3|wav)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "raw-loader"
          },
        ]
      }
    ],
  },
};

module.exports = config;
