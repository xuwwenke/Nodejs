#!/usr/bin/node
console.log('hello world!');

const cp = require('child_process');
const child = cp.spawn('cat', ['02-spawn-v1.js']);

child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
