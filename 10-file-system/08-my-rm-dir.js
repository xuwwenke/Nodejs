#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      dir=process.argv[2];

fs.rmdirSync(dir);
