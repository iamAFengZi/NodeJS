var http = require('http');
var path = require('path');
var fs = require('fs');
var mime = require('mime');

var server = http.createServer(function (req, res) {


    // 读取对应的文件
    fs.readFile(path.join(__dirname, 'public', req.url), function (err, data) {
      if (err) {
        res.end('404');
        return;
      } 

      res.setHeader('Content-Type', mime.lookup(req.url));
      res.end(data);
    });

  
  

});

server.listen(8000, function () {
  console.log('http://localhost:8000');
});