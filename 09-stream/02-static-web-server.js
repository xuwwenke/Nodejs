#!/usr/bin/node

const log=console.log,
      http=require("http"),
      fs=require("fs");
http.createServer((req,res)=>{
  log(req.url);
  if(req.url==='/favicon.ico') return;

  var filename=__dirname+req.url;
  log(filename);
  res.end(fs.readFileSync(filename).toString('utf-8'));
}).listen(8080);
