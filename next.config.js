const withCSS = require('@zeit/next-css');
const WebpackBar = require('webpackbar');
const withOffline = require('next-offline');
const withOptimizedImages = require('next-optimized-images');
const childProcess = require('child_process');
const withWorkers = require('@zeit/next-workers');

const CHANNEL = process.env.CHANNEL || 'development';
const BGIO_SERVER_URL = process.env.BGIO_SERVER_URL || 'development';
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const VERSION = process.env.GIT_REV || getGitHash();

function getGitHash() {
  let hash = 'unknown';
  try {
    hash = childProcess
      .execSync('git rev-parse --short HEAD')
      .toString()
      .trim();
  } catch (e) {
    console.error('In next.config.js: could not get git hash');
  }
  return hash;
}

module.exports = withWorkers(
  withOptimizedImages(
    withCSS(
      withOffline({
        cssModules: true,
        dontAutoRegisterSw: true,
        generateInDevMode: false,
        workboxOpts: {
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
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

        poweredByHeader: false,
        env: {
          CHANNEL,
          VERSION,
          BGIO_SERVER_URL,
          BABEL_ENV_IS_PROD,
        },
        webpack: config => {
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

          if (!BABEL_ENV_IS_PROD) {
            config.optimization.minimizer = [];
          }

          return config;
        },
      }),
    ),
  ),
);
