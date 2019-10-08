const log=console.log,
            fs = require('fs'),
                  dir = process.argv[2],
                        dir1 = process.argv[3],
                              path = require('path');
try{
  if(dir=='list'){
    const show=(path1)=>fs.readdir(path1,(err,out)=>{
      out.forEach(f => {
                let path2 = path.resolve(path1,f),
                    state = fs.lstatSync(path2);
      if(state.isFile()){
                  log("{fileName:",path.basename(path2),",fileSize:",fs.statSync(path2).size,"}");
                          
      }       
            
      });
      if(err){
                console.error(err.message);
                      
      }
          
    });
        show(path.resolve(__dirname,'./'));
          
  }
  else if(dir=='mkdir'&&dir1=='folder'){
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
