# 模块化



## 什么是模块？
- 每个.js文件就是一个模块
- 从npm上下载的一个包（可能是由多个文件组成的一个实现特定功能的包）也是一个模块
- 任何文件或目录只要可以被Node.js通过`require()`函数加载的都是模块
- 每个模块就是一个独立的作用域，模块和模块之间不会互相"污染"
- 我们可以通过编程的方式，指定某个模块要对外暴露的内容（其实就是指定require的返回值，通过require的返回值对外暴露指定内容）。这个对外暴露内容的过程也叫"导出" `module.exports`
- 

## 什么是包？
- 通过package.json描述的一个文件或目录（可以理解成一个实现某个功能的1个文件或多个文件，通过package.json组织起来）
- 包不一定能被Node.js通过`require()`来加载，那么就不就叫模块。比如有些包中没有设置启动文件（package.json中的main字段），就不是模块。


## 参考链接：https://docs.npmjs.com/how-npm-works/packages


## 在Node.js中模主要分为：核心模块 和 文件模块

### 核心模块
- http、fs、path、url、net、os、readline、......
- 核心模块在Node.js自身源码编译时，已经编译成二进制文件
- 部分核心模块在Node.js进程启动的时候已经默认加载到缓存里面了

### 文件模块
- 文件模块可以是：*.js 模块、*.node模块、*.json模块，这些都是文件模块
- 无论从npm上下载的第三方模块还是我们自己编写的模块都是文件模块


## 模块化的好处
- 模块和模块之间不会出现变量"污染"，一个模块就是一个作用域。
- 模块化开发效率高、可维护性好
- 模块化可以做到职责分离，每个模块实现一个独立的功能



## 模块加载
### 无论是核心模块还是文件模块加载都是采用`require('标识符')`来

### 核心模块的加载速度是最快的

### 无论是 核心模块 还是 文件模块，加载过一次后都会缓存起来，第二次加载（第二次require）的时候直接从缓存中读取即可。所以模块中的代码只在第一次加载的时候执行一次，这点要注意。

### 核心模块只能通过 "模块名称" 来加载，例如：`require('模块名称')`

### 文件模块可以通过 require 指定路径的方式来加载（路径可以是文件路径 或 目录）
- `require('./a/b.js')` 通过指定相对路径来加载模块
-  `require('/a/b.js')` 或 `require('c:\a\b.js')` 通过指定绝对路径来加载
-  注意：`require('')`加载模块的时候，相对路径永远相对于当前模块，不受node命令执行的路径影响。

### 通过路径的方式加载文件模块时，文件的后缀可有可无
- 省略后缀名后，Node.js默认会以：.js、.node、.json的顺序来加载（依次拼接不同的后缀，查找并尝试加载）。
- 建议：始终加上后缀。

### npm下载的第三方模块加载
#### 也是通过 require('模块名称') 来加载的
#### 第三方模块名称绝对不能与 核心模块重名，否则永远加载的都是核心模块
#### require('模块名称') 加载非核心模块的过程
- 通过 `console.log(module.paths);` 来查看

![require lookup modules](require-lookup-modules.jpg)



## require 加载模块时做了2件事
1. 执行了模块中的代码
2. 返回了模块中对外暴露的内容（可能是对象、函数等等）



## module.exports 和 exports
### 在每个模块中module表示当前模块对象, 里面保存了当前模块对象的各种信息
### module.exports 其实就是 require()加载模块时的返回值
### exports 就是module.exports的一个引用
```javascript
exports = module.exports;
```
### 特别注意：最终暴露给require的返回值的是：module.exports, 而不是exports
 ```javascript
  // To illustrate（说明） the behavior, imagine this hypothetical implementation of require(), which is quite similar to what is actually done by require():

  function require(...) {
  var module = { exports: {} };


  ((module, exports) => {
    // Your module code here. In this example, define a function.
    function some_func() {};
    exports = some_func;
    // At this point, exports is no longer a shortcut to module.exports, and
    // this module will still export an empty default object.
    module.exports = some_func;
    // At this point, the module will now export some_func, instead of the
    // default object.
  })(module, module.exports);

  
  return module.exports;
}
  ```









## 下载Node.js源码，打开看下


## JavaScript 的严格模式—— `"use strict";` 或 `'use strict';`
- 参考链接：
  1. http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
  2. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

