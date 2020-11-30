module.exports = {
  stories: ['../docs/**/*.stories.mdx', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-storysource',
  ],
};
