const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, './abc.txt');
const rs = fs.createReadStream(filename, {
    encoding: 'utf-8',
    // start: 0,
    // end: 100,
    // 默认是64kb
    highWaterMark: 100,
    // 读取完后自动关闭，默认为 true
    autoClose: true
});

// console.log(fs);

rs.on('open', () => {
    console.log('文件打开了');
});

rs.on('error', () => {    
    console.log('文件读取出错');
});

// 手动执行关闭文件
// rs.close();

rs.on('close', () => {
    console.log('文件关闭时触发');
});

// 读取到一部分数据后触发，只有注册时事件后才开始真正的读取
rs.on('data', (data) => {
    console.log('数据读取：', data);
});

rs.on("end",()=>{
    console.log("全部数据读取完成")
})
