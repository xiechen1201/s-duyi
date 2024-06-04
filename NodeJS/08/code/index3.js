const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, './02.txt');

const ws = fs.createWriteStream(filename, {
    flags: 'a', // w覆盖文件 a追加文件
    encoding: 'utf-8', // 默认是 utf-8，如果是 null 需要写入 buffer
    highWaterMark: 10 // 每次最多写入的字节数
});

ws.on("open", () => {
    console.log("文件打开");
});

ws.on("close", () => {
    console.log("文件关闭");
})

ws.on("error", (err) => {
    console.log(err);
})
