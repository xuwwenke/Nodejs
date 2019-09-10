#!/usr/bin/node
console.log('hello world!');

const log=console.log;

/*const pi=require('./02-export-var');

console.log('\nPI:',pi);
circle = require('./02-export-function.js');
console.log('r=10,circle area:%d',circle(10),area());
console.dir(module);


console.log('\narea:\t\t', circle(20).area());

console.log('circumference:\t', circle(20).circumference());
*/

//var circle = require('./02-export-object');

const circle = require('./02-export-object2.js');

console.log('\nr=10,diameter:\t', circle.diameter(10));

console.log('circumference:\t', circle.circumference(10));

console.log('r=10,circle area:\t', circle.area(10));
