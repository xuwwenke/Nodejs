#!/usr/bin/node

console.log('start...');
const timeID = setInterval(loop, 500);
timeID.unref();
function loop() {
  console.log('I will love you forever!');
}
setTimeout(() => {
  console.log('Game Over!');
}, 5000);
