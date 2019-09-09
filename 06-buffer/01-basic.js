#!/usr/bin/node
const log=console.log;
var buf1=new Buffer(256);

log('buf1 length',buf1.length);
log('\nbuf1',buf1);
var buf2=new Buffer(250,256);
log('buf2',buf2);

for(var i=0;i<buf1.length;i++) buf1[i]=i;
log('\nbuf1',buf1);

var buf2=buf1.slice(250,256);
log('\nbuf2',buf2);

buf2.fill(0);
buf1.fill(0,0,256);
var buf2=buf1.slice(250,256);
log('buf2',buf2);
log('buf2',buf2.toJSON());
log('\nbuf2\s JSON:',JSON.stringify(buf2));

var buf2=buf1.slice(250,256);
var arr=['a',0xba,0xdf,0x00,255,10];
var buf3=new Buffer(arr);
log('buf3',buf3);

var buf4=new Buffer('hello world');
log('buf4',buf4);

buf4.copy(buf3,0,0,buf3.length);
log('buf3',buf3);

var str='你好 wangding';
var buf5=new Buffer(str);
log('buf5 length',buf5.length);
log('string length',str.length);

