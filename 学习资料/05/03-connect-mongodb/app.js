

// --------------------------------- 连接数据库 -------------------------------
// // 1. 加载 mongodb 模块
// var mongodb = require('mongodb');

// // 2. 获取 MongoClient 对象
// var MongoClient = mongodb.MongoClient;


// // 3. 创建一个连接字符串
// var connStr = 'mongodb://127.0.0.1:27017/eleven';


// // 4. 连接数据库
// MongoClient.connect(connStr, function (err, db) {
//   console.log('数据库连接成功！');

//   // 关闭数据库连接
//   db.close();
//   console.log('数据库已经成功关闭！');
// });




// ----------------------- 连接数据库执行查询操作 --------------------------------------

// 1. 加载 mongodb 模块
var mongodb = require('mongodb');

// 2. 获取 MongoClient 对象
var MongoClient = mongodb.MongoClient;


// 3. 创建一个连接字符串
var connStr = 'mongodb://127.0.0.1:27017/eleven';


// 4. 连接数据库
MongoClient.connect(connStr, function (err, db) {

  // 如果连接数据库出错
  if (err) {
    throw err;
  }

  // 1. 获取要查询的集合
  db.collection('students').find().toArray(function (err, docs) {
    // 如果查询数据出错
    if (err) {
      throw err;
    }

    // 打印输出查询的结果
    console.log(docs);
    // 关闭数据库连接（一定要记住是在执行完所有操作以后再关闭数据库连接）
    db.close();
  });

});



