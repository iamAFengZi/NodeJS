

var express = require('express');

var app = express();



// 挂载中间件


app.use(function (req, res, next) {
  // body...
  console.log('被执行啦！');

  next();
});

// 这个中间件的作用就是为了给 req 和 res 添加属性而已，并不是最终的处理程序
app.get('/index', function (req, res, next) {
  req.xxx = '哈哈哈';
  res.yyy = '吼吼';

  // 如果当前中间件不是最后一个中间件，一定要调用 next() 函数 将请求继续交给下一个注册的中间件来处理
  // next() 函数只是将请求交给下一个中间件来处理，具体下一个中间件是否真的会执行，要看该中间件注册的路由是否匹配
  next();
});


// 处理用户的 /index 请求
app.get('/index', function (req, res, next) {

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(req.xxx);
  res.write(res.yyy);
  res.end('over');
});


app.get('/', function (req, res, next) {
  // body...
});

app.listen(9998, function () {
  console.log('http://localhost:9998');
});