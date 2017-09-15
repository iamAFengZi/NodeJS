# url模块介绍 


## get请求时，用户请求的参数是在request的url属性中，纯字符串，使用起来并不方便

## url模块可以更方便地解析用户请求的get参数

## 具体使用
1. 加载模块 `var url = require('url');`
2. 调用`parse()`方法解析
```javascript
url.parse(urlString[, parseQueryString[, slashesDenoteHost]]);
var urlObj = url.parse(reqUrl, true);

// url对象的pathname属性，获取不包含查询字符串的url
// url对象的query属性中包含的就是请求字符串的键值对对象
```