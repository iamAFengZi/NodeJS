var _ = require('underscore');

// // zip
// var names = ['聪聪', '明明', '婷婷', '黄黄'];
// var age = [18, 19, 20, 21];
// var genders = ['男', '男', '女', '男'];

// var result = _.zip(names, age, genders);
// console.log(result);

// result = _.unzip(result);

// console.log(result);



// _.template() 方法演示

var html = '<h1>===<%= name %>===</h1>';

// 开始调用 _.template() 方法进行模板替换
// template() 方法的返回值是一个函数, 这个函数中的代码就是做模板字符串替换的代码
var func = _.template(html);

html = func({name: '聪聪'});

console.log(html);

// underscore 的 template() 方法使用分两步：
// 1. 调用 template() 方法生成一个函数
// 2. 调用这个生成的函数，把要替换的数据对象传递进去，这个方法的返回值就是替换后的结果。