
var http = require('http');

var server = http.createServer(function (req, res) {
  

  // -------------------- request -------------------------------
  // 获取请求的路径
  // req.url;

  // 获取请求报文头
  // console.log(req.headers); // 把请求报文头封装到一个 对象里面，方便使用
  // console.log(req.rawHeaders); // 把请求报文头放到一个数组里面（字符串数组）

  // 获取客户端使用的 http 版本
  // console.log(req.httpVersion);



  // 获取 http 请求的方法
  // console.log(req.method);







  // -------------------- response -------------------------------

  // 1. res.write();
  // res.write('fdsfdsfdsafs');


  // 2. res.end();
  // 参数可以是string 或 buffer
  // 每次用户请求必须调用一次 res.end()，并且一次请求只能调用一次 res.end();
  // 调用 res.end(), 表示告诉服务器，该响应的数据已经都发送了，可以考虑结束本次响应了。
  // res.end();

  // 3. res.setHeader();
  // 设置响应报文头
  // response.setHeader(name, value), 一次只能设置一个响应报文头
  // 这句话只是设置了响应报文头，并没有把响应报文头发送给客户端




  // 4. 向客户端发送 http 状态码 和 http 状态消息
  // 设置完毕后，这些状态码和状态消息还没发送给浏览器
  // res.statusCode = 404;
  // res.statusMessage = 'Not Found';

  // res.statusCode = 200;
  // res.statusMessage = 'OK';



  // 5. res.writeHead(); 
  // 向客户端发送响应报文头
  // 只有当调用 res.writeHead() 方法的时候，才会刚才设置的 http 响应报文头、状态码、状态消息都发送给浏览器（客户端）
  // res.writeHead() 方法，可以不手动调用。当第一次 res.write() 或 res.end() 的时候，系统会自动调用 res.writeHead() 方法
  // 与此同时，之前 res.statusCode; res.statusMessage; res.setHeader() 设置的值，都会在 res.writeHead() 时，使用。
  // res.writeHead() 方法必须在 res.write() 和 res.end() 之前调用
  res.writeHead(404, 'Not Found', {
    'Content-Type': 'text/plain;charset=utf-8'
  });




  res.end('over');
});


server.listen(8888, function () {
  console.log('http://localhost:8888');
});