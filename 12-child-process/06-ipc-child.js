#!/usr/bin/node
const log=console.log;
log('I am child process.PID:',process.pid);

process.on('message',(msg)=>{
  log('msg from father:',msg);
});

process.send('hello! I am child process.PID:'+process.pid);
