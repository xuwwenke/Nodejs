#!/usr/bin/node
console.log('hello world!');

const log=console.log;
log('I am child process. PID:', process.pid);
const timer = setInterval(() => {
    console.log('time:', Date.now());
}, 2000);
setTimeout(() => {
    global.clearInterval(timer);
    console.log('OK! 16 seconds. Game Over!');
}, 16000);
