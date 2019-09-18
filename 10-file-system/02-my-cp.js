#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      src=process.argv[2],
      dst=process.argv[3];

//src.pip(dst)
//src=fs.createreadstream
//dst=fscreatewritestream
fs.createReadStream(src).pipe(fs.createWriteStream(dst));
