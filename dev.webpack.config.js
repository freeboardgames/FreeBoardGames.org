var path = require("path");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const port = process.env.PORT || 8000;
const {GenerateSW} = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


var config = {
  mode: 'development',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  /*
   * app.ts represents the entry point to your web application. Webpack will
   * recursively go through every "require" statement in app.ts and
   * efficiently build out the application's dependency tree.
   */
  entry: {
    index: path.resolve(__dirname, 'src/app.tsx'),
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  /*
   * The combination of path and filename tells Webpack what name to give to
   * the final bundled JavaScript file and where to store this file.
   */
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },

  plugins: [
    new webpack.EnvironmentPlugin({'NODE_ENV': 'development'}),
    new CleanWebpackPlugin(['dist'], { root: __dirname, verbose: true, dry: false, exclude: [] }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: true,
    }),
		new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
    new WebpackShellPlugin({
       onBuildEnd: {
         scripts: ['node build/server.js'],
         blocking: false,
         parallel: true,
       }
   })
  ],

  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
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
                    "browsers": [">1%"]
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
