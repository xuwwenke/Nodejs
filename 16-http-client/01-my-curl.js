#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      http=require('http');
//请求url地址
const addr=process.argv[2]||'http://sample.wangding.in/web/one-div.html';

http.get(addr,function(res){
  //print start line
  log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  //print response header
  log(res.headers);
  res.pipe(process.stdout);
});


