#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      file=process.argv[2]||__filename;

if(fs.existsSync(file)){
  log(fs.readReadSync(file).toString('utf8'));
}else{
  console.error('%s not exists',file);
  process.exit(1);
}
