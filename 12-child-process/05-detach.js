#!/usr/bin/node

const cp=require('child_process'),
      log=console.log;
log('I am father process.PID:',process.pid);

var child=cp.spawn('./02-child.js',[],{detach:true,stdio:['ignore',1,2]});

child.unref();

setTineout(()=>{
  log('5 seconds passed.Father game over!');
  process.exit(0);
},5000);
