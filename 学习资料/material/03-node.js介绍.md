

# node.js 介绍

### node.js 是什么？

1. node.js 是一个开发平台，就像Java开发平台、.Net开发平台、PHP开发平台、Apple开发平台一样。
  - 何为开发平台？有对应的编程语言、有语言运行时、有能实现特定功能的API（SDK：Software Development Kit）
2. 该平台使用的编程语言是 JavaScript 语言。 
3. node.js 平台是基于 Chrome V8 JavaScript 引擎构建。
4. 基于 node.js 可以开发控制台程序（命令行程序、CLI程序）、桌面应用程序（GUI）（借助 node-webkit、electron 等框架实现）、Web 应用程序（网站）

LAMP - Linux Apache MySQL PHP

MEAN - MongoDB Express Angular Node.js


### node.js 有哪些特点？

1. 事件驱动
2. 非阻塞 I/O 模型（当执行I/O操作时，不会阻塞线程）
3. 单线程
4. 拥有世界最大的开源库生态系统 —— npm。


### node.js 官方网站

1. [node.js官方网站](https://nodejs.org/)
2. [node.js中文网](http://nodejs.cn/)



### node.js 学习资源

1. 图书
  + 《深入浅出Node.js》 作者：朴灵
  + 《node.js 实战 中国程序员6》

2. 网站资源
  + [CNODE社区](https://cnodejs.org/) 
  + [Node.js 简易教程](http://www.runoob.com/nodejs/nodejs-tutorial.html)
  + [Node入门](https://www.nodebeginner.org/index-zh-cn.html)
  + [Node.js包教不包会](https://github.com/ppker/node-lessons)
  + [CNODE-新手入门](http://cnodejs.org/getstart)
  + 其他参考链接
    - [Node.js 究竟是什么？](https://www.ibm.com/developerworks/cn/opensource/os-nodejs/index.html)
    - [Node.js是用来做什么的？](https://www.zhihu.com/question/33578075)
    - [什么是 node.js](http://www.infoq.com/cn/articles/what-is-nodejs)

3. Node.js 使用场景 & 实战
  - [Node.js雪球实战半年谈](http://www.undozen.com/slides/xueqiu2012a/#21.1)
  - [雪球上的 Node.js](http://mengxy.net/slides/nodejs-at-xueqiu/)
  - [国内有哪些网站使用了 Node.js](https://cnodejs.org/topic/50613e6601d0b8014822b6b9)
  - [Node.js & Uber](https://www.joyent.com/blog/node-js-office-hours-curtis-chambers-uber)
  - [Node.js 的优势和劣势](https://www.zhihu.com/question/19653241)
  - [node.js的15个应用场景](http://www.devstore.cn/essay/essayInfo/2199.html)
  - [How to decide when to use Node.js?](https://github.com/simongong/js-stackoverflow-highest-votes/blob/master/questions1-10/when-to-use-nodejs.md)
  - [优缺点及适用场景讨论](http://www.cnblogs.com/sysuys/p/3460614.html)
  - [Node.js 发展前景如何？适用于哪些场景？](https://www.zhihu.com/question/19587881)
  - [Node.js企业开发 一应用场景](http://n.thepana.com/2014/01/06/node-yingyong-changjing/)
  - [10个最佳Node.js企业应用案例：从Uber到LinkedIn](http://www.sohu.com/a/150175393_465223)
  - [极速Node.js：来自LinkedIn的10个性能提升秘籍](http://blog.jobbole.com/40135/)
  - 为分布式应用做中转
  - 前后端团队融合，节省成本
  - Node.js 简单高效
  - Node.js 是给前端用的，后端复杂的业务逻辑肯定不会用 Node.js



### 为什么要学习Node.js?

1. 通过学习Node.js开发深入理解**服务器开发**、**Web请求和响应过程**、 **了解服务器端如何与客户端配合**
2. 现在前端工程师面试，对 Node.js 开发有要求
3. 补充提问：
  - 在Node.js平台开发时，能使用Dom API吗？比如：`document.getElementById('id'); window.location 等`?
4. 复习 浏览器端 JavaScript 组成：ECMAscript、Dom、Bom




### Node.js安装和配置

1. 下载地址
  + [当前版本](https://nodejs.org/en/download/)
  + [历史版本](https://nodejs.org/en/download/releases/)

2. 官网术语解释
  + LTS 版本：Long-term Support 版本，长期支持版，即稳定版。
  + Current 版本：Latest Features 版本，最新版本，新特性会在该版本中最先加入。

3. 注意：
  + 安装完毕后通过命令：`node -v`来确定是否安装成功【注意：打开"命令窗口"的时候建议使用"管理员方式"打开】
  + 如果需要则配置环境变量。

![配置环境变量](imgs/env_path.png)




### Node.js 开发 Web 应用程序 和 PHP、Java、ASP.Net等传统模式开发Web应用程序区别

1. **传统模式**
  - 有 Web 容器

![有Web容器开发模型](imgs/Web.png)


2. **Node.js开发Web应用程序**
  - 没有 Web 容器

![Node.js无Web容器开发模型](imgs/nodeWeb.png) 

3. 补充提问：
- 什么是动态网页？什么是静态网页？



