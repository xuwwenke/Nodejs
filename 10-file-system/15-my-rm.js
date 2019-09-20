#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      dir=process.argv[2];

if(typeof(dir)==='undefined'){
  log('存在错误');
}

