#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      dst=process.argv[2];

fs.watch(dst,function(evt,file){
  log("%evt happend with file:%s",evt,file);//接受信号量进行读出
});
