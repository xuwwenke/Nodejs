#!/usr/bin/node
console.log('hello world!');

const log=console.log;

log('file name',__filename);
log('dir name',__dirname);

var fileName=__dirname+'/views/view.html';
switch(process.platform){
  case 'linux':
    fileName=__dirname+'/views/view.html';
    break;
  case 'win32':
    fileName=__dirname+'\\views\\view.html';
    break;
  default:
    fileName='something wrong';
}
log('fileName',fileNname);

const path=require('path');
fileName=path.join(__dirname,'views','login.html');
log('fileName',fileName);
