/* 
    ## 静态方法
*/

/* 
    - Array.of(...args) 使用指定的数组项创建一个数组
    - Array.from(arg) 通过给定的类数组或可迭代对象，创建一个新的数组
*/

/* const arr = Array.of(1, 2, 3, 4, 5);
console.log(arr); */

/* 
    new Array(1);
        如果参数是一个，且为数字，表示的是数组的长度为 1，而不是数组的元素。
    new Array(1, 2, 3);
        如果参数是多个，且为数字，表示的是数组的元素。

    Array.of() 无论参数的个数，参数的类型都是数组的元素。
*/

/* let arr1 = Array.from(document.querySelectorAll('*')); */
/* console.log(arr1); */

/* 
    document.querySelectorAll('*') 不是数组，但是又像一个数组，不能使用 Array 的原型方法

    之前需要使用 Array.prototype.slice.call(document.querySelectorAll('*')); 转化为数组。
*/

// TODO:==========================================

/* 
    ## 实例方法
*/

/* 
    - find(callback) 用于查找满足条件的第一个元素
    - findIndex(callback) 用于查找满足条件的第一个元素的索引
    - fill(data) 用指定的数据填充数组
    - copyWithin(target [, start] [, end]) 在当前数组内部，将指定位置的成员复制到其他位置，返回当前数组
    - includes(data) 判断数组是否包含某个值，返回布尔值，使用 Object.is() 匹配
    - flat(depth) 将多维数组转为一维数组
    - flatMap(callback) 将数组的每个元素都使用指定的回调函数处理，然后将结果组成一个新数组返回
*/

/* const personList = [
  { name: '张三', age: 18 },
  { name: '李四', age: 20 },
  { name: '王五', age: 22 },
  { name: '赵六', age: 24 },
  { name: '孙七', age: 26 }
];

let data = personList.find((el) => el.name === '李四');
let index = personList.findIndex((el) => el.name === '李四');
console.log(data, index); */

/* const arr = new Array(10);
arr.fill("abc");
console.log(arr); */

/* const arr = [1, 2, 3, 4, 5, 6];

// 从下标2开始，改变数组的数据，数据来自于下标0位置开始
// arr.copyWithin(2);
// console.log(arr); // [1, 2, 1, 2, 3, 4]

// 从下标 2 开始，数据来自于下标 1 开始
// arr.copyWithin(2, 1);
// console.log(arr)

// 从下标 2 开始，数据来自于下标 1 开始，到下标 3 结束
arr.copyWithin(2, 1, 3);
console.log(arr) */

/* const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(3)); // true */