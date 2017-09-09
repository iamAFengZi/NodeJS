/**
 * Created by dasxx on 2017-09-09.
 */
//加载公共模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

//创建服务,并根据路由调用不同的回调函数
var server = http.createServer(function (req, res) {
  var reqUrl = req.url.toLowerCase();
  var reqMethod = req.method.toLowerCase();
  
  reqUrl = (reqUrl === '/favicon.ico') ? '/resources/images/y18.gif' : reqUrl;
  //调用函数给res对象添加一个方法
  resRender(res);
  
  
  if((reqUrl === '/index' || reqUrl === '/') && reqMethod === 'get'){
    // fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, data) {
    //   if(err){
    //     //设置状态码和状态消息
    //     res.statusCode = 404;
    //     res.statusMessage = 'Not Found This Page';
    //     res.end('404. Not Found!');
    //     return;
    //     // throw err;
    //   }
    //   //设置响应头,通知客户端解析文件的方式
    //   res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //   res.end(data);
    // });
    
    res.render(path.join(__dirname, 'views', 'index.html'));
  }else if(reqUrl === '/details' && reqMethod === 'get') {
    // fs.readFile(path.join(__dirname, 'views', 'details.html'), function (err, data) {
    //   if (err) {
    //     //设置状态码和状态消息
    //     res.statusCode = 404;
    //     res.statusMessage = 'Not Found This Page';
    //     res.end('404. Not Found!');
    //     return;
    //   }
    //   //设置响应头,通知客户端解析文件的方式
    //   res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //   res.end(data);
    // });
    res.render(path.join(__dirname, 'views', 'details.html'));
  }else if(reqUrl === '/submit' && reqMethod === 'get') {
    // fs.readFile(path.join(__dirname, 'views', 'submit.html'), function (err, data) {
    //   if (err) {
    //     //设置状态码和状态消息
    //     res.statusCode = 404;
    //     res.statusMessage = 'Not Found This Page';
    //     res.end('404. Not Found!');
    //     return;
    //   }
    //   //设置响应头,通知客户端解析文件的方式
    //   res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //   res.end(data);
    // });
    res.render(path.join(__dirname, 'views', 'submit.html'));
  }else if(reqUrl.startsWith('/resources') && reqMethod === 'get') {
    res.render(path.join(__dirname, reqUrl));
  }else{
    res.end('404......');
  }
});

//启动服务器
server.listen(8888, function () {
  console.log('http://localhost:8888');
});

// //创建路由指引
function resRender(res) {
  res.render = function (fileName) {
    fs.readFile(fileName, function (err, data) {
      if (err) {
        //设置状态码和状态消息
        res.statusCode = 404;
        res.statusMessage = 'Not Found This Page';
        res.end('404. Not Found!');
        return;
      }
      //设置响应头,通知客户端解析文件的方式
      res.setHeader('Content-Type', mime.lookup(fileName));
      res.end(data);
    });
  }
}