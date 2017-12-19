'use strict'

const prettifier = require('./lib/numberPrettifier.js');
const args = process.argv.slice(2);

args.forEach(function (n) {
  console.log(n + ' -> ' + prettifier.numberPrettifier(n));
});
