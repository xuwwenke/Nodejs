#!/usr/bin/node
console.log('hello world!');

const log=console.log;

const Dog=require('./02-play-dog.js');

var taidi=new Dog('taidi',4),
    zangao=new Dog('zangao',8);
taidi.on('bark',onBark);
zangao.on('bark',onBark);

function onBark(){
  log('%s barked! energy:%s',this.name(),this.energy());
}
