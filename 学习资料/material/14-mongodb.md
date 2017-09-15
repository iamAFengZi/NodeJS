




# MongoDB




## 介绍

1. MongoDB 是什么？
  - MongoDB（来自于英文单词“Humongous”，中文含义为“庞大”）是可以应用于各种规模的企业、各个行业以及各类应用程序的开源数据库。
  - MongoDB是一种文档导向的数据库管理系统, 里面存储的是类似于 json 的文档（BSON）
    + 即可以用一条记录（一个文档）表示非常复杂的层次关系
  - 文档是 MongoDB 中数据的基本单元
  - 一堆文档放在一起就表示一个集合（类似于关系型数据库中的没有模式的“表”）【集合就是一组文档】
  - 不需要提前设计表模式
  - 快速
  - 分布式存储（高可扩展性）
  - 非关系型数据库
  - 单个 MongoDB 实例上可以有多个数据库
  - MongoDB 自带 JavaScript Shell
  - 每一个文档都有一个 _id 键，用来唯一标识一个集合中的某一条数据（文档）


2. 为什么选择 MongoDB
- 学习成本较低
- 和 Node.js 结合最好，对 JavaScript 兼容较好


3. 参考网站
  1. [官网](https://www.mongodb.com/)
  2. [中文页介绍](https://www.mongodb.com/cn)
  2. [MongoDB中文社区](http://www.mongoing.com/)
  3. [MongoDB菜鸟教程](http://www.runoob.com/mongodb/mongodb-tutorial.html)





## 安装 MongoDB

1. Install on OS X
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

2. Install on Windows
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/


3. 安装配置步骤：
  1. 安装 mongodb
  2. 配置环境变量
  3. 在 cmd 中输入 mongo --version 检查是否配置好了环境变量
  4. 创建 C:\data\db 目录(在哪个目录启动 mongod 就在哪个磁盘根目录下创建 data 下的 db 目录)
  5. 在 cmd 中输入 mongod 
  6. 启动成功： waiting for connections on port 27017
  7. 注意：官方不再支持32位版本了


4. 启动时指定数据保存路径
mongod --dbpath d:\itcast\xx

5. mongo shell 客户端连接数据库
  - mongo
  - mongo --host 192.168.1.10 --port 27017
  - mongo 127.0.0.1:27017/sms

6. mongo shell 停止服务
```javascript
use admin
db.shutdownServer();
```



## mongodb shell 命令
```
// 1. 查看当前实例下有哪些数据库、
> show dbs

// 2. 查看当前在哪个数据库下面
> db

// 3. 进入某个数据库
> use sms

// 4. 查看当前数据库下有哪些集合
> show collections

// 5. 创建一个新的数据库（必须在该数据库下再创建集合，否则该数据库并不会创建）
> use NewDB


// 6. 向集合中插入数据
> db.teachers.insert({name: '小马哥', age: 17, gender: 'wan'});

// 7. 查询集合中的数据
> db.teachers.find();
> db.teachers.find().pretty();

// 8. 条件查询
> db.teachers.find({age: 16});
> db.teachers.find({age: {$gt: 16}});
> db.teachers.find({age: {$gte: 16}});
> db.teachers.find({age: {$lt: 17}});
> db.teachers.find({age: {$lte: 17}});


// 9. 更新
// 9.1 替换，找到 name = '老公' 的，将这个对象替换成 {name: '老宫'}
> db.teachers.update({name: '老公'}, {name: '老宫'});
// 9.2 修改
> db.teachers.update({name: '星哥'}, {$set: {gender: '女'}});
// 9.3 增长
$inc
> db.teachers.update({unitprice: 200}, {$inc: {id: 30}});
// 9.4 更新多行
> db.teachers.update({gender: '男'}, {$set: {name: '星哥'}}, {multi: true});

// 10. 删除
// 全部删除
> db.teachers.remove({});
// 根据条件删除
> db.teachers.remove({age: {$gte: 18}});

```



## MongoDB 注意点

1. 文档中键值对是有顺序的（顺序不同的两个文档被认为是两个不同的文档）

{name: 'steve', age: 18}
{age: 18, name: 'steve'}

2. 文档中不能有重复的键

{age: 18, name: 'steve', age: 20}


3. 集合是无模式的，一个集合里的文档可以是各式各样的。








## 启动数据库服务、连接访问数据库

### 启动数据库服务
1. 创建目录 `c:\data\db\ ` 
  + 在启动的时候，可以通过 `--dbpath` 指定数据服务存储数据的目录
2. 在命令行输入 `mongod` 启动服务
3. 停止服务：按 control + c，不要直接通过关闭 cmd 窗口的方式来关闭

### 提示：如果不加 `--dbpath`, mongod 会自动使用 `执行命令所属磁盘根目录/data/db` 目录作为自己的数据存储路径，
所以，如果当前磁盘已经有了 `磁盘根路径\data\db` 目录了，可以省略 `--dbpath`。

### 执行完上面的命令并成功开启 MongoDB 数据服务实例之后，就把该控制台最小化到一边就可以了，
千万不要关闭，否则关闭终端就是关闭数据库了，


### 连接数据库
1. 再打开一个 cmd 窗口
2. 通过 mongo 命令连接数据库服务器
3. mongo 命令默认去连接本机上的 MongoDB 服务实例：`127.0.0.1:27017`
4. 可以通过下面的命令，指定连接的主机名和端口号：
```bash
mongo --host 127.0.0.1 --port 27017
```

### 提示：如果提示 “无法连接主机”，请检查你的 MongoDB 数据服务实例是否开启。



## MongoDB 数据存储结构

- 传统的关系型数据库中存储结构
  + 一个机器上安装数据库其实就是安装了一个数据服务实例
  + 一个数据服务实例上可以有多个数据库
    * a 网站的用户
    * b 网站的用户
    * a 网站的用户表、b 网站的用户表
  + 一个数据库中可以有多张表
  + 一张表中可以存储多条记录数据
- 数据服务实例 -> 数据库 -> 表 -> 记录


- 在一个数据服务中可以有多个数据库
- 在一个数据库中可以有多个集合
  + 在 MongoDB 中，把表称之为集合
  + 集合简单理解就是一个数组
- 在一个集合中可以有多个对象（json）（在mongodb 中称之为文档）,是一个特殊的 json 对象
  + 称之为 bson

```json
{
  a: { 
    users: [
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' },
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' }
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' }
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' }
      ...
    ],
    articles: [
      { title: 'xxx', content: '', time: '' },
      { title: 'xxx', content: '', time: '' },
      { title: 'xxx', content: '', time: '' },
      { title: 'xxx', content: '', time: '' },
      { title: 'xxx', content: '', time: '' },
      ...
    ]
  },
  b: { 
    users: [
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' },
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' }
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' }
      { username: 'xxx', password: 'xxx', age: 'xxx', gender: 'xx' }
      ...
    ],
  },
  c: {  }
}
a 数据库
   用户数据：用户集合[]
   文章数据：文章集合[]
   评论数据：评论集合[]
   商品数据：商品集合[]
   订单数据：订单集合[]

b 数据库

c 数据库

```

## 基本操作命令

- `show dbs`
  + 查看当前服务实例上所有的数据库

- `use 数据库名称`
  + 这个命令表示切换到指定的数据库
  + 如果没有，也不会创建
  + 如果已经有了，则表示切换到这个数据库对该数据库进行操作
  + 连接到数据库之后，默认有一个变量叫做：db，终端默认把 db 赋值给了 test

- `db`
  + 查看当前所处的数据库

- `db.集合名称.insert(数据文档)`
```
> db.news.insert({id:1, title:"news title", url:"http://www.baidu.com", text:"百度一下，你就知道"});

> db.news.insert({id:2, title:"news title", url:"http://www.baidu.com", text:"百度一下，你就知道2"});

> db.news.insert({id:3, title:"news title", url:"http://www.baidu.com", text:"百度一下，你就知道3"});

> db.news.insert({id:4, title:"news title", url:"http://www.baidu.com", text:"百度一下，你就知道4"});

> db.news.insert({id:5, title:"news title", url:"http://www.baidu.com", text:"百度一下，你就知道5"});
```

- `show collections`
  + 查看当前数据库中所有的集合

- `db.集合名称.find()`
  + 查询指定集合中所有的数据
  + 可以通过 `db.集合名称.find().pretty()` 美化输出格式
  + 默认是查询所有，可以通过：`db.集合名称.find({查询条件})` 按条件查询集合中的数据

- `db.集合名称.update({更新条件}, {$set: {要更新的字段}})`
  + 更新指定集合数据

- `db.集合名称.remove({删除条件})`
  + 删除指定集合中的数据

- 参考文档：https://docs.mongodb.com/manual/crud/



## CRUD

---

### 使用 MongoDB 官方提供的 mongodb 驱动包操作 MongoDB 数据库

安装：

```bash
npm install mongodb --save
```

CRUD：

参考文档：
- https://www.npmjs.com/package/mongodb#connecting-to-mongodb
- http://mongodb.github.io/node-mongodb-native/2.2/

```js
var mongodb = require('mongodb')

// 连接路径URL
var url = 'mongodb://localhost:27017/itcast'

var MongoClient = mongodb.MongoClient

// ================== 插入数据 ==================
// 1. 连接数据库（打开冰箱门）
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     throw new Error('连接失败')
//   }

//   // 2. 把大象放到冰箱
//   db
//     .collection('heros')
//     .insert({ name: '张飞', gender: '男', age: 23 }, function (err, result) {
//       if (err) {
//         throw new Error('插入数据失败')
//       }
//       console.log(result)

//       // 3. 关上冰箱门
//       db.close()
//     })
// })
// ================== /插入数据 ==================


// ================== 查询数据 ==================
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     throw new Error('连接失败')
//   }

//   // 查询所有
//   // db.collection('heros').find({}).toArray(function (err, docs) {
//   //   if (err) {
//   //     throw new Error('查询数据失败')
//   //   }
//   //   console.log(docs)
//   // })

//   // 按条件查询
//   db.collection('heros').find({name: '张飞'}).toArray(function (err, docs) {
//     if (err) {
//       throw new Error('查询数据失败')
//     }
//     console.log(docs)
//   })
// })
// ================== /查询数据 ==================



// ================== 更新数据 ==================
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     throw new Error('连接失败')
//   }
//   db.collection('heros').updateOne({name: '张飞'}, {
//     $set: {
//       age: 20
//     }
//   }, function (err, result) {
//     if (err) {
//       throw new Error('更新失败')
//     }
//     console.log(result)
//   })
// })
// ================== /更新数据 ==================


// ================== 删除数据 ==================
// MongoClient.connect(url, function (err, db) {
//   if (err) {
//     throw new Error('连接失败')
//   }
//   db.collection('heros').deleteOne({name: '张飞'}, function (err, result) {
//     if (err) {
//       throw new Error('删除失败')
//     }
//     console.log(result)
//   })
// })
// ================== /删除数据 ==================
```




MongoDB 概念解析
不管我们学习什么数据库都应该学习其中的基础概念，在mongodb中基本的概念是文档、集合、数据库，下面我们挨个介绍。
下表将帮助您更容易理解Mongo中的一些概念：
SQL术语/概念  MongoDB术语/概念  解释/说明
database  database  数据库
table collection  数据库表/集合
row document  数据记录行/文档
column  field 数据字段/域
index index 索引
table joins   表连接,MongoDB不支持
primary key primary key 主键,MongoDB自动将_id字段设置为主键









参考：http://www.runoob.com/mongodb/mongodb-query.html

如果你熟悉常规的 SQL 数据，通过下表可以更好的理解 MongoDB 的条件语句查询：
操作  格式  范例  RDBMS中的类似语句
等于  {<key>:<value>} db.col.find({"by":"菜鸟教程"}).pretty() where by = '菜鸟教程'
小于  {<key>:{$lt:<value>}} db.col.find({"likes":{$lt:50}}).pretty()  where likes < 50
小于或等于 {<key>:{$lte:<value>}}  db.col.find({"likes":{$lte:50}}).pretty() where likes <= 50
大于  {<key>:{$gt:<value>}} db.col.find({"likes":{$gt:50}}).pretty()  where likes > 50
大于或等于 {<key>:{$gte:<value>}}  db.col.find({"likes":{$gte:50}}).pretty() where likes >= 50
不等于 {<key>:{$ne:<value>}} db.col.find({"likes":{$ne:50}}).pretty()  where likes != 50



----------------------------------------------------------------
> show dbs
admin  0.000GB
local  0.000GB
> use itcast
switched to db itcast
> show dbs
admin  0.000GB
local  0.000GB
> db.students.insert({sid:10001, sname: "顾明诗雨", sage:18, gender: "male"});
WriteResult({ "nInserted" : 1 })
> db.students.insert({sid:10002, sname: "吴彦祖", sage:19, gender: "male"}););
WriteResult({ "nInserted" : 1 })
> db.students.insert({sid:10002, sname: "杨曲", sage:19, gender: "female"});
WriteResult({ "nInserted" : 1 })
> db.students.insert({sid:10004, sname: "杨倩", sage:16, gender: "female"});;;                                          WriteResult({ "nInserted" : 1 })
> db.students.find();
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10001, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10002, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10002, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
> db.students.find().pretty();
{
        "_id" : ObjectId("597162d926397f0e54d83e3c"),
        "sid" : 10001,
        "sname" : "顾明诗雨",
        "sage" : 18,
        "gender" : "male"
}
{
        "_id" : ObjectId("597162cf022c47460ccf7fc7"),
        "sid" : 10001,
        "sname" : "jack",
        "sage" : 18
}
{
        "_id" : ObjectId("597162f526397f0e54d83e3d"),
        "sid" : 10002,
        "sname" : "吴彦祖",
        "sage" : 19,
        "gender" : "male"
}
{
        "_id" : ObjectId("597162ea022c47460ccf7fc8"),
        "sid" : 10002,
        "sname" : "rose",
        "sage" : 18
}
{
        "_id" : ObjectId("5971630d26397f0e54d83e3e"),
        "sid" : 10002,
        "sname" : "杨曲",
        "sage" : 19,
        "gender" : "female"
}
{
        "_id" : ObjectId("5971632426397f0e54d83e3f"),
        "sid" : 10004,
        "sname" : "杨倩",
        "sage" : 16,
        "gender" : "female"
}
{
        "_id" : ObjectId("5971632e022c47460ccf7fc9"),
        "sid" : 10003,
        "sname" : "adaqin",
        "sage" : 18
}
> db.students.find();
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10001, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10002, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10002, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
{ "_id" : ObjectId("5971632e022c47460ccf7fc9"), "sid" : 10003, "sname" : "adaqin", "sage" : 18 }
> db.students.update({sname: "jack"}, {$set:{sid: 10005}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.find();
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10005, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10002, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10002, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
{ "_id" : ObjectId("5971632e022c47460ccf7fc9"), "sid" : 10003, "sname" : "adaqin", "sage" : 18 }
> db.students.update({sname: "rose"}, {$set:{sid: 10006}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.find();
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10005, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10006, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10002, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
{ "_id" : ObjectId("5971632e022c47460ccf7fc9"), "sid" : 10003, "sname" : "adaqin", "sage" : 18 }
> db.students.update({sname: "杨曲"}, {$set:{sid: 10007}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.find();                                    );
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10005, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10006, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10007, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
{ "_id" : ObjectId("5971632e022c47460ccf7fc9"), "sid" : 10003, "sname" : "adaqin", "sage" : 18 }
> db.students.find({sage:18});
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10005, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10006, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971632e022c47460ccf7fc9"), "sid" : 10003, "sname" : "adaqin", "sage" : 18 }
> db.students.find({sage:{$gt:18}});
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10007, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
> db.students.find({sage:{$lt:18}});
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
> db.students.find({sage:{$lte:18}});
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10005, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10006, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
{ "_id" : ObjectId("5971632e022c47460ccf7fc9"), "sid" : 10003, "sname" : "adaqin", "sage" : 18 }
> db.students.find();
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10005, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10006, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10007, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
{ "_id" : ObjectId("5971632e022c47460ccf7fc9"), "sid" : 10003, "sname" : "adaqin", "sage" : 18 }
> db.students.remove({sid: 10003});
WriteResult({ "nRemoved" : 1 })
> db.students.find();
{ "_id" : ObjectId("597162d926397f0e54d83e3c"), "sid" : 10001, "sname" : "顾明诗雨", "sage" : 18, "gender" : "male" }
{ "_id" : ObjectId("597162cf022c47460ccf7fc7"), "sid" : 10005, "sname" : "jack", "sage" : 18 }
{ "_id" : ObjectId("597162f526397f0e54d83e3d"), "sid" : 10002, "sname" : "吴彦祖", "sage" : 19, "gender" : "male" }
{ "_id" : ObjectId("597162ea022c47460ccf7fc8"), "sid" : 10006, "sname" : "rose", "sage" : 18 }
{ "_id" : ObjectId("5971630d26397f0e54d83e3e"), "sid" : 10007, "sname" : "杨曲", "sage" : 19, "gender" : "female" }
{ "_id" : ObjectId("5971632426397f0e54d83e3f"), "sid" : 10004, "sname" : "杨倩", "sage" : 16, "gender" : "female" }
>