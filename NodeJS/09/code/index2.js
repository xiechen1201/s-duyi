const net = require('node:net');

const server = net.createServer();

server.listen(9527);

server.on('listening', () => {
    console.log('server is listening on port 9527');
});

// 有客户端已经链接到服务器
server.on('connection', (socket) => {
    console.log('有客户端链接到服务器~');
    console.log(socket);

    socket.on("data", (data) => {
        console.log('客户端发送的数据是：', data.toString());

        socket.write("您好！")
    })

    socket.on('close', () => {
        console.log('链接关闭了');
    })
});
