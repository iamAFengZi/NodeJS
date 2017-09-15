// 加载 http 模块
var http = require('http');

// 创建 server
var server = http.createServer(function (req, res) {
  // 当用户有 request 的时候就会执行这里的代码

  // 1. 在服务器端获取用户请求的 路径
  // req.url

  // 2. 判断用户请求的路径，根据不同路径响应不同数据
  if (req.url === '/' || req.url === '/index') {
    res.end('index.html');
  } else if (req.url === '/login') {
    res.end('login.html');
  } else if (req.url === '/list') {
    res.end('list.html');
  } else if (req.url === '/register') {
    res.end('register.html');
  } else {
    res.end('404.');
  }


});

// 启动服务
server.listen(9000, function () {
  console.log('http://localhost:9000');
});



/*

  http://localhost:9000
  /

  http://localhost:9000/login
  /login


  http://localhost:9000/list
  /list

  http://localhost:9000/abc/a.html
  /abc/a.html



*/