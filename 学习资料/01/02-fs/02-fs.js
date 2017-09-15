

// // 1. 文件写入
// // 加载 fs 模块
// var fs = require('fs');

// // 创建要写入文件的字符串内容
// var msg = 'hello world！你好世界！';

// console.log('1111');
// // 执行文件写入操作
// fs.writeFile('./abc.txt', msg, 'utf8', function (err) {
//   // 如果此次文件写入操作成功，那么 err 就是 null
//   // 只要 err 不是 null，表示文件写入操作失败！
//   if (err) {
//     throw err;
//   }

//   console.log('文件写入成功！');
// });

// console.log('2222');






// 2. 文件读取

// // 加载 fs 模块
// var fs = require('fs');

// // 读取文件
// fs.readFile('./abc.txt', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   // 默认情况下读取到的文件内容 data，是一个 Buffer 对象。
//   // 把 Buffer 对象转换为字符串
//   console.log(data.toString('utf8'));
// });







// // 加载 fs 模块
// var fs = require('fs');

// console.log('1111');

// // 读取文件
// // 文件读取操作是异步执行的
// fs.readFile('./abc.txt', 'utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
// });

// console.log('2222');








// // 文件同步写入和读取

// var fs = require('fs');

// // 演示一个同步的文件写入
// fs.writeFileSync('./aaa.txt', '哈哈哈哈哈啊');

// // 演示同步文件读取
// var content = fs.readFileSync('./aaa.txt', 'utf8');
// console.log(content);



// -------------------------------------- 文件读写时的路径问题 -----------------------------------
// // 加载 fs 模块
// var fs = require('fs');

// // 读取文件
// fs.readFile('./abc.txt', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   // 默认情况下读取到的文件内容 data，是一个 Buffer 对象。
//   // 把 Buffer 对象转换为字符串
//   console.log(data.toString('utf8'));
// });


// // 问题：
// // 在文件读写的时候，写 './' 相对路径，表示的是相对于当前启动 node 命令的路径，而不是正在被执行的 js 文件的路径

// // 我们希望：
// // 永远获取的是当前正在被执行的 js 文件所在的路径



// // __dirname 永远表示正在被执行的 js 文件所在的路径
// // __filename 永远表示正在被执行的 js 文件的完整路径
// console.log(__dirname);
// console.log('---------------------');
// console.log(__filename);




// // 使用 __dirname 来拼接文件路径，不再使用 ./ 相对路径了

// var fs = require('fs');
// var path = require('path');

// // var filename = __dirname + '\\abc.txt';
// var filename = path.join(__dirname, 'abc.txt');

// console.log(filename);
// fs.readFile(filename, 'utf8', function (err, data) {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });


// // /Users/Desktop/abc/a.txt



















// ------------------------------- 通过 try-catch  捕获异常 --------------------------

// // 同步操作，通过 try-catch 捕获异常
// var fs = require('fs');
// try {

//   var content = fs.readFileSync('./abcd.txt', 'utf8');
//   console.log(content);

// } catch(e) {
//   console.log('出错了：' + e);
// }

// console.log('哈哈啊哈哈哈哈');




// 异步操作
// 异步操作是无法通过 try-catch 来捕获异常的
// 异步操作进行错误判断，只能在 回调函数中，通过 判断 err 错误对象来进行处理
var fs = require('fs');

try {
  fs.readFile('./abdc.txt', 'utf8', function (err, data) {
    // body...
    // err.code 错误号
    // if (err && err.code === 'ENOENT') {

    // }
    // err.code === 'ENOENT'
    console.log(data);
  });
} catch(e) {
  console.log('出错啦！' + e);
}




// ------------- 错误优先 error-first
// 在回调函数的参数中，一般第一个参数都是错误对象。这种方式叫做 “错误优先” “error-first”