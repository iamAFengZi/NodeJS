// // 加载 moment 模块
// var moment = require('moment');


// var result = moment().format('YYYY年MM月DD HH:mm:ss:SSS');
// console.log(result);



// // -------------------------------------------------------------------
// var iconv = require('iconv-lite');


// var msg = '你好世界！Hello World!';

// // 对 msg 字符串进行 gb2312 编码
// var buf = iconv.encode(msg, 'gb2312');

// console.log(buf);


// // 对 buf 进行解码
// // msg = iconv.decode(buf, 'gb2312');
// msg = iconv.decode(buf, 'utf8'); // 乱码
// console.log(msg);





// ------------------------------------------------------------


// asyn 模块
// 1. 串行执行（一个执行完毕再执行另外一个）

// fs.readFile('./a.txt', function (err, data) {

//   fs.readFile('./b.txt', function (err, data) {

//     fs.readFile('./c.txt', function (err, data) {
//     });

//   });

// });
var async = require('async');
var fs = require('fs');


// async.series([function (callback) {
//   console.log('111');
//   fs.readFile('./a.txt', 'utf8', function (err, data) {
//     callback(err, data);
//   });

// },function (callback) {
//   console.log('222');
//   fs.readFile('./b.txt', 'utf8', function (err, data) {
//     callback(err, data);
//   });

// }, function (callback) {
//   console.log('333');
//   fs.readFile('./c.txt', 'utf8', function (err, data) {
//     callback(err, data);
//   });

// }], function (err, result) {
//   // body...
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// ---------- 把第一个参数由 [] 变成了 {} ---------------------------------
// async.series({
//   one: function(callback) {
//     console.log('111');
//     fs.readFile('./a.txt', 'utf8', function(err, data) {
//       callback(err, data);
//     });

//   },
//   two: function(callback) {
//     console.log('222');
//     fs.readFile('./b.txt', 'utf8', function(err, data) {
//       callback(err, data);
//     });

//   },
//   three: function(callback) {
//     console.log('333');
//     fs.readFile('./c.txt', 'utf8', function(err, data) {
//       callback(err, data);
//     });

//   }
// }, function(err, result) {
//   // body...
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });



// // ---------------------waterfall-------------------------------------------
// async.waterfall([
//   function(callback) {
//     console.log('111');

//     fs.readFile('./a.txt', 'utf8', function(err, data) {
//       callback(err, data);
//     });

//   },
//   function(filename, callback) {
//     console.log('222');

//     fs.readFile(filename, 'utf8', function(err, data) {
//       callback(err, data);
//     });

//   },
//   function(filename, callback) {
//     console.log('333');
//     fs.readFile(filename, 'utf8', function(err, data) {
//       callback(err, data);
//     });

//   }
// ], function(err, result) {
//   // body...
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });



// ------------------------------ parallel并行执行，只有当所有的异步函数都执行完毕后，才会执行最后的那个函数 ---------------

// 多个任务并行执行，但是：只有等到所有任务都执行完毕后才会执行最后的回到函数
async.parallel([function (callback) {
  
  setTimeout(function () {
    callback(null, 'hello');
  },3000);

}, function (callback) {
  
  setTimeout(function () {
    callback(null, 'hi');
  }, 3000);

}], function (err, result) {
  // body...
  console.log(result);
});