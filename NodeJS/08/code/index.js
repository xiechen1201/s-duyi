const fs = require('fs');
const path = require('path');

// const filename = path.resolve(__dirname, './abc.txt');
// const filename = path.resolve(__dirname, './02.txt');
const filename = path.resolve(__dirname, './03.txt');
const rs = fs.createReadStream(filename, {
    encoding: 'utf-8',
    // start: 0,
    // end: 100,
    // 默认是64kb
    highWaterMark: 100,
    // 读取完后自动关闭，默认为 true
    autoClose: true
});

const ws = fs.createWriteStream(filename, {
    flags: 'a', // w覆盖文件 a追加文件
    encoding: 'utf-8', // 默认是 utf-8，如果是 null 需要写入 buffer
    highWaterMark: 2 // 每次最多写入的字节数
});

// ws.write('测试写入内容');

// 循环写入 10M 的数据
/* for (let i = 0; i < 1024 * 1024 * 10; i++) {
    ws.write('a');
} */

let i = 0;
function write() {
    let flag = true;
    while (i < 1024 * 1024 * 10 && flag) {
        flag = ws.write('a');
        i++;
    }
}

write();
ws.on('drain', write);
