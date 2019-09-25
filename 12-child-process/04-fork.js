#!/usr/bin/node
console.log('hello world!');
const log=console.log;
const cp = require('child_process');
log('I am father with id',process.pid);
var child=cp.fork('./02-child.js');


global.setTimeout(function(){
  child.send('Hello I am your father');
  log('father bye');
  process.exit();
},16000);

process.on('message',function(msg){
  log('I get it');
})
