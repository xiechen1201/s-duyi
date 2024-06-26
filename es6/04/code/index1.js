/* 
    ES6 之前求和
*/
/* function sum(args) {
    // 该用数组的方式进行求和
    // 导致使用者调用的时候不是很方便
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); */

/* function sum() {
    let num = 0;
    for (let i = 0; i < arguments.length; i++) {
        num += arguments[i];
    }
    return num;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); */

/* 
    这样的方式不太好，因为 arguments 的缺陷：
    1、如果和形参配合使用，容易导致混乱
    2、从语义上来说，使用 arguments 获取参数，由于形参的缺失无法从函数定义上理解函数的真实意图（最严重）！

    ES6 的剩余参数专门用于收集末尾的所有参数，将其放置在一个形参中数组中
*/

/* function sum(...args) {
    // args 收集了所有的参数，形成了一个数组
    let num = 0;
    for (let i = 0; i < args.length; i++) {
        num += args[i];
    }
    return num;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); */

/* 
    剩余参数使用的细节：
    1、一个函数只能出现一个剩余参数
    2、一个函数如果有剩余参数，则必须书写在形参的最后
*/

/* // Rest parameter must be last formal parameter
function sum(...args, ...args1){} */

/* function sum(a, b, c, ...args) {}
// Rest parameter must be last formal parameter
function sum1(a, b, ...args, c) {} */
