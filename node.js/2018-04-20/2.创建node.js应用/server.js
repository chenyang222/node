
// 1.引入required模块(使用require指令来载入http模块,并将实例化的HTTP赋值给变量http)
var http = require("http");

// 2.创建服务器(使用http.createServer()方法创建服务器，并使用listen方法绑定8080端口)
http.createServer(function (request, response) {
    
    // 发送http头部
    // HTTP 状态值: 200: ok
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type':'text/plain'});

    // 发送响应数据 "Hello World"
    response.end("Hello World\n"); 

}).listen(8888)

