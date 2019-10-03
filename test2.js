#!/usr/bin/node

const log=console.log,
            cp=require('child_process');
var cmd='';
for(var i=2;i<process.argv.length;i++){
    cmd+=(process.argv[i]+' ');

}
cp.exec(cmd,function(err,out){
  if(err){
        log("命令行参数不对");
            process.exit(1);
              
  }else{
        log(out);
          
  }

})

