// 一、搭建项目骨架
// 二、根据不同请求（路由），响应不同数据
// 三、封装 render 方法
// 四、将 render 方法挂载到 res 对象上
// 五、通过 url 模块获取用户 get 请求的数据，并将其保存到 data.json 文件中


// 1. 加载 http 模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');


// 2. 创建 服务
var server = http.createServer(function (req, res) {

  // 做一下处理
  var reqUrl = req.url.toLowerCase();
  var method = req.method.toLowerCase();
  


  // 调用 url 模块的方法来解析请求的url（将 url 字符串解析成为一个 url对象）
  var urlObj = url.parse(reqUrl, true);
  // console.log(urlObj);
  // console.log(urlObj.pathname);

  // 处理用户请求 /favicon.ico 的问题
  // reqUrl = (reqUrl === '/favicon.ico') ? '/resources/favicon.ico' : reqUrl;
  reqUrl = (reqUrl === '/favicon.ico') ? '/resources/images/y18.gif' : reqUrl;


  // 调用 res_render() 方法，为 res 添加一个 render() 函数
  res_render(res);

  // 写代码判断路由
  if ((reqUrl === '/index' || reqUrl === '/') && method === 'get') {
    // 表示请求首页（显示新闻列表）
    // 读取 index.html 返回
    res.render(path.join(__dirname, 'views', 'index.html'));

  } else if (reqUrl === '/details' && method === 'get') {
    // 要显示新闻详情
    res.render(path.join(__dirname, 'views', 'details.html'));

  } else if (reqUrl === '/submit' && method === 'get') {
    // 显示添加新闻页面
    res.render(path.join(__dirname, 'views', 'submit.html'));


  } else if (urlObj.pathname === '/add' && method === 'get') {

    // 表示 get 方式提交一条新闻
    // 1. 获取用户提交的数据(通过内置模块 url 来实现获取用户 get 提交的数据)
    // urlObj.query.title;
    // urlObj.query.url;
    // urlObj.query.text;


    // 0. 读取 data.json 文件中的数据
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function (err, data) {

      // 如果读取文件出错了，并且错误不是文件不存在那么就抛出异常
      // 如果是文件不存在，那么就不认为是出错了，此时data 就是 undefined
      if (err && err.code !== 'ENOENT') {
        throw err;
      }

      var list = JSON.parse(data || '[]');

      // 2. 把数据保存到 data.json 文件中
      // 先把这次提交的新闻对象添加到数组中
      list.push(urlObj.query);
      // JSON.stringify(list)
      // JSON.parse('[]')

      // 把 list 数组中的数据写入到 data.json 文件中
      fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), 'utf8', function (err) {
        if (err) {
          throw err;
        }
        // console.log('ok');

        // 3. 跳转到 /index 或 / 路径（首页）在文件保存成功后再执行跳转
        // 服务器端通过设置响应报文头，实现让浏览器自动跳转
        res.statusCode = 302;
        res.statusMessage = 'Found';
        res.setHeader('Location', '/');
        // 结束请求
        res.end();

      });

    });

  } else if (reqUrl === '/add' && method === 'post') {
    // 表示 post 方式提交一条新闻

    
  } else if (reqUrl.startsWith('/resources') && method === 'get') {
    // /resources/css/news.css
    // 表示拥护请求的是静态资源
    // 如果请求的是静态资源，那么就直接根据用户请求的路径和 __dirname 拼接查找对应的资源即可。
    res.render(path.join(__dirname, reqUrl));
  } else {
    // 404
    res.end('404');
  }
});


// 3. 启动服务
server.listen(8000, function () {
  console.log('http://localhost:8000');
});



// 该方法的作用就是为 res 对象添加一个 render() 方法
function res_render(res) {

  res.render = function (filename) {
    // 显示添加新闻页面
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.statusCode = 404;
        res.statusMessage =  'Not Found';
        res.end('404, page not found');
        return;
      }
      res.setHeader('Content-Type', mime.lookup(filename));
      res.end(data);
    });
  };
}