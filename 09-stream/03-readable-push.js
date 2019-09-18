#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      Read=require('stream').Readable;


var read=new Read();
read.push('hello\n');
read.push('world');
read.push(null);

read.pipe(process.stdout);
