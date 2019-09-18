#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      file=process.argv[2]||__filename;

const fid=fs.openSync(file,'r');

log(fs.readFileSync(fid).toString('utf8'));

fs.closeSync(fid);
