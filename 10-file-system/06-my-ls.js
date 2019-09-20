#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      dir=process.argv[2]||__dirname;
log(fs.readdirSync(dir));

//多个API组合
//fs.statSync(dir+content).
//Sync:同步方法
