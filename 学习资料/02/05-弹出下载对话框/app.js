
var http = require('http');

var server = http.createServer(function (req, res) {
  // body...

  // 在响应之前，告诉浏览器，这个数据是要作为文件下载的
  // 通过设置响应报文头实现
  res.setHeader('Content-Type', 'application/octet-stream');
  
  res.setHeader('Content-Disposition', 'attachment; filename=demo.txt');

  // 向客户端响应数据
  res.end('Hello China!');
});

server.listen(8000, function () {
  console.log('http://localhost:8000');
});