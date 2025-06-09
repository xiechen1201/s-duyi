const net = require("node:net");

const server = net.createServer((socket) => {
    console.log("收到客户端链接。");
    socket.once("data", (chunk) => {
        console.log(chunk.toString());

        const headers = Object.fromEntries(parts);
        const crypto = require("crypto");
        const hash = crypto.createHash("sha1");
        hash.update(
            headers["Sec-WebSocket-Key"] +
                "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
        );
        const key = hash.digest("base64");
        // 响应
        socket.write(`HTTP/1.1 101 Switching Protocols
        Upgrade: websocket
        Connection: Upgrade
        Sec-WebSocket-Accept: ${key}
        `);
    });
});

server.listen(3000);
