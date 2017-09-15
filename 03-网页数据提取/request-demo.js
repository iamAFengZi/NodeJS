

// 加载 request 模块
var request = require('request');
var fs = require('fs');

// // 发起请求
// request('https://www.baidu.com/', function (err, res, body) {
//   // body...
//   // console.log(err);

//   // console.log(res.headers);

//   console.log(body);
// });




// 下载图片
request('https://www.baidu.com/img/bd_logo1.png').pipe(fs.createWriteStream('./baidu.png'));
console.log('ok');