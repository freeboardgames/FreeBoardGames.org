module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: ['react-docgen'],
        },
      },
    ],
  });

  // Do not use Storybook's CSS rules
  // https://github.com/storybookjs/storybook/issues/6055#issuecomment-521046352
  // https://github.com/webpack/webpack/issues/10843
  config.module.rules.find((rule) => rule.test.toString() === '/\\.css$/').exclude = /\.css$/;

  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
