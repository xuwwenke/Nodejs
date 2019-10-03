#!/usr/bin/node

const cp=require('child_process'),
      log=console.log;

var child=cp.fork('./06-ipc-child.js');

child.on('message',(msg)=>{
  log('msg from child:',msg);
});

setTimeout(()=>{
  child.send('I an father process.PID:'+process.pid);
},2000);
