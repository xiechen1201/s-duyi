/* const text = 'Hello, World!!!';
const reg = /W\w+/;
const reg1 = /W\w+/y;

console.log(reg.test(text)); // true

console.log(reg1.lastIndex);
// 加上 y 标记后，就类似于要求在 lastIndex 就必须要满足正则，类似于 ^W\w+
console.log(reg1.test(text)); // false

reg1.lastIndex = 7;
console.log(reg1.test(text)); // true
 */