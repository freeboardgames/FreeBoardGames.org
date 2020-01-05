const wp = require('@cypress/webpack-preprocessor');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
      },
    },
  };
  on('file:preprocessor', wp(options));
  on('task', require('@cypress/code-coverage/task'));
  addMatchImageSnapshotPlugin(on, config);
};
