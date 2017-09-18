
var querystring = require('querystring');

// 对外暴露一个函数
module.exports = function (req, res, next) {
  // body...

  var body = [];

  req.on('data', function (chunk) {
    body.push(chunk);
  });

  req.on('end', function () {
    body = Buffer.concat(body);
    body = querystring.parse(body.toString('utf8'));
    req.body = body;

    next();
  });
};