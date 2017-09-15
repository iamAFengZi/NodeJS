
// 1. 向服务器发起请求，获取服务器返回的 HTML 代码
var https = require('https');
// 加载 cheerio 模块
var cheerio = require('cheerio');
var fs = require('fs');



// 构建 http 请求报文
// var options = {
//   hostname: 'www.qiushibaike.com',
//   port: 443,
//   path: '/',
//   method: 'GET',
//   headers:{
//     'Connection': 'keep-alive',
//     'Cache-Control': 'max-age=0',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36',
//     'Upgrade-Insecure-Requests': '1',
//     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//     'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6'
//   }
// };

// http://search.51job.com/list/020000,000000,0000,00,9,99,node.js,2,1.html?lang=c&stype=&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&providesalary=99&lonlat=0%2C0&radius=-1&ord_field=0&confirmdate=9&fromType=&dibiaoid=0&address=&line=&specialarea=00&from=&welfare=
// var options = {
//   hostname: 'search.51job.com',
//   port: 80,
//   path: '/list/020000,000000,0000,00,9,99,node.js,2,1.html?lang=c&stype=&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&providesalary=99&lonlat=0%2C0&radius=-1&ord_field=0&confirmdate=9&fromType=&dibiaoid=0&address=&line=&specialarea=00&from=&welfare=',
//   method: 'GET',
//   headers:{
//     'Connection': 'keep-alive',
//     'Cache-Control': 'max-age=0',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.91 Safari/537.36',
//     'Upgrade-Insecure-Requests': '1',
//     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//     'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6'
//   }
// };


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



    // 1. 字符串的 match() 方法来提取内容
    // 返回值是一个数组，该数组中包含了所有匹配到的结果
    // var result = html.match(/<h2>\s*.+\s*<\/h2>/ig);
    // console.log(result);

    // 2. 使用正则表达式的 exec() 方法来提取

    // // 用来保存所有的作者名称
    // var authors = [];
    // // 2.1 创建一个正则表达式
    // var regAuthor = /<h2>\s*(.+)\s*<\/h2>/ig
    // // 2.2 调用正则表达式的 exec() 方法进行提取
    // // exec() 方法，调用一次，提取一个匹配
    // // exec() 方法的返回值是一个数组，这个数组中包含匹配到的字符串 和 提取组的内容（正则表达式中小括号中的内容）
    // // exec() 方法当找不到匹配内容的时候返回 null
    // var result;
    // while ( result = regAuthor.exec(html) ) {
    //   // 输出匹配到的内容
    //   // console.log(result[0] + '----------------' + result[1]);
    //   authors.push(result[1]);
    // }



    // 提取段子正文
    var contents = [];
    var regContents = /<div class="content">\s*<span>\s*(.+\s*.+)\s*<\/span>\s*(<span class="contentForAll">查看全文<\/span>)?\s*<\/div>/ig;

    while ( result = regContents.exec(html) ) {
      contents.push(result[1]);
    }
    console.log(contents.length);


    // 51job匹配职位信息
    // /<a target="_blank" title=".+" href="http:\/\/jobs.51job.com\/.+\/\d{8}.html\?s=01&amp;t=0" onmousedown="">\s*(.+)\s*<\/a>/ig





    
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