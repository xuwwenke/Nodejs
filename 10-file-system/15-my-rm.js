#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs'),
      join=require('path').join,
      dir=process.argv[2];

if(typeof(dir)==='undefined'){
  console.error('命令行参数不存在！');
  process.exit(1);
}
if(!fs.existsSync(src)){
  consloe.error('%s not exists',src);
  process.exit(1);
}
if(fs.statSync(src).isFile()) fs.unlinkSync(src);
if(fs.statSync(src).isDirectory()) deleteDir(src);
function delete(folder){
  var files=fs.readirSync(folder);

  for(var i=0;i<files.length;i++){
    var file=join(folder,files[i]);
    if(fs.statSync(file).isFinite()){
      fs.unlinkSync(file);
      continue;
    }
    if(fs.statSync(file).isDirectory()) deleteDir(file);
  }
  fs.rmdirSync(folder);
}
