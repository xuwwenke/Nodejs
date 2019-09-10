#!/usr/bin/node
console.log('hello world!');

const log=console.log;

const pi=Math.PI;
var circle={
  'area:'function(radius){
    return Math.PI*radius*radius;
  },
  'circumference':function(radius){
    return 2*Math.PI*radius;
  },
  'dirmeter':function(radius){
    return 2*radius;
  }
};


console.dir(module);
module.exports=circle;
