#!/usr/bin/node
console.log('hello world!');
const log=console.log;
const cp = require('child_process');
log('I am father with id',process.pid);
const child = cp.spawn('./02-child.js',[]);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);

global.setTimeout(function(){
  log('father bye');
  process.exit(1);
},5000)
