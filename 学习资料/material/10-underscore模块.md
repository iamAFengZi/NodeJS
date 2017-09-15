# underscore模块介绍
- 官方文档：http://underscorejs.org/
- 中文文档：http://www.bootcss.com/p/underscore/


## 参考描述
```
1、Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. 

2、Underscore 是一个 JavaScript 工具库，它提供了一整套函数式编程的实用功能，但是没有扩展任何 JavaScript 内置对象。 他解决了这个问题：“如果我面对一个空白的 HTML 页面，并希望立即开始工作，我需要什么？” 他弥补了 jQuery 没有实现的功能，同时又是 Backbone 必不可少的部分。

Underscore 提供了100多个函数，包括常用的：map、filter、invoke — 当然还有更多专业的辅助函数，如：函数绑定、JavaScript 模板功能、创建快速索引、强类型相等测试等等。
```


## 模板语法介绍：
+ `<%= %>`, 中间写表达式
+ `<%%>`, 中间写语句


## 参考写法
- 提示：underscore库建议使用'_'来命名对象，类似于jQuery使用$来命名

```javascript

// 案例一：
var html = '<h1><%= name %></h1>';
var compiled = _.template(html);
var result = compiled({name: 'aaaa'});
console.log(compiled);



// 案例二：
// 构建模板字符串
var html = '<%for (var i = 0; i < 5; i++) { %><h1><%= name %></h1><% }%>';

// 编译模板
var compiled = _.template(html);

// 进行模板字符串替换
var result = compiled({name: '张三'});

// 输出后的结果
console.log(result);
```



## underscore中_.template()函数返回值其实就是一个函数：

```javascript
function(obj){
  var __t;
  var __p = '';
  var __j = Array.prototype.join,print = function () {
    __p += __j.call(arguments,'');
  };

  with(obj||{}) {
    __p += '<h1>' + ((__t = (name)) == null ? '' : __t) + '</h1>';
  }
  return __p;
}
```