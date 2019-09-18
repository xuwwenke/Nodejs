#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      file=process.argv[2]||__filename;

var source=fs.createReadStream(file);//返回流对象

source.pipe(process.stdout);

source.on('error',function(err){
  console.error(err.message);
});
