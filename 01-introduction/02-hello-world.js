#!/usr/bin/node
console.log('hello world!');

const http=require('http');

http.createServer((reg,res)=>{
  res.end('hello world!');
}).listen(8080);
