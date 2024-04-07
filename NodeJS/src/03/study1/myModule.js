console.log('当前模块的路径：', __dirname);
console.log('当前模块的文件：', __filename);

/* exports.c = 3;
module.exports = {
  a: 1,
  b: 2
};
this.m = 5;
// 返回 { a: 1, b: 2 } */

exports.c = 3;
exports.a = 1;
exports.b = 2;
this.m = 5;
// 返回 { c: 3, a: 1, b: 2, m: 5 } 
