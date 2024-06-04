/* const http = require('http');

const request = http.request('http://www.baidu.com', { methods: 'GET' }, (res) => {
    console.log(res);

    // 获取状态码
    console.log(res.statusCode);
    // 获取响应头
    console.log(res.headers);

    res.on('data', (chunk) => {
        console.log('>>>>>>>获取内容：', chunk.toString());
    });

    res.on('end', () => {
        console.log('响应结束');
    });
});

// request 是一个可写流
// 写入一些东西
request.write('');
// 表示消息体完毕
request.end(); */

// TODO:=================================================

/**
 * POST 示例
 */

/* const request = http.request('http://www.baidu.com', { methods: 'POST' }, (res) => {});
request.write('name=zhangsan&age=20');
request.end(); */

// TODO:=================================================

/**
 * 创建一个服务器
 */

const http = require('http');
const url = require('url');

const server = http.createServer({}, (req, res) => {
    // 请求内容
    console.log('有请求来了');
    console.log('请求地址', req.url);
    console.log(url.parse(req.url));
    req.on('data', (chunk) => {
        console.log('>>>>>>>获取内容：', chunk.toString());
    });
    // 响应内容
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('<h1>hello world</h1>');
    res.end();
});
server.listen(9527);

server.on('listening', function () {
    console.log('服务器启动成功，端口 9527');
});
