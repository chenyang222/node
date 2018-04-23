/*

    node.js事件循环

        Node.js 是单进程单线程应用程序，但是通过事件和回调函数支持开发，所以性能很高。

        Node.js 的每一个API都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发。

        Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现。

        Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。

        事件驱动程序

            Node.js 使用事件驱动模型，当web server接受到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

            当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。

            这个模型非常高效可扩展性非常强，因为web server一直接受请求而不等待任何读写操作，（这也被称之为非阻塞式IO或者事件驱动IO）

            在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。

            整个事件驱动的流程就是这么实现的，有点类似于观察者模式，事件相当于一个主题，而所有注册到这个事件上的处理函数相当于观察者。

            Nodejs有多个内置的事件，我们可以通过引入events模块，并通过实例化EventEmitter类来绑定和监听事件。



*/

// 实例

    // 引入events模块
    // var events = require('events');

    // 创建 eventEmitter 对象
    // var eventEmitter = new events.EventEmitter();

    // 创建事件处理程序
    // var connectHandler = function connected(){
        // console.log('连接成功')

        // 触发data_received事件
        // eventEmitter.emit('data_received')
    // }

    // 绑定 connection 事件处理程序
    // eventEmitter.on('connection',connectHandler);

    // 使用匿名函数绑定 data_received 事件
    // eventEmitter.on('data_received',function(){
        // console.log('数据接收成功')
    // })

    // 触发 connection 事件
    // eventEmitter.emit('connection');

    // console.log('程序执行完毕')


/*

    Node 应用程序是如何工作的

        在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数。回调函数接收错误对象作为第一个参数。

        

*/

    var fs = require("fs");
    var iconv = require('iconv-lite')

    fs.readFile('input.txt', function (err, data) {
        if (err){
            console.log(err.stack);
            return;
        }
        console.log(iconv.decode(data, 'gbk'));
    });

    console.log("程序执行结束!");

    // 以上程序中 fs.readFile() 是异步函数用于读取文件。 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。

    // 如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。   