#! /usr/bin/env node

// 加载 app.js 模块
var app = require('./app.js');


// 调用 app 方法，把用户在命令行中输入的第三个参数传递进去
// 用户在命令行实际的输入: eleven helloeveryone
// 但是事实上相当于 node eleven helloeveryone
app(process.argv[2]);