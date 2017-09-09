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
  
  if((reqUrl === '/index' || reqUrl === '/') && reqMethod === 'get'){
    fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, data) {
      if(err){
        //设置状态码和状态消息
        res.statusCode = 404;
        res.statusMessage = 'Not Found This Page';
        res.end('404. Not Found!');
        return;
      }
      //设置响应头,通知客户端解析文件的方式
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(data);
    });
    
  }else if(reqUrl === '/details' && reqMethod === 'get') {
    fs.readFile(path.join(__dirname, 'views', 'details.html'), function (err, data) {
      if (err) {
        //设置状态码和状态消息
        res.statusCode = 404;
        res.statusMessage = 'Not Found This Page';
        res.end('404. Not Found!');
        return;
      }
      //设置响应头,通知客户端解析文件的方式
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(data);
    });
  }else if(reqUrl === '/submit' && reqMethod === 'get') {
    fs.readFile(path.join(__dirname, 'views', 'submit.html'), function (err, data) {
      if (err) {
        //设置状态码和状态消息
        res.statusCode = 404;
        res.statusMessage = 'Not Found This Page';
        res.end('404. Not Found!');
        return;
      }
      //设置响应头,通知客户端解析文件的方式
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(data);
    });
  }else if(reqUrl.startsWith('/resources') && reqMethod === 'get') {
    fs.readFile(path.join(__dirname, reqUrl), function (err, data) {
      if (err) {
        //设置状态码和状态消息
        res.statusCode = 404;
        res.statusMessage = 'Not Found This Page';
        res.end('404. Not Found!');
        return;
      }
      //设置响应头,通知客户端解析文件的方式
      res.setHeader('Content-Type', mime.lookup(reqUrl));
      res.end(data);
    });
  }else{
    res.end('404......');
  }
});

//启动服务器
server.listen(8888, function () {
  console.log('http://localhost:8888');
});
