#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs');
/*
      mod=process.argv[2],
      dst=process.argv[3];

fs.chmodSync(dst,Number(mod));*/
//没有将777转化为八进制字符串

fs.chmodSync('../template.js',0o765);
