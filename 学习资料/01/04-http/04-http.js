

// 1. 加载 http 模块
var http = require('http');


// 2. 通过 http 模块创建一个 http 服务
var server = http.createServer();

// 3. 监听 server 对象的 request 事件（用户请求事件）
server.on('request', function (req, res) {

  // res.write('hello');
  // // body...
  // console.log('有人访问啦！');

  // // 结束响应
  // // 服务器对于客户端的每个请求，必须结束响应（res.end()）
  // res.end();



  // 在服务器端，通过设置响应报文头，来告诉浏览器使用对应的编码来显示网页
  res.setHeader('Content-Type', 'text/html;charset=utf-8');

  res.write('Hello <h1>World</h1>! <strong>你好</strong>世界!');
  res.end();
});


// 4. 启动服务
server.listen(9999, function () {
  console.log('http服务已经启动，请访问：http://localhost:9999');
});
