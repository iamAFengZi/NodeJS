

// 1. 加载 ejs 模块
var ejs = require('ejs');
var path = require('path');


// 2. 调用 ejs 模块的一些方法来执行模板渲染
var html = '<h1><%= name %></h1>';


// 一、
// // 调用 ejs.render() 方法来渲染
// var result = ejs.render(html, {name: '张学友'});
// console.log(result);



// 二、
// // 调用 ejs.renderFile() 方法来渲染
// ejs.renderFile(path.join(__dirname, 'index.html'), {title: '问候', name: '张三', message: '你好'}, function (err, str) {
//   if (err) {
//     throw err;
//   }
//   console.log(str);
// });



// 三、
// 调用 compile()
// undersocre
// var compiled = _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"

// ejs
// var template = ejs.compile(str, options);
// template(data);
// // => Rendered HTML string 


var template = ejs.compile(html);
var result = template({name: '李四'});
console.log(result);