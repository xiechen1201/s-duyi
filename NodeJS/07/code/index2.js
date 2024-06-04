const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './abc.txt');

const rs = fs.createReadStream(filename, { encoding: 'utf-8', highWaterMark: 10 });

rs.on('open', (data) => {
    console.log('文件被打开了', data);
});

rs.on('error', (data) => {
    console.log('文件读取出错', data);
});

rs.on("data", (data) => {
    console.log('读取到数据', data);
})

rs.on("end", (data) => {
    console.log('读取到数据结束', data);
})

rs.on('close', (data) => {
    console.log('文件被关闭了', data);
});

rs.pause();
rs.on("pause", (data) => {
    console.log('文件被暂停了', data);
})