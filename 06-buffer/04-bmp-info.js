#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs');

var buf=fs.readFileSync('./nodejs-logo.bmp');
log('width',buf.readInt32LE(0x12));
log('height',buf.readInt32LE(0x16));
log('deepth',buf.readInt16LE(0x1c));
