
// // 加载 express 模块
// var express = require('express');

// // 调用 express() 方法，创建 app 对象（其实就类似于 http.createServer()）
// var app = express();


// // 注册路由
// // 等价于 method === 'get' && url === '/index'
// app.get('/index', function (req, res) {
//   // 向客户端响应一些数据
//   // res.send('你好世界，Hello World！');
//   res.send({name: '张三', age: 18});
// });


// app.get('/', function (req, res) {
//   // res.send('你好中国，Hello China！');
//   res.send('你好Hello');

//   // // 计算字符串的字节的个数（utf8编码中，中文占3个字节，英文占1个字节）
//   // var len = Buffer.byteLength('你好Hello');
//   // console.log(len);
// });


// // 启动服务
// app.listen(9000, function () {
//   console.log('http://localhost:9000');
// });




// express 主要特点：
// 1. 路由功能
// 2. 中间件功能（中间就是一个方法）
// 3. 对 req 和 res 的扩展
// 4. 可以集成其他模板引擎


// res.end() 和 res.send() 区别
// 1. res.send() 方法会自动设置一些响应报文头
// ```
// HTTP/1.1 200 OK
// X-Powered-By: Express
// Content-Type: text/html; charset=utf-8
// Content-Length: 29
// ETag: W/"1d-9KxNDuuJEQthK/TW1w4C8/3NjsU"
// Date: Tue, 12 Sep 2017 07:17:34 GMT
// Connection: keep-alive
// ```
// 2. res.send() 可以发送 字符串、Buffer对象、对象、数组。


// -----------------------------------------------------------------------------------------
















// // 加载 express 模块
// var express = require('express');
// var path = require('path');

// // 调用 express() 方法，创建 app 对象（其实就类似于 http.createServer()）
// var app = express();

// app.get('/', function (req, res) {

//   // 当我们要向服务器响应 json 数据的时候，直接调用 res.json() 会自动设置相关响应报文头
//   // res.json({name: '张三', age: 18, gender: '男'});


//   // sendFile()
//   // res.sendFile(path.join(__dirname, 'htmls', 'index.html'));


//   // res.redirect() 方法
//   // res.redirect(301, 'http://example.com');
//   // res.redirect('http://www.baidu.com');


//   // res.status() 设置状态码
//   // 注意这样设置完毕后，并没有结束本次请求。
//   // res.status(404);

//   // res.status(404).send('页面未找到！');
//   res.status(200).send('zhaodaola!');
// });


// // 启动服务
// app.listen(9000, function () {
//   console.log('http://localhost:9000');
// });


// // res.send()、res.json()、res.sendFile()、res.redirect()、res.status(code)




// ----------------express 中的路由介绍-------------------------------------------------------------------------





// // 加载 express 模块
// var express = require('express');
// var path = require('path');

// // 调用 express() 方法，创建 app 对象（其实就类似于 http.createServer()）
// var app = express();




// // // 1. 可以通过 app.httpMethod
// // // 通过这种方式设置的路由，当用户请求的时候，http method必须是该请求方法才可以执行
// // 同时请求路径必须完全匹配(req.url 必须等于路由中设置的url), 才可以执行该路由对应的回调函数
// // app.get()
// // app.post()
// // app.put()

// // // 2. app.all()
// // // 必须请求方法是 get, 同时请求路径必须完全匹配 /index 才可以
// // app.get('/index', fn);

// // // 无论是什么请求方法，只要请求路径完全匹配 /index 即可执行后面的回调函数
// // app.all('/index', fn);


// // 3. app.use() 
// //  - 和请求方法无关，无论什么请求方法都可以执行
// //  - 请求路径不需要完全匹配，只要路径中的第一部分匹配即可。
// // /index/abc
// // app.get('/index', function (req, res) {
// //   res.send('hello');
// // });

// // // /
// // // /index/abcfdsafdsfs/fds/fd/saf/saf/dsaf/dsaf/dsa/fds/fds/
// // app.use('/index', function (req, res) {
// //   res.send('hello');
// // });



// // -------------
// // 如果只需要路径第一步部分匹配，但必须是get请求，路由怎么写


// // app.get(/(\/index)|(\/index\/.+)/, function (req, res) {
// //   res.send('hello world');
// // });

// // 有问题！！！！！！！！
// // app.get(/\/index(\/.+)?/, function (req, res) {
// //   res.send('hello world');
// // });

// app.get(/^\/index(\/.+)?$/, function (req, res) {
//   res.send('hello world');
// });

// // 启动服务
// app.listen(9000, function () {
//   console.log('http://localhost:9000');
// });










// ----------------express 中的路由介绍（获取参数）-------------------------------------------------------------------------


// 加载 express 模块
var express = require('express');
var path = require('path');

// 调用 express() 方法，创建 app 对象（其实就类似于 http.createServer()）
var app = express();

// // /details?id=5
// // express 中路由判断的时候是通过 判断 pathname来进行的，不考虑?后面的参数
// app.get('/details', function (req, res) {
//   res.send('匹配到啦!');
// });



// // 在 express 中获取用户 get 请求的数据
// // 方法一：
// app.get('/details', function (req, res) {
//   // body...
//   res.send(req.query);
// });

// 方法二：
// 注意：The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).

app.get('/manager/:name/:password', function (req, res) {
  res.send(req.params);
});


// 启动服务
app.listen(9000, function () {
  console.log('http://localhost:9000');
});
