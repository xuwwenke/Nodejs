#!/usr/bin/node
const http=require('http'),
      log=console.log;

http.createServer((req,res)=>{
  log('\n\n${req.method} ${req.url} ${req.httpVersion}');
  log(req.headers);
  log();
  if(typeof req.headers.cookie !=='undefined'){
    var data=req.headers.cookie.split(';');
    log(data);
  }
}).listen(8080);
