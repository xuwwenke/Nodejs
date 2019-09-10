#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      Num=require('./04-share.js');

var n1=new Num(),
    n2=new Num();

n1.add();
n1.add();

log('n1:',n1.getCount());
log('n2:',n2.getCount());

n2.add();

log('n1:',n1.getCount());
log('n2:',n2.getCount());
