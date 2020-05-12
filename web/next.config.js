const withCSS = require('@zeit/next-css');
const WebpackBar = require('webpackbar');
const withPWA = require('next-pwa');
const withOptimizedImages = require('next-optimized-images');
const childProcess = require('child_process');
const withWorkers = require('@zeit/next-workers');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const CHANNEL = process.env.CHANNEL || 'development';
const BGIO_SERVER_URL = process.env.BGIO_SERVER_URL;
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const VERSION = process.env.GIT_REV || getGitHash();

function getGitHash() {
  let hash = 'unknown';
  try {
    hash = childProcess.execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {}
  return hash;
}

module.exports = withWorkers(
  withOptimizedImages(
    withCSS(
      withPWA({
        cssModules: true,
        pwa: {
          dest: 'static',
          disable: CHANNEL !== 'production',
          runtimeCaching: [
            {
              urlPattern: /^\/.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
        // next-optimized-images
        optimizedImages: {
          defaultImageLoader: 'responsive-loader',
          inlineImageLimit: -1,
          optipng: {
            optimizationLevel: 7,
          },
          mozjpeg: {
            quality: 80,
          },
        },
        poweredByHeader: false,
        env: {
          CHANNEL,
          VERSION,
          BGIO_SERVER_URL,
          BABEL_ENV_IS_PROD,
          GA_TRACKING_CODE: process.env.GA_TRACKING_CODE,
        },
        webpack: (config) => {
          config.module.rules.push({
            test: /\.test.(js|jsx|ts|tsx)$/,
            loader: 'ignore-loader',
          });

          config.module.rules.push({
            test: /jest.(config|setup).(js|jsx|ts|tsx)$/,
            loader: 'ignore-loader',
          });

          config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
          });

          config.module.rules.push({
            test: /\.(webp|svg|mp3|wav)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'url-loader',
              },
            ],
          });

          if (process.env.NODE_ENV !== 'development') {
            config.plugins.push(
              new WebpackBar({
                fancy: true,
                profile: true,
                basic: false,
              }),
            );
          }

          if (config.resolve.plugins) {
            config.resolve.plugins.push(new TSConfigPathsPlugin());
          } else {
            config.plugins = [new TSConfigPathsPlugin()];
          }

          if (!BABEL_ENV_IS_PROD) {
            config.optimization.minimizer = [];
          }

          return config;
        },
      }),
    ),
  ),
);
