// TODO:
const net = require('net');

const socket = net.createConnection(
    {
        host: 'www.baidu.com', // 链接到的主机
        port: 80
    },
    () => {
        console.log('链接成功');
    }
);

// socket.write('你好！');
socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: keep-alive

`);

socket.on('data', (chunk) => {
    const response = chunk.toString('utf-8');
    // let res = paseHead(response);
    console.log(">>>>>>>读取到数据", response);

    // 关闭链接
    socket.end();
});

socket.on('close', () => {
    console.log('链接关闭');
});

// 将响应的字符串解析为响应头、体
function paseHead(response) {
    const index = response.indexOf('\n\r');

    const head = response.slice(0, index);
    const headParse = head.split('\r\n');
    const body = response.slice(index + 1);

    let heaArray = headParse.slice(1).map((el) => {
        return [el.split(': ')[0], el.split(': ')[1]];
    });

    const header = heaArray.reduce((prev, cur) => {
        prev[cur[0]] = cur[1];
        return prev;
    }, {});

    return {
        state: headParse.slice(0, 1)[0],
        header,
        body
    };
}
