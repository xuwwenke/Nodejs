#!/usr/bin/node
console.log('hello world!');

const log=console.log,
      cheerio=require('chreeio'),
      http=require('http'),
      print=require('util').debuglog('crawler'),
      add='http://segmentfault.com/live/free';
http.get(addr,(res)=>{
  var result='';
  res.on('data',(data)=>{
    result+=data.toString('utf8');
  });
  res.on('end',()=>{
    print(result);

    var $=chreeio.load(result);
    $('body').find('.card-body').each(function(){
      print($(this).html());
      var cName = $(this).find('.card-title>a').text(),
        cURL  = $(this).find('.card-title>a').attr('href');
      cURL = 'https://segmentfault.com' + cURL;
      if(cName === '') return;
      log('课程名称：', cName);
      log('课程网址：', cURL.trim());
      log('');
    });
  });
});

