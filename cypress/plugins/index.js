const wp = require('@cypress/webpack-preprocessor');

const rmdir = require('rimraf');
const dirToRemove = `${process.cwd()}/.nyc_output`;
rmdir(dirToRemove, (error) => {});

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
  require('@cypress/code-coverage/task')(on, config);
  return config;
};
