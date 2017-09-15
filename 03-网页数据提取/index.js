
// 1. 向服务器发起请求，获取服务器返回的 HTML 代码
var https = require('https');
// 加载 cheerio 模块
var cheerio = require('cheerio');
var fs = require('fs');

// GET / HTTP/1.1
// Host: www.qiushibaike.com
// Connection: keep-alive
// Cache-Control: max-age=0
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36
// Upgrade-Insecure-Requests: 1
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
// Accept-Encoding: gzip, deflate, br 【不要写这个】
// Accept-Language: zh-CN,zh;q=0.8,en;q=0.6

// 构建 http 请求报文
var options = {
  hostname: 'www.qiushibaike.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers:{
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36',
    'Upgrade-Insecure-Requests': '1',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6'
  }
};

// 调用 request 方法向服务器发起请求
// 这里返回的 req 是一个 ClientRequest 对象，不是 IncomingMessage
var req = https.request(options, function (res) {
  // 获取服务器响应的数据
  // 监听 res 的 data 事件 和 end 事件

  var array = [];
  res.on('data', function (chunk) {
    array.push(chunk);
  });


  res.on('end', function () {
    var html = Buffer.concat(array);
    html = html.toString('utf8');
    // console.log(html);

    // 通过 cheerio 模块来解析HTML代码中的内容
    // 1. 调用 cheerio 的 load 方法
    var $ = cheerio.load(html);
    // 通过选择器找到我们要的内容
    // $('h2')

    var contents = [];
    $('div.article.block.untagged.mb15').each(function (idx, ele) {

      var model = {
        author: $(ele).find('h2').text(),
        content: $(ele).find('div.content span').text()
      };

      contents.push(model); 
    });



    // 把段子写到一个 json 文件中 
    fs.writeFile('./jokes.json', JSON.stringify(contents), function (err) {
      console.log('ok');
    });
  });
});

// 监听错误事件，出错后可以处理
req.on('error', function (err) {
  console.log('出错了，详细信息：');
  console.log(err);
});



// 告诉服务器请求都发送完毕了
req.end();

// 2. 解析 html 代码获取其中的段子正文和作者昵称