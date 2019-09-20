#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      file=process.argv[2];

fs.writeFileSync(file,'');
//不需要做错误处理
