#!/usr/bin/node

const log=console.log,
      cp=require('child_process');

cp.spawnSync('./02-child.js',[],{stdio:['ignore,1,2']});

log('I am father process.PID:',process.pid);
