
// 加载 express 模块
var express = require('express');
// 加载 config 模块
var config = require('./config.js');
var path = require('path');
var boydParser = require('body-parser');
// 加载路由模块
var router = require('./router.js');

// 加载 my-body-parser
var myBodyParser = require('./my-body-parser.js');

// 创建 app 对象
var app = express();


// 在系统中添加了一个记录日志的模块
//
// app.use(function (req, res, next) {
//   console.log(req.ip + '请求了。');
//   next();
// });




// 做一些挂载操作（挂载 body-parser中间价、设置模板引擎、挂载路由）
// 1. 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// 2. 挂载一个 body-parser 中间件
// app.use(boydParser.urlencoded({extended: false}));
app.use(myBodyParser);


// console.log(boydParser.urlencoded({extended: false}).toString());

// console.log(router.toString());

// 3. 挂载路由模块
app.use(router);

// app.use
// app.get









// 错误处理中间件必须有4个参数
// 一般建议，把错误处理中间件放到最后
app.use(function (err, req, res, next) {
  res.status(500).send('抱歉，服务器内部错误，请稍后再访问。');
});

// 创建一个自己的兜底的中间件
app.use(function (req, res, next) {
  res.status(404).send('哈哈哈，我就是最后一个了，你要找的页面没找到。。。');
});




// 启动服务
app.listen(config.port, function () {
  console.log('http://localhost:' + config.port);
});