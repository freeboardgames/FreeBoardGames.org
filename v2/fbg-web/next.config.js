const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  'fbg-games',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ROOT: __dirname,
  },
};

module.exports = withPlugins([withTM], nextConfig);
