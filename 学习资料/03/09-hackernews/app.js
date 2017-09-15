// 一、搭建项目骨架


// 1. 加载 http 模块
var http = require('http');


// 2. 创建 服务
var server = http.createServer(function (req, res) {

  // 做一下处理
  var reqUrl = req.url.toLowerCase();
  var method = req.method.toLowerCase();

  // 写代码判断路由
  if (reqUrl === '/index' && method === 'get') {
    // 表示请求首页（显示新闻列表）

  } else if (reqUrl === '/details' && method === 'get') {
    // 要显示新闻详情
  } else if (reqUrl === '/submit' && method === 'get') {
    // 显示添加新闻页面
  } else if (reqUrl === '/add' && method === 'get') {
    // 表示 get 方式提交一条新闻
  } else if (reqUrl === '/add' && method === 'post') {
    // 表示 post 方式提交一条新闻
  } else {
    // 404
  }
});


// 3. 启动服务
server.listen(8000, function () {
  console.log('http://localhost:8000');
});