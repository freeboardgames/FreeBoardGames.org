/// <reference path='./typings.d.ts'/>

import WebpackBar from 'webpackbar';
import withOptimizedImages from 'next-optimized-images';
import childProcess from 'child_process';
import withWorkers from '@zeit/next-workers';
import TSConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { i18n, i18nRewrites, i18nRedirects } from './config/i18n';
import { I18NextHMRPlugin } from 'i18next-hmr/plugin';
import { resolve } from 'path';

const CHANNEL = process.env.CHANNEL || 'development';
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const VERSION = process.env.GIT_REV || getGitHash();

function getGitHash() {
  let hash = 'unknown';
  try {
    hash = childProcess.execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {}
  return hash;
}

export default withWorkers(
  withOptimizedImages({
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
      BABEL_ENV_IS_PROD,
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

      // i18next-hmr for better developer experience
      config.plugins.push(
        new I18NextHMRPlugin({
          localesDir: resolve(__dirname, '../public/static/locales'),
        }),
      );

      return config;
    },
    i18n,
    rewrites: () => [...i18nRewrites()],
    redirects: () => [...i18nRedirects()],
  }),
);
