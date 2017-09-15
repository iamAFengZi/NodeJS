
// var x = 10;
// var y = 100;

// function add(m, n) {
//   return m + n;
// }

// var names = ['bob', 'steve', 'john'];


// var r = add(x, y);

// console.log(r);

// console.log('Hello World!');


// // node.js 帮我们实现了 console.log() 这个 api 所以我们也可以使用了
// console.log('你好世界！');








//----------------------------------
// console.log('a');
// console.log('b');

// console.log('ab');


// process.stdout.write('a\n');
// process.stdout.write('b');


// --------------------------------------------------------

// for (var row = 0; row < 10; row++) {

//   for (var col = 0; col <= row; col++) {
//     process.stdout.write('* ');
//   }

//   // 输出换行
//   process.stdout.write('\n');
// }


// process、console模块属于 全局模块，使用的时候可以直接使用，不需要通过 require() 来加载。
// 但是对于其他非全局模块使用的时候必须通过 require() 来加载该模块然后才能使用
// ---------------------------------------------------------- 
// readline

// // 加载 readline 模块
// var readline = require('readline');

// // 通过 readline 对象创建一个和用户进行交互的接口对象
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// // 向控制台输出一句话，并且接收用户的输入
// rl.question('请输入您的姓名：', function (answer) {
//   console.log('您输入的姓名是：' + answer);

//   rl.close();
// });




















// (function (__dirname, __filename, require, module) {
  

//   //.....


//   __dirname
  
// })('jfkdsafjdsaf __dirname', 'fdsafdsafdsfs');