/* 
    剩余参数会引发一个问题
*/

/* // 获取指定长度的随机数数组
function getRandomNumbers(len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(Math.random());
    }
    return arr;
}

// 求和
function sum(...args) {
    // args [[xxx, xxx, xxx, ...]]
    let num = 0;
    for (let i = 0; i < args.length; i++) {
        num += args[i];
    }
    return num;
}

let nums = getRandomNumbers(10);
// 传递的实参和形参参数了冲突
let all = sum(nums);

console.log(nums);
console.log(all); */

/* 
    如何把数组进行展开？
    将数组的每一项进行展开，依次作为参数进行传递，而不是将整个数组作为参数进行传递！

    对数组进行展开，对对象进行展开
    ...arr
    ...obj

    和剩余参数类似，但是使用的场景不一样！
*/

/* let nums = getRandomNumbers(10);
// 对 nums 数组进行展开，相当于传递了 10 个参数
let all = sum(...nums);
// 可以继续传递其他的参数
let all2 = sum(...nums, 10, 20, 30); */

/* // 复制数组
const arr1 = [3, 5, 6, 7, 8];
const arr2 = arr1; */

// 使用拓展运算符复制的数组和原数组不是同一个堆内存地址，而是一个独立的新数组
/* const arr1 = [3, 5, 6, 7, 8];
const arr2 = [...arr1]; */

/* 
    拓展运算符可以用来复制对象
*/

/* let obj1 = {
    name: 'zs',
    age: 18,
    sex: '男'
};

let obj2 = {
    ...obj1
};

// 修改 obj2 的属性，不会影响 obj1 的属性
obj2.name = 'ls';

console.log(obj1); */

/* // 可以覆盖之前的属性
let obj1 = {
    name: 'zs',
    age: 18,
    sex: '男'
};

let obj2 = {
    ...obj1,
    name: 'ls'
};
console.log(obj2); */

/* 
    注意！
    这是一种浅拷贝！
*/

/* let obj1 = {
    name: 'zs',
    age: 18,
    sex: '男',
    hobby: ['篮球', '足球', '乒乓球']
};

let obj2 = {
    ...obj1
};
obj2.hobby.push('台球');

console.log(obj1);
console.log(obj2);
console.log(obj1.hobby === obj2.hobby); // true */

// 相当于是
/* let obj2 = {
    name: obj1.name,
    age: obj1.age,
    sex: obj1.sex,
    hobby: obj1.hobby
}; */

// 手动进行深克隆
/* let obj1 = {
    name: 'zs',
    age: 18,
    sex: '男',
    hobby: ['篮球', '足球', '乒乓球']
};

let obj2 = {
    ...obj1,
    hobby: [...obj1.hobby]
};
obj2.hobby.push('台球');

console.log(obj1);
console.log(obj2);
console.log(obj1.hobby === obj2.hobby); // false */
