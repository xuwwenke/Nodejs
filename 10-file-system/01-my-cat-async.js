#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      file=process.argv[2]||__filename;

fs.readFile(file,function(err,data){
  if(err){
    console.error(err.message);
    process.exit(1);
  }else{
    log(data.toString('utf8'));
  }
});
