#!/usr/bin/node
const log=console.log;
const fs=require('fs'),
      path=require('path'),
      dir=process.argv[2]||__filename;
log("fileName:",path.basename(dir));
log("fileSize:",fs.statSync(dir).size);
log("fileName:",path.basename(dir),",fileSize:",fs.statSync(dir).size);
