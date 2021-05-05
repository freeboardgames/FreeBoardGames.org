// https://github.com/vercel/next.js/issues/5318#issuecomment-739566907
require('tsconfig-paths/register');

require('ts-node').register(require('./tsconfig.server.json'));

module.exports = require('./server/next.config.ts');
