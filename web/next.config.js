const withCSS = require('@zeit/next-css');
const WebpackBar = require('webpackbar');
const withOptimizedImages = require('next-optimized-images');
const childProcess = require('child_process');
const withWorkers = require('@zeit/next-workers');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const CHANNEL = process.env.CHANNEL || 'development';
const GQL_WS_URL = process.env.GQL_WS_URL;
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const VERSION = process.env.GIT_REV || getGitHash();
const SENTRY_DSN = process.env.SENTRY_DSN;

function getGitHash() {
  let hash = 'unknown';
  try {
    hash = childProcess.execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {}
  return hash;
}

module.exports = withWorkers(
  withOptimizedImages(
    withCSS({
      cssModules: true,
      // next-optimized-images
      defaultImageLoader: 'responsive-loader',
      inlineImageLimit: -1,
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      poweredByHeader: false,
      env: {
        CHANNEL,
        VERSION,
        GQL_WS_URL,
        BABEL_ENV_IS_PROD,
        GA_TRACKING_CODE: process.env.GA_TRACKING_CODE,
        SENTRY_DSN,
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
);
