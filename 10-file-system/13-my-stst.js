#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      dst=process.argv[2];

log(fs.statSync(dst));
