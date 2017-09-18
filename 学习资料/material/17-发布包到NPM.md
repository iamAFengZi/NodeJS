
# 发布包到 npm



1. 在 npm 网站注册账号.

2. 在本地命令行窗口通过执行 `npm login` 或 `npm adduser` 实现将账号与本地 npm 关联
  - `npm login` is an alias to `npm adduser` and behaves exactly the same way.

3. 创建本地包文件夹
  - 创建入口文件 app.js 或 index.js 等
  - 通过 `npm init` 初始化 package.json 文件

4. 执行 `npm publish` 命令发布

5. 更新
  - 必须更新版本号
    + 手动更新 package.json 中的版本号
    + npm version patch 自动增加最后一位




# 参考链接
1. https://docs.npmjs.com/getting-started/publishing-npm-packages




