// 一、搭建项目骨架
// 二、根据不同请求（路由），响应不同数据
// 三、封装 render 方法
// 四、将 render 方法挂载到 res 对象上
// 五、通过 url 模块获取用户 get 请求的数据，并将其保存到 data.json 文件中


// 1. 加载 http 模块
var http = require('http');

console.log('111');

var count = 0;

// 2. 创建 服务
var server = http.createServer(function (req, res) {

  count++;

  console.log('222');

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('计数器的值：' + count);
 
});


// 3. 启动服务
server.listen(8000, function () {
  console.log('http://localhost:8000');
});

console.log('333');


