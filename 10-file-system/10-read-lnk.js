#!/usr/bin/node

const log=console.log,
      fs=require('fs'),
      lnk=process.argv[3];
log('%s->%s',lnk,fs.readlinkSync(lnk));


