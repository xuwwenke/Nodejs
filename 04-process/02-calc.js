#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      arg=process.argv[2];

if(typeof(arg)=='undefined'||arg==='--help'||arg==='-h'){
  help();
}else{
  calc();
}

function help(){
  const msg=''+'usage:cmd-name [OPTION] [expression]\n'
    +'evaluate the expression.\n'
    +'\n'
    +'Mandatory arguments to long options are mandatory for short option too.\n'
    +' -h, --help output help information and exit\n';
  log(msg);
}

function calc(){
  log(arg+'=%s',eval(arg));
}
