
// 加载 express 模块
var express = require('express');
var path = require('path');



// 创建 app
var app = express();


// app.get('/index', function (req, res) {
//   res.send(req.url);
// });

// app.get(/^\/index(\/.+)?$/, function (req, res) {
//   res.send(req.url);
// });

app.use('/index', function (req, res) {
  res.send(req.baseUrl + req.url);
});



// // --------- 静态资源 --------------------
// app.use(express.static(path.join(__dirname, 'public')));
// // ------------------------------------------------------------------
// // // express.static() 方法会生成一个函数，并返回
// // // 这个生成的函数就是一个会读取相应的文件，并返回给浏览器的这么一个函数
// // var fn = express.static(path.join(__dirname, 'public'));


// // // 注册路由 ..
// // // use函数的第一个参数就是虚拟路径
// // // app.use('/static', fn);
// // // app.use('/public', fn);



// // // 下面两种写法等价
// // // 省略第一个参数默认就是网站根目录 /
// // app.use(fn);
// // // app.use('/', fn);


// 启动服务
app.listen(9000, function () {
  console.log('http://localhost:9000');
});