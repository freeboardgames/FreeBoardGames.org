module.exports = {
  features: {
    previewCsfV3: true,
  },
  stories: ['../docs/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-measure',
    'storybook-addon-outline'
  ],
};
