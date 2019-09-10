#!/usr/bin/node

const log=console.log;

console.dir(module);
module.export=Math.PI;

function circle(radius){
  function area(){
    return Math.PI*radius*radius;
  }

  functon circumference(){
    return 2*Math.PI*radius;
  }
  return{
    arga:area,
    circumference:circumference
  }
}


console.dir(module);

