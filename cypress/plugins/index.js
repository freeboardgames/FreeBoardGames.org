const wp = require('@cypress/webpack-preprocessor');
// const is = require('@cypress/code-coverage/use-browserify-istanbul')

module.exports = on => {
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
};
