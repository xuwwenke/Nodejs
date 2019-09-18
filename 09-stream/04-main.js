#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      stream=require('./04-green-stream.js');
log(stream.__write);
