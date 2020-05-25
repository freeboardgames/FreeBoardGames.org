const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: ['../src/components/**/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [/node_modules/, /\.(test|spec)\.(ts|tsx)/],
      use: [
        'cache-loader',
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: true,
                  },
                },
              ],
            ],
            plugins: ['@babel/plugin-syntax-dynamic-import'],
          },
        },
        {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules = ['node_modules', 'src'],
    config.resolve.plugins = [new TSConfigPathsPlugin()];
    return config;
  },
};
