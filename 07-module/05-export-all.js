#!/usr/bin/node
console.log('hello world!');

const log=console.log;

module.exports={
  pi:require('./02-export-var'),
  circle:require('./02-export-function'),
  Circle:require('./02-export-object')
};

console.dir(module);
