

// // console.log('b');



// // 
// // module

// // 设置当其他模块加载 b.js 这个模块时的返回值
// // module.exports = '哈哈哈哈';

// // module.exports = 222;


// // module.exports = function (x, y) {
// //   return x + y;
// // };

// // {}

// module.exports.name = 'rr';

// module.exports.age = 18;

// module.exports.sayHello = function () {
//   console.log('hello' + this.name);
// };


// function add(a, b) {
//   return a + b;
// }


// var haha = 'fdsafds';







// -------------------------------- module.exports 和 exports 的区别 --------------------------------

module.exports.name = 'cc';

exports.age = 18;

exports.sayHello = function () {
  console.log('hi ' + this.name + ', age：' + this.age );
};


// module.exports = '哈哈';

exports = '哈哈';




// 每个模块中相当于有如下代码，返回 module.exports 对象
// exports 是 module.exports 的一个引用。
// 但每个模块最终返回的是 module.exports
// return module.exports;


// module, 表示当前模块自身
// module.exports， 表示当前模块返回值（其他模块 require() 加载当前摸得时的返回值）也可以叫当前模块对外暴露的成员（接口）
// exports, 是 module.exports 的一个引用。
// 注意：每个模块最终返回的 module.exports