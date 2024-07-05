/* const net = require('net');

const socket = net.createConnection(
    {
        host: 'www.baidu.com',
        port: 80
    },
    () => {
        console.log('链接成功');
    }
);

socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: keep-alive

`);

socket.on('data', (chunk) => {
    const response = chunk.toString('utf-8');
    console.log(">>>>>>>response_____", response);

    // 关闭链接
    // socket.end();
});

socket.on('close', () => {
    console.log('链接关闭');
}); */

// TODO:==================================
const net = require('net');
const fs = require('fs/promises');
const path = require('path');

const server = net.createServer();

server.listen(9527);

server.on('listening', () => {
    console.log('server is listening on port 9527');
});

// 有客户端已经链接到服务器
server.on('connection', (socket) => {
    socket.on('data', async (chunk) => {
        const bodyBuffer = await fs.readFile(
            path.resolve(__dirname, '../note/image.png')
        );
        const headBuffer = Buffer.from(
            `HTTP/1.1 200 OK
Content-Type: image/jpeg

`,
            'utf-8'
        );
        const result = Buffer.concat([headBuffer, bodyBuffer]);
        socket.write(result);
        socket.end();
    });

    /* console.log('有客户端链接到服务器~');
    console.log(socket);

    socket.on('data', (data) => {
        console.log('客户端发送的数据是：', data.toString());
        socket.write('您好！');
    });

    socket.on('close', () => {
        console.log('链接关闭了');
    }); */
});
