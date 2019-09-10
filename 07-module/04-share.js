#!/usr/bin/node

const log=console.log;

var count=0;
function Num(){}

Num.prototype.add=()=>count++;
Num.prototype.getCount=()=>count;

module.exports=Num;
