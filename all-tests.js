//This is used as an entry point to webpack to generate the test bundle
//that will be used by mocha
var context = require.context('./src', true, /\.test\./);
context.keys().forEach(context);
module.exports = context;
