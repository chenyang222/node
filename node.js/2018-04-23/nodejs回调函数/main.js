/*
*

    node.js 回调函数

        Nodejs异步编程的直接体现就是回调函数。

        异步编程依赖于回调来实现，但不能说使用了回调后程序就异步化了

        回调函数在完成任务后就会被调用，Node使用了大量的回调函数，Node所有API都支持回调函数

        从以下两个实例可以了解到阻塞与非阻塞调用的不同，第一个在读取完文件后才会向下执行，第二个不需要等待文件读取，这样就可以在读取文件的时候执行

    下面的代码，大大提高了程序的性能。

        因此阻塞是按顺序执行的，非阻塞则不需要按照顺序来执行，所以如果需要处理回调函数的参数，就需要写在回调函数内。


*/

// 阻塞代码实例

    // var fs = require('fs');
    // 防止乱码
    // var iconv = require('iconv-lite')

    // var data = fs.readFileSync('input.txt');

    // console.log(iconv.decode(data, 'gbk'));

    // console.log('程序执行结束！')

// 非阻塞代码实例

    // var fs = require("fs");
    // var iconv = require('iconv-lite')

    // fs.readFile('input.txt', function (err, data) {
    //     if (err) return console.error(err);
    //     console.log(iconv.decode(data, 'gbk'));
    // });

    // console.log("程序执行结束!");

