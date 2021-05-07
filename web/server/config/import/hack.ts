/**
 * Prevent node to try to interpret these extensions as module.
 * This is required because next.config.ts is being transpiled using ts-node, not webpack.
 */
const Module = require('module');
Module._extensions['.jpg'] = (module) => module;
Module._extensions['.md'] = (module) => module;
export {};
