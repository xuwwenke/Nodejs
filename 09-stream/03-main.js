#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      str=require('./03-my-readable.js');

log(str);
log(str.__read);
