/* 
    ## Set 集合
*/

/* 
    一直以来，JS 只能使用数组和对象来保存多个数据，缺乏像其他语言那样拥有丰富的集合类型。因此，ES6 新增了两种集合类型，set 和 map，用于在不用的场景中发挥作用。

    Set 用于存放不重复的数据
*/

/* 
    1、创建 Set 集合
*/

/* const s = new Set(); // 创建一个空的 Set 集合
console.log(s);

// 接收一个可迭代对象 
const s1 = new Set([1, 2, 3, 4, 5]); // 创建一个具有初始化内容的 set 集合，内容来自于可迭代对象每一次迭代的结果
console.log(s1);

// 可以自动去重
const s2 = new Set([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(s2);

// 传递的是字符串，会被转化为 String 对象，String 对象也是可迭代对象
const s3 = new Set('hello');
console.log(s3); */

/* 
    2、Set 集合的方法

    add(value) 向集合的末尾添加元素，如果数据已存在则不进行任何操作
        如何判断数据是否重复？使用 Object.is() 方法来判断两个数据是否相同，但是针对 +0 和 -0 认为是相等的，针对对象判断是是对象的内存地址是否一致。
        
    has(value) 判断集合中是否存在某个元素，返回布尔值

    delete(value) 删除集合中的匹配的元素，返回布尔值，表示删除是否成功

    clear() 清空集合中的所有元素

    size 属性，获取 Set 集合中的元素数量，是一个只读的！
*/

/* const s = new Set([1, 2, 3]);
s.add(4); // 添加元素
s.add(+0);
s.add(-0);

console.log(s.has(1));

console.log(s.delete(1));

console.log(s.clear())

console.log(s); */

/* 
    3、如何和数组进行相互转化
*/

/* let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let s = new Set(arr);
// set 本身也是一个可迭代对象，每次迭代的结果就是每一项的值
arr = [...s];
console.log(arr); */

/* // 字符串去重
let str = 'hello';
str = [...new Set(str)].join('');
console.log(str) */

/* 
    4、Set 集合的遍历

    1）for...for
    2）forEach
        Set 集合不存在下标！下标是数组的专有属性。
        回调函数的 index 不是下标！是为了保持 forEach 的格式统一，仍然提供了第二个参数，但和第一个参数的内容是一致的，均为 set 元素。
*/

/* const s = new Set([1, 2, 3, 4, 5]);

for (const element of s) {
  console.log(element);
}

s.forEach((value, key, set) => {
  console.log(value, key, set);
}); */
