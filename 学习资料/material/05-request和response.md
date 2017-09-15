

# request 对象 和 response对象



## request 对象

- request 对象类型 <http.IncomingMessage>, 继承自stream.Readable
- request 对象常用成员
  + `request.headers`
  + `request.rawHeaders`
  + `request.httpVersion`
  + `request.method`
  + `request.url`




## response 对象

- response 对象类型 <http.ServerResponse>

- response 对象常用成员
  + `response.writeHead(statusCode[, statusMessage][, headers])`
    1. This method must only be called once on a message and it must be called before response.end() is called.
    - 这个方法在每次请求响应前都必须被调用（只能调用一次）。并且必须在end()方法调用前调用


    2. If you call response.write() or response.end() before calling this, the implicit/mutable headers will be calculated and call this function for you.
    - 如果在调用writeHead()方法之前调用了write() 或 end()方法，系统会自动帮你调用writeHead()方法，并且会生成默认的响应头



    3. When headers have been set with response.setHeader(), they will be merged with any headers passed to response.writeHead(), with the headers passed to response.writeHead() given precedence.
    - 如果通过 res.setHeader() 也设置了响应头，那么系统会将serHeader()设置的响应头和writeHead()设置的响应头合并。 并且writeHead()的设置优先

```javascript
// 示例代码：
res.writeHead(200, 'OK', {
  'Content-Type': 'text/html; charset=utf-8',
  'Content-Length': Buffer.byteLength(msg)
});
```

  + `response.write(chunk[, encoding][, callback])`
    - 参数1：要写入的数据，可以是字符串或二进制数据，**必填**。
    - 参数2：编码，默认是utf8，选填。
    - 参数3：回调函数，选填。

  + `response.end([data][, encoding][, callback])`
    * 结束响应。
    * This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. ***The method, `response.end()`, MUST be called on each response***.
    - res.end()这个方法告诉服务器所有要发送的响应头和响应体都发送完毕了。可以人为这次响应结束了。
    - 同时每次响应都必须调用该方法，用来结束响应


    * 参数1：结束响应前要发送的数据，选填。
    * 参数2：编码，选填。
    * 参数3：回调函数，选填。

  + `response.setHeader(name, value)`
    * 设置响应报文头

  + `response.statusCode`
    * 设置或读取http响应码

  + `response.statusMessage`
    * 设置或读取http响应状态消息

