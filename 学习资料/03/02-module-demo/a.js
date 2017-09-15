

// 在当前模块中加载 b.js 这个模块
// 当加载文件模块的时候要写一个路径（相对路径、绝对路径）
// 通过 require() 加载文件模块的时候，我们写的相对路径指的就是相对于当前模块的路径
// 所以不需要 通过 __dirname 来拼接路径

// require() 加载模块是同步执行的
// var b = require('./b.js');
// var c = require('./c.js');

// console.log('b 模块加载完了。');
// node.js 每次加载一个模块都会将该模块缓存起来，这样的话下载再加载的时候直接读取缓存中的模块对象，不会再次加载该模块了

// require('http');
// require('mime');

require('http');

// require('./b');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');
// require('./b.js');

console.log(module.paths);