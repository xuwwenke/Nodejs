#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      Read=require('stream').Readable;

var rs=new Read();

var c='a'.charCodeAt(0);
rs._read=()=>{
  rs.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout);
