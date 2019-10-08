#!/usr/bin/node

const log=console.log,
            fs = require('fs'),
                  dir = process.argv[2],
                        dir1 = process.argv[3],
                              path = require('path');
try{
  if(dir=='list'){
    fs.readdir(__dirname,(err,files)=>{
      files.forEach(function(files1){
        fs.stat(files1,(err,stat)=>{
          if(stat.isFile()){
                        log('{"fileName":"%s","fileSize":"%s"}',files1,stat.size);
                                  
          }
                  
        })
              
      })
      if(err){
                console.error(err.message);
                      
      }
          
    })
      
  }else if(dir=='mkdir'&&dir1=='folder'){
        fs.mkdirSync('folder');
          
  }else if(typeof(dir) === 'undefined'){
        console.error('命令行参数错误！');
            process.exit(1);
              
  }else{
        console.error('命令行参数错误！');
            process.exit(1);
              
  }

}catch(err){
    console.error(err.message);
      process.exit(1);

}
