

# 自己设计路由实现 Hacker News 网站部分功能

参考网址：https://news.ycombinator.com/




## 步骤
1. 实现新闻列表页 - 首页 - /index  get 
2. 实现新闻详情页 - 详情页 - /details get
3. 实现新闻添加页 - 提交页 - /submit get
/add get
/add post

4. 实现保存数据功能 - 将数据写入到 data.json 文件中
5. 实现首页数据的动态加载 - 根据.json文件来加载数据




## 实现思路

### 规划项目目录结构

- HackerNews
  + resources
    - css
    - images
  + views（存放html模板页面）
  + data（保存新闻数据 data.json 文件）
  + app.js 文件（该文件即我们写服务器端JavaScript代码的地方，用来处理用户请求）
  + package.json


### 路由设计

1. 注意：此处要自己设计路由，而不是像模拟 Apache 静态资源服务器一样
 

#### 根据不同的请求返回相应的功能
1. 当请求 `/` 和 `/index` 时，返回 `views/index.html` 文件内容
2. 当请求 `/details` 时，返回 `views/details.html` 文件内容
3. 当请求 `/submit` 时，返回 `views/submit.html` 文件内容
4. 当请求 `/add` 时，保存用户提交的新闻数据，并将重定向到index页面。
5. 对于其他以'/resources'开头的都当做静态资源来处理。



### 知识点
1. 封装`render()`函数，将`render()`函数挂载到`response`对象上，实现`response.render()`效果。
2. 使用`underscore`模块中的模板引擎功能，渲染`index`页面中的新闻数据。
3. 通过 url 模块来处理 get 请求

```javascript
// 1. 将 req.url 通过 url 模块来处理
  var urlObj = url.parse(req.url, true);

  // 1.1 获取用户请求的URL，不带查询字符串
  // 注意：此时的reqUrl中不包含 get 的请求参数，只是pathname
  var reqUrl = urlObj.pathname.toLowerCase();

  // urlObj.query

```
4. 服务器端接收 post 提交过来的数据
5. 通过 querystring 模块将查询字符串转换为 json 对象
 


## JSON在线格式化
[JSON在线格式化](http://tool.oschina.net/codeformat/json)




