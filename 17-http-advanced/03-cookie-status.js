#!/usr/bin/node
const http=require('http'),
      log=console.log;

var total=1;
http.createServer((req,res)=>{
  log('Total request:',++total);
  if(req.url === '/favicon.ico') return;
  log('\n\n${req.method} ${req.url} ${req.httpVersion}');
  log(req.headers);
  log();
  var count=1;
  if(typeof req.headers.cookie !=='undefined'){
    var data=req.headers.cookie.split('=');
    count=Number(data[1])+1;
  }

  res.statusCode=200;
  res.setHeader('Set-cookie', `count=${count}; max-age=10000000`);//max-age:表示永久的
  //res.setHeader('Set-cookie', `count=${count};`);
  res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>状态保持</title></head><body><h1>你这是第 ${count} 次访问本网站！</h1></body></html>`);
}).listen(8080);
