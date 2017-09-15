// 处理业务请求的业务模块


// 加载 mongodb 模块
var mongodb = require('mongodb');



// 该模块最终返回的是一个对象
// 这个对象上挂载了各种处理不同请求的业务方法
module.exports.index = function (req, res) {
  // 1. 读取所有新闻数据
  // 获取 MongoClient 对象
  var MongoClient = mongodb.MongoClient;
  // 创建连接字符串
  var connStr = 'mongodb://127.0.0.1:27017/hackernews';
  // 调用 connect() 方法连接数据库
  MongoClient.connect(connStr, function (err, db) {
    if (err) {
      throw err;
    }

    // 查询所有新闻数据， news 集合中的数据。
    db.collection('news').find().toArray(function (err, docs) {
      // 先关闭数据库
      db.close();

      if (err) {
        throw err;
      }

      // docs, 查询到的所有数据
      // res.json(docs);
      // 默认 express 框架已经为 res 对象提供了一个 render() 方法，但是需要先配置好模板引擎才能使用、
      res.render('index', {title: '新闻列表', list: docs});
    });
  });

  // 2. 调用模板引擎实现渲染操作
};


// 处理显示添加新闻页面
module.exports.submit = function (req, res) {
  // 读取 submit.html 并返回给用户
  res.render('submit');
};


// 处理 get方式添加新闻
module.exports.addGet = function (req, res) {
  // 1. 获取用户 get 方式提交过来的数据
  // req.query
  // 根据用户提交的数据，构建一个用来插入到数据库中的对象
  var model = {
    title: req.query.title,
    url: req.query.url,
    content: req.query.text
  };

  // body-parser

  // 2. 将用户提交的数据添加到数据库中
  var MongoClient = mongodb.MongoClient;
  // 连接字符串
  var connStr = 'mongodb://127.0.0.1:27017/hackernews';
  // 执行连接操作
  MongoClient.connect(connStr, function (err, db) {
    if (err) {
      throw err;
    }

    // 先获取news集合，然后执行插入操作
    db.collection('news').insertOne(model, function (err, result) {
      db.close();

      if (err) {
        throw err;
      }

      // 3. 让浏览器重定向到
      res.redirect('/');
    });

  });
};

// 处理 post 方式添加新闻
module.exports.addPost = function (req, res) {
  // 1. 获取用户 post 提交的数据
  // req.body
  // console.log(req.body);
  var model = {
    title: req.body.title,
    url: req.body.url,
    content: req.body.text
  };

   // 2. 将用户提交的数据添加到数据库中
  var MongoClient = mongodb.MongoClient;
  // 连接字符串
  var connStr = 'mongodb://127.0.0.1:27017/hackernews';
  // 执行连接操作
  MongoClient.connect(connStr, function (err, db) {
    if (err) {
      throw err;
    }

    // 先获取news集合，然后执行插入操作
    db.collection('news').insertOne(model, function (err, result) {
      db.close();

      if (err) {
        throw err;
      }

      // 3. 让浏览器重定向到
      res.redirect('/');
    });

  });
};


// 处理显示详情的方法
module.exports.details = function (req, res) {
  // 1. 获取用户请求的 id
  // req.query._id

  // 2. 根据 id 从数据库中查找对应的数据
  var MongoClient = mongodb.MongoClient;
  var connStr = 'mongodb://127.0.0.1:27017/hackernews'

  MongoClient.connect(connStr, function (err, db) {
    if (err) {
      throw err;
    }

    // 把字符串转换为 ObjectID 类型
    var objId = new mongodb.ObjectID(req.query._id);

    // use find().limit(1).next(function(err, doc){})
    db.collection('news').find({_id: objId}).limit(1).next(function (err, doc) {
      if (err) {
        throw err;
      }
      // 3. 调用 res.render() 进行渲染
      res.render('details', {model: doc})
    });
  });

  
};