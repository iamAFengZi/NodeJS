
// 加载 express 模块
var express = require('express');
// 加载 config 模块
var config = require('./config.js');
// 加载路由模块
var router = require('./router.js');
var path = require('path');

// 创建 app
var app = express();

// console.log(router.toString());




// 配置使用 ejs 模板引擎（不修改后缀，依然使用 ejs 作为模板文件的后缀）
// // 配置模板引擎（程序一启动就立刻配置好模板引擎，这个代码只执行一次）
// // 1. 告诉 Express 所有的模板文件存放的位置
// app.set('views', path.join(__dirname, 'htmls'));
// // 2. 告诉 express 要使用什么模板引擎
// app.set('view engine', 'ejs');




// 使用 html 作为模板文件后缀
// 1. 
app.set('views', path.join(__dirname, 'htmls'));
// 2. 创建一个自己的模板引擎，自己的模板引擎使用 html 作为模板文件后缀
app.engine('html', require('ejs').renderFile);
// 3. 设置使用某个模板引擎
app.set('view engine', 'html');



// 注册路由
// 加载路由模块来进行路由注册
// 通过下面的代码就将 router 中设置的所有路由应用到了 app 对象上
// app.use('/', router);
app.use(router);




// 启动服务
app.listen(config.port, function () {
  console.log('http://localhost:' + config.port);
});