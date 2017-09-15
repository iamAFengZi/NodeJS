// 一、搭建项目骨架
// 二、根据不同请求（路由），响应不同数据
// 三、封装 render 方法
// 四、将 render 方法挂载到 res 对象上
// 五、通过 url 模块获取用户 get 请求的数据，并将其保存到 data.json 文件中
// 六、实现 post 方式提交一条新闻
// 七、封装读取、写入 data.json文件的代码，和 获取 post 请求数据的代码


// 1. 加载 http 模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var url = require('url');
var querystring = require('querystring');


// 2. 创建 服务
var server = http.createServer(function(req, res) {

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


    // 1. 读取 data.json 中的数据

    // 2. 渲染




  } else if (reqUrl === '/details' && method === 'get') {
    // 要显示新闻详情
    res.render(path.join(__dirname, 'views', 'details.html'));

  } else if (reqUrl === '/submit' && method === 'get') {
    // 显示添加新闻页面
    res.render(path.join(__dirname, 'views', 'submit.html'));


  } else if (urlObj.pathname === '/add' && method === 'get') {

    // 读取 data.json 文件中的数据
    read_data(function(list) {
      // 将用户 get 提交过来的数据直接 push 到 list中
      list.push(urlObj.query);

      // 把 list 数据写入到 data.json 文件中
      write_data(list, function() {
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

    // 1. 读取 data.json 文件中的数据
    read_data(function(list) {
      // 获取用户 post 提交的数据
      get_post_data(req, function(body) {
        // 并且把 post 提交的数据 push 到 list 中
        list.push(body);

        // 把 list 中的数据再写入到 data.json 文件中
        write_data(list, function() {
          res.statusCode = 302;
          res.statusMessage = 'Found';
          res.setHeader('Location', '/');
          // 结束请求
          res.end();
        });
      });

    });

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
server.listen(8000, function() {
  console.log('http://localhost:8000');
});



// 该方法的作用就是为 res 对象添加一个 render() 方法
function res_render(res) {

  res.render = function(filename) {
    // 显示添加新闻页面
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.end('404, page not found');
        return;
      }
      res.setHeader('Content-Type', mime.lookup(filename));
      res.end(data);
    });
  };
}



// // 封装读取 data.json 文件中的数据的代码
// 错误演示1：
// function read_data() {

//   fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function(err, data) {

//       // 如果读取文件出错了，并且错误不是文件不存在那么就抛出异常
//       // 如果是文件不存在，那么就不认为是出错了，此时data 就是 undefined
//       if (err && err.code !== 'ENOENT') {
//         throw err;
//       }

//       var list = JSON.parse(data || '[]');

//       // 将读取到的数据 list, 返出去（传递出去）
//       return list;
//   });
// } 


// function test(callback) {
//   // body...

//   var str = callback();
// }

// test(function () {
//   return 'fdsfdsafas';
// });




// var result = read_data();

// // 错误演示2：
// // 封装读取 data.json 文件中的数据的代码
// function read_data() {

//   var data;

//   fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function(err, data) {

//       // 如果读取文件出错了，并且错误不是文件不存在那么就抛出异常
//       // 如果是文件不存在，那么就不认为是出错了，此时data 就是 undefined
//       if (err && err.code !== 'ENOENT') {
//         throw err;
//       }

//       var list = JSON.parse(data || '[]');

//       // 将读取到的数据 list, 返出去（传递出去）
//       data = list;
//   });

//   return data;
// }





// (封装读取 data.json 文件的代码)正确：
function read_data(callback) {

  fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf8', function(err, data) {

    // 如果读取文件出错了，并且错误不是文件不存在那么就抛出异常
    // 如果是文件不存在，那么就不认为是出错了，此时data 就是 undefined
    if (err && err.code !== 'ENOENT') {
      throw err;
    }

    var list = JSON.parse(data || '[]');
    // 将读取到的数据 list, 返出去（传递出去）
    callback(list);
  });
}

// read_data(function (shuju) {
//   // 此处的 shuju 就是 read_data() 函数中的 list 值
//   console.log(shuju);
// });




// 封装写入 data.json 文件的代码
function write_data(list, callback) {

  fs.writeFile(path.join(__dirname, 'data', 'data.json'), JSON.stringify(list), 'utf8', function(err) {
    if (err) {
      throw err;
    }

    // 当数据写入完毕后执行
    callback();
  });
}


// 封装获取用户 post 提交的数据的代码
function get_post_data(req, callback) {

  // 用来保存用户 每次 post 提交的数据
  var array = [];

  // 监听 request 的 data 事件
  // 回调函数的参数 chunk 表示一个块数据。是 Buffer 类型的对象
  req.on('data', function(chunk) {
    array.push(chunk);
  });


  // 再监听 request 的 end 事件
  // 当 end 事件被执行的时候，表示所有数据都提交完毕了
  req.on('end', function() {
    // 把 array 里面的 n 个 Buffer 对象编程 1个 Buffer对象
    // body 是一个 “大” buffer 对象
    var body = Buffer.concat(array);

    // 把用户提交过来的 数据（buffer）转成字符串
    body = body.toString('utf8');
    // console.log(body); // title=ddddd&url=dddddd&text=dddd

    // 通过调用 内置模块 querystring，把 查询字符串 转换为 json 对象
    body = querystring.parse(body);

    // 把 body 数据传递出去
    callback(body);
  });

}