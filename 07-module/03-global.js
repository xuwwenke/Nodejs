#!/usr/bin/node
console.log('hello world!');

const log=console.log;

global.pi=Math.PI;
global.circle=(radius)=>{
  function circumference(){
    return 2*radius*Math.PI;
  }
  function area(){
    return Math.PI*radius*radius;
  }
  function diameter(){
    return 2*radius;
  }
  return{
    area:area,
      circumference:circumference
  };
};

global.objCircle={
  diameter:(radius)=>2*radius,
  circumference:(radius)=>pi*2*radius,
  area:(radius)=>pi*radius*radius
};
