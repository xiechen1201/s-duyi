const fs = require('fs');
const path = require('path');

// 拿到一个绝对路径
const filename = path.resolve(__dirname, './demo.txt');

/*
// 无配置的写法
// 相对路径是相对于路径提示符
fs.readFile(filename, (error, data) => {
    // 返回一个 buffer
    console.log(data);
    // 转化为字符串
    console.log(data.toString('utf-8'));
});

// 有配置的写法
fs.readFile(filename, 'utf-8', (error, data) => {
    console.log(data);
});

// 对象的方式
fs.readFile(filename, { encoding: 'utf-8' }, (error, data) => {
    console.log(data);
});

// 同步的写法
let res = fs.readFileSync(filename, 'utf-8');
console.log(res);

// Promise 的写法
fs.promises.readFile(filename, 'utf-8').then(res=>{
    console.log(res);
}) */

// TODO:
/* fs.writeFileSync(filename, 'hello world');
fs.writeFileSync(filename, '\nskjajsa', {
    flag: 'a' // 追加内容，而不是覆盖内容
});
console.log('写入成功！'); */

// TODO:
// 手动复制案例
/* const filename = path.resolve(__dirname, './iShot_2024-05-17_11.20.33.png');
const toFilename = path.resolve(__dirname, './copy.png');

fs.readFile(filename, (error, data) => {
    fs.writeFile(toFilename, data, (error) => {
        console.log('写入成功！');
    })
}); */

// TODO:
/* fs.stat(filename, (error, stats) => {
    console.log(stats);
}); */

// TODO:
/* fs.readdir(path.resolve(__dirname, './'), (error, files) => {
    console.log(files);
}) */

// TODO:
/* fs.mkdir(path.resolve(__dirname, './testMkDir'), (error) => {
    console.log('创建成功！');
}); */

// TODO:
// console.log(process.env.NODE_ENV);
