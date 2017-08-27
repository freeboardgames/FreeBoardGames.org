'use strict';

const fs   = require('fs');
const path = require('path');

const SECRETS_DIR = '/run/secrets';
const output = {};

const files = fs.readdirSync(SECRETS_DIR);

files.forEach(function(file, index) {
  const fullPath = path.join(SECRETS_DIR, file);
  const key = file;
  const data = fs.readFileSync(fullPath, 'utf8').toString().trim();

  output[key] = data;
});

module.exports = output;
