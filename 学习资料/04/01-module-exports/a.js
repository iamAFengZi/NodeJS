

// 默认情况下，加载一个模块，返回值就是一个对象 {}
// 在一个模块中，module 表示当前模块自身
var b = require('./b.js');

console.log(b);

// b.name = 'tt';
// b.sayHello();

// var r = b(101, 101);
// console.log(r);


// console.log(module.paths);