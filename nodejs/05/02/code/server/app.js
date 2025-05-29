const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app); // 创建 HTTP 服务
const wss = new WebSocket.Server({ server }); // 绑定到同一个 server 上

// WebSocket 连接处理
wss.on('connection', function connection(ws) {
  console.log('客户端已连接');

  ws.on('message', function incoming(message) {
    console.log('收到消息：%s', message);
    ws.send('你发的是：' + message);
  });

  ws.on('close', () => {
    console.log('客户端断开连接');
  });
});

app.get('/', (req, res) => {
  res.send('WebSocket server is running.');
});

server.listen(3000, () => {
  console.log('服务已启动：http://localhost:3000');
});
