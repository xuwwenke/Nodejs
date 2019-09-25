#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      cp=require('child_process');

cp.execFile('cat',['-n','01-exec-file.js'],function(err,out,error){
  if(err){
    console.error(error);
    process.exit(1);
  }
  log(out);
})//打印当前脚本
