#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      src=process.argv[2],
      dst=process.argv[3];

fs.renameSync(src,dst);
