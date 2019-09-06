#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      usr=process.argv[2],
      pwd=process.argv[3];
log('usr:%s,pwd:%s',usr,pwd);

var str=usr+':'+pwd;

var buf=new Buffer(str);
log('base64:%s',buf.toString('base64'));
