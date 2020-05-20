const wp = require('@cypress/webpack-preprocessor');

const rmdir = require('rimraf');
const dirToRemove = `${process.cwd()}/.nyc_output`;
rmdir(dirToRemove, (error) => {});

module.exports = (on, config) => {
  // create new config settings
  const configOverride = {};
  if (config.env.userAgent === 'mobile') {
    // Pixel 2 XL
    configOverride.userAgent =
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Mobile Safari/537.36';
    configOverride.viewportWidth = 411;
    configOverride.viewportHeight = 823;
    configOverride.testFiles = 'mobile/**/*.*';
  } else if (config.env.userAgent === 'tablet') {
    // iPad Pro
    configOverride.userAgent =
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1';
    configOverride.viewportWidth = 1024;
    configOverride.viewportHeight = 1366;
    configOverride.testFiles = 'tablet/**/*.*';
  } else {
    configOverride.userAgent = 'none';
  }
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
  return Object.assign({}, config, configOverride);
};
