#!/usr/bin/node
console.log('hello world!');
const log=console.log;
const http = require('http'),
      cp   = require('child_process');
log('I am father process. PID:', process.pid);
http.createServer((req, res) => {
  var child = cp.spawn('./02-child.js');
  child.stdout.pipe(res);
}).listen(8080);
