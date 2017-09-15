# express 介绍

- 什么是 express ？
  + 基于 Node.js 平台开发的 "web 开发框架" ，就是一个 node.js 模块
  + express的作用：它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
  + express 同时也是 Node.js 的一个模块

- 为什么学习 express 框架？
  + 为了让我们基于 Node.js 开发web应用程序更高效。



- express 官方网站
  + http://expressjs.com/
  + http://www.expressjs.com.cn/

- express 网站如何查阅？
  + 带领同学们一起看一下


# express 基本使用
  - 安装 express
    + npm 搜索，安装。按照文档一步一步进行
      1. 创建 package.json文件
      2. 安装 express 模块：`npm install express --save`

  - 演示 Hello World 案例
    + 在 express 中，request 对象 和 response 对象一样使用，同时这两个对象还额外添加了其他的好用功能
    + res.send() 是 res.end()的扩展
    + 步骤总结：
      1、加载 express 模块
      2、创建 express 实例（一般叫 app ）
      3、设计路由
      4、启动监听服务

  - 补充知识：
    + 路由：请求路径（URL） + 请求方法（post、get、......）
    + http 请求方法介绍：https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods


  - 使用 express 框架模拟 Apache 服务器处理静态资源
    + 主要使用到的方法`express.static('public')`
      - `express.static('public')`的返回值就是一个函数，这个函数的作用就是根据请求，读取静态资源文件并响应给用户
      - 注意：static() 方法参数路径要写 绝对路径，不要写相对路径。相对路径还是相对执行node命令的路径

    + 主要使用到的方法 `app.use()`
      - use()方法的参数1表示"虚拟路径"，参数2表示要开放的静态资源目录

    + 如何向客户端发送单个静态文件
      - res.sendFile() 方法

    + 托管静态资源时的两个注意点：

    ```javascript
    // 问题一(提问、演示)、
    app.use(express.static('./public'));
    app.use(express.static('./file'));

     // 问题二(提问、演示)、
    app.use('/aaa', express.static('./public'));
    app.use('/bbb', express.static('./public'));
    ```



# 带同学们看一下 express 文档中关于各种设置路由的方法


# 介绍一下 express 中的中间件
- 中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

- 常规中间件（应用级中间件）的回调函数，一般有3个参数
  + req, res, next
  + 其中next()是一个函数，通过这个函数把执行流程交给下一个中间件

- 可以挂在中间件的部分方法
  + app.use()
  + app.get()、app.post()、app.put()、app.delete()、...等各种请求方法
  + 注意：在挂载中间件时 next() 方法的重要性，不调用该方法无法执行到下一个中间件

- 中间件的应用场景
  - 利用中间件实现记录日志功能
  - 利用中间件模拟body-parser功能




# 介绍在 express 中如何使用模板引擎
  - 在 express 中, res对象是具有redner方法的，但是需要自己配置一个模板引擎
  - 在 express 中渲染单个文件，使用res.sendFile
  - res.render()要在设置好模板引擎后再使用


# ejs模板引擎介绍
- 打开 npm 搜索 ejs
- 打开 GitHub 的 ejs 地址，查看如何使用
- ejs 模板引擎介绍
- ejs使用
  + ejs.render(str, data, options);


# 在 express 中配置使用 ejs 模板引擎
- npm install ejs --save
- 通过 app.set('views', '路径');  和 app.set('view engine', '模板引擎名称');来配置模板引擎
- 配置好后就可以通过 res.render('a.ejs', {})来渲染模板了


# express 中的 request 对象的成员：
http://www.expressjs.com.cn/4x/api.html#req

# express 中的 response 对象的成员：
http://www.expressjs.com.cn/4x/api.html#res


# express 中的 '中间件' 含义。

# 模板引擎后缀替换
- app.engine('.ejs', require('ejs').renderFile)
- app.set('view engine', 'ejs')






# 通过使用 express 框架改造 Hacker News 网站
- 把 resources、views、list.json拷贝到该目录下，其他暂时不需要了
- 创建 app.js
- 创建 package.json
- 安装 express
- 提取 router.js 模块
- 拷贝 handler.js 模块
- handler.js 模块中获取 post 提交数据时，可以使用 body-parser 模块实现
  + npm 安装 body-parser
  + 在 express 中通过 app.use()挂载 body-parser 中间件，实现效果
- 在 express 中无需 url 模块，直接可以通过 req.query获取查询字符串对象




# 其他
1、ejs 模板引擎
- ejs模板引擎介绍
- 打开 npm 搜索 ejs
- 打开 GitHub 的 ejs 地址，查看如何使用
- 演示 ejs 模板引擎的使用


2、介绍在 express 中如何使用模板引擎
  - 在 express 中, res对象是具有redner方法的，但是需要自己配置一个模板引擎
  - 在 express 中渲染单个文件，使用res.sendFile
  - res.render()要在设置好模板引擎后再使用 
  - npm install ejs --save
- 通过 app.set('views', '路径');  和 app.set('view engine', '模板引擎名称');来配置模板引擎
- 配置好后就可以通过 res.render('a.ejs', {})来渲染模板了

3、模板引擎后缀替换、
- 设置后缀为 .ejs
  + app.engine('.ejs', require('ejs').renderFile)
  + app.set('view engine', 'ejs')

- 设置后缀为 .html
  + app.engine('.html', require('ejs').renderFile)
  + app.set('view engine', 'html')
  + 参考链接：https://cnodejs.org/topic/530318fa5366a72a2c070a5d
  + http://www.cnblogs.com/dubaokun/p/3446206.html
  + http://www.expressjs.com.cn/4x/api.html#app.engine

4、完成 hacker news 网站使用 express 改造



5、body-parser 使用
  + npm install
  + 在模块中 require('body-parser')
  + 在 express 中配置
  ```javascript
    // parse application/x-www-form-urlencoded 
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json 
    app.use(bodyParser.json())
  ```







  # 其他
  1. res.send() 方法
    - 参数可以是字符串、Buffer对象、数组（json对象）、普通对象
    - 通过调用该方法进行响应的时候，会自动添加一些响应头(Content-Type、Content-Length等)