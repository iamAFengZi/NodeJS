// var http = require('http');

// var server = http.createServer(function (req, res) {


//   // res.writeHead(200, 'OK', {
//   //   'Content-Type': 'text/plain; charset=utf-8'
//   // });

//   // res.write('fdjskafdjskfds;fjds;');
//   // // res.write('fdsfdasfdasfdas');

  
  
//   // // res.write('fdsfdasfdasfdas');

//   // // res.end('hello world! 你好世界！');

  

//   // // res.end('dddd');

//   // res.end();


//   res.end();

//   res.writeHead(200, 'OK', {
//     'Content-Type': 'text/plain; charset=utf-8'
//   });



// });

// server.listen(9000, function () {
//   // arguments.length;
//   console.log('http://localhost:9000');
// });





var myObject = {
    foo: "bar",
    func: function () {

        var self = this;
        
        console.log("outer func: this.foo = " + this.foo); // bar
        console.log("outer func: self.foo = " + self.foo); // bar
        

        (function () {
            console.log(this);
            console.log("inner func: this.foo = " + this.foo); // undefined 
            console.log("inner func: self.foo = " + self.foo); // bar
        }());
    }
};


myObject.func();

setTimeout(function () {
  console.log('哈哈哈');
},3000);