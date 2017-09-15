


# package.json 文件




## package.json 文件的作用？

1. package.json 文件是一个包说明文件（项目描述文件），用来管理组织一个包（一个项目）
2. package.json 文件是一个 json 格式的文件
3. 位于当前项目的根目录下

元数据


## package.json 文件中常见的项有哪些？
+ name
  - 包的名字
+ version
  - 包的版本
+ description
  - 包描述
+ author
  - 包的作者
+ main
  - 包的入口js文件，从main字段这里指定的那个js文件开始执行
+ dependencies
  - 当前包依赖的其他包


## 如何创建一个 package.json 文件
1. 通过 `npm init` 命令 或者 `npm init -y` 或 `npm init -yes`  命令
2. 手动创建一个



### 注意
1. 通过 `npm init -y` 或 `npm init -yes` 创建 package.json 文件时，执行命令所在的目录接名称中不能包含大写字母
2. package.json 文件中，项目名称本身不能包含大写字母
3. npm 更新新版本后，项目所在的文件夹如果包含中文等特殊字符，创建的时候不会提示一步一步的输入，直接报错。



## 官方介绍
1. [package.json](https://docs.npmjs.com/files/package.json)
2. [Using a package.json](https://docs.npmjs.com/getting-started/using-a-package.json)
