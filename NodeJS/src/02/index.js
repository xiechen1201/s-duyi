/* console.log(global); */

/* const timer = setTimeout(() => {}, 1000);
console.log(timer);

console.log(__dirname); // /Users/xiechen/Documents/code-personal/duyi/NodeJS/src/02

console.log(__filename);

const buffer = Buffer.from('abcdefg', 'utf-8');
console.log(buffer);

console.log('当前命令行：', process.cwd()); */

// =================

/* setTimeout(() => {
  console.log('abc');
}, 1000);

// 不会输出信息，因为强制程序退出。
process.exit(); */

// =================

/* console.log(process.argv); */

/* [
    '/usr/local/bin/node', Node命令的绝对路径
    '/Users/xiechen/Documents/code-personal/duyi/NodeJS/src/02/index.js', 模块的绝对路径
    'test', 参数
    'a',
    'b',
    'c' 
] */

// ==========

console.log(process.platform); // darwin

// ====================

console.log(process.env);