#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      uid=process.argv[2],
      gid=process.argv[3],
      dst=process.argv[4];

fs.chmodSync(dst,Number(uid),Number(gid));
