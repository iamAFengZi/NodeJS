// 一、搭建项目骨架
// 二、根据不同请求（路由），响应不同数据


// 1. 加载 http 模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');


// 2. 创建 服务
var server = http.createServer(function (req, res) {

  // 做一下处理
  var reqUrl = req.url.toLowerCase();
  var method = req.method.toLowerCase();

  // 写代码判断路由
  if ((reqUrl === '/index' || reqUrl === '/') && method === 'get') {
    // 表示请求首页（显示新闻列表）
    // 读取 index.html 返回
    fs.readFile(path.join(__dirname, 'views', 'index.html'), function (err, data) {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(data);
    });

  } else if (reqUrl === '/details' && method === 'get') {
    // 要显示新闻详情
    fs.readFile(path.join(__dirname, 'views', 'details.html'), function (err, data) {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(data);
    });


  } else if (reqUrl === '/submit' && method === 'get') {
    // 显示添加新闻页面
    fs.readFile(path.join(__dirname, 'views', 'submit.html'), function (err, data) {
      if (err) {
        throw err;
      }
      res.setHeader('Content-Type', 'text/html;charset=utf-8');
      res.end(data);
    });


  } else if (reqUrl === '/add' && method === 'get') {
    // 表示 get 方式提交一条新闻
  } else if (reqUrl === '/add' && method === 'post') {
    // 表示 post 方式提交一条新闻
  } else if (reqUrl.startsWith('/resources') && method === 'get') {
    // /resources/css/news.css
    // 表示拥护请求的是静态资源
    // 如果请求的是静态资源，那么就直接根据用户请求的路径和 __dirname 拼接查找对应的资源即可。
    fs.readFile(path.join(__dirname, reqUrl), function (err, data) {
      if (err) {
        res.end('404');
        return;
      }

      // 设置对应资源的 content-type
      res.setHeader('Content-Type', mime.lookup(reqUrl));
      // 把找到的静态资源返回给客户端
      res.end(data);
    });
  } else {
    // 404
    res.end('404');
  }
});


// 3. 启动服务
server.listen(8000, function () {
  console.log('http://localhost:8000');
});
