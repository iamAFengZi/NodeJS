
// 加载 express 模块
var express = require('express');
// 加载 config 模块
var config = require('./config.js');
// 加载路由模块
var router = require('./router.js');

// 创建 app
var app = express();


// 注册路由
// 加载路由模块来进行路由注册
router(app);



// 启动服务
app.listen(config.port, function () {
  console.log('http://localhost:' + config.port);
});