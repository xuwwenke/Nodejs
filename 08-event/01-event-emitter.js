#!/usr/bin/node
console.log('hello world!');

const log=console.log;
const EventEmitter=require('events').EventEmitter;

var e=new EventEmitter();

setInterval(function() {
  e.emit('hello');
},1000);
setTimeout(function(){
  e.emit('bye');
},5000);

e.on('hello',function(){
  log('hello event emit');
});
e.on('bye',function(){
  log('bye event emit');
  process.exit();
});
