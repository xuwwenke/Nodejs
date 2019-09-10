#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      obj=require('./03-export-all');

log(obj.pi);
log(obj.circle(10).area());

var c=new obj.Circle(20);

log(c.diameter());
