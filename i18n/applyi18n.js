const spawn = require('child_process').spawn;
const platform = require('os').platform();
const cmd = /^win/.test(platform) ? `${process.cwd()}/applyi18n.bat` : `${process.cwd()}/applyi18n.bash`;

spawn(cmd, [], { stdio: 'inherit' }).on('exit', code => process.exit(code));
