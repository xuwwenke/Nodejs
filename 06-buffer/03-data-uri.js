#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      fs=require('fs');
var data=fs.readFileSync('./qr-code.jpg').toString('base64');
log(data);

var html=
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></titlt>
</head>
<body>
<img src="data:image/jpg.base64'+data+'">
</body>
</html>
http.createSever((reg,res)=>{

}).listen(8080);


