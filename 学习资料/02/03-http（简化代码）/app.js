// 加载 http 模块
var http = require('http');
var fs = require('fs');
var path = require('path');

// 创建 server
var server = http.createServer(function (req, res) {
  // 当用户有 request 的时候就会执行这里的代码

  // 1. 在服务器端获取用户请求的 路径
  // req.url

  // /css/index.css
  // 2. 判断用户请求的路径，根据不同路径响应不同数据
  if (req.url === '/' || req.url === '/index') {

    // 1. 读取 index.html 文件，并将读取到的内容响应给用户
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);

  } else if (req.url === '/login') {
    // fs.createReadStream 创建了一个读取对应文件的 “读取流”， 并返回这个读取流。
    // 同时通过 pipe() 管道方法把读取流传递给 res 对象，然后内部res对象会自动 end()
    // 这种写法是同步操作，不是异步的。如果发生错误，只能通过try-catch来捕获。
    fs.createReadStream(path.join(__dirname, 'login.html')).pipe(res);


  } else if (req.url === '/list') {
    fs.readFile(path.join(__dirname, 'list.html'), function (err, data) {
      if (err) {
        throw err;
      }

      // res.end() 和 res.write() 参数只能是 buffer 或 字符串，其他都不行
      res.end(data);
    });
  } else if (req.url === '/register') {
    fs.readFile(path.join(__dirname, 'register.html'), function (err, data) {
      if (err) {
        throw err;
      }

      // res.end() 和 res.write() 参数只能是 buffer 或 字符串，其他都不行
      res.end(data);
    });
  } else if (req.url === '/css/index.css') {
    fs.readFile(path.join(__dirname, 'css', 'index.css'), function (err, data) {
      if (err) {
        throw err;
      }

      res.setHeader('Content-Type', 'text/css');
      // res.end() 和 res.write() 参数只能是 buffer 或 字符串，其他都不行
      res.end(data);
    });
  } else if (req.url === '/imgs/index.png') {
    fs.readFile(path.join(__dirname, 'imgs', 'index.png'), function (err, data) {
      if (err) {
        throw err;
      }

      res.setHeader('Content-Type', 'image/png');
      // res.end() 和 res.write() 参数只能是 buffer 或 字符串，其他都不行
      res.end(data);
    });
  }
  else {
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