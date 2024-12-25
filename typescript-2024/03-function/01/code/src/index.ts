/* 
    TS 函数的写法
*/

/* // 给函数的参数和返回值进行类型标注
// 函数声明
function add(a: number, b: number): number {
    return a + b;
}

// 函数的表达式
const add2 = function (a: number, b: number): number {
    return a + b;
};

// 箭头函数
const add3 = (a: number, b: number): number => {
    return a + b;
};

// 函数的类型可以自动进行推导
// 🤔 const add4: (a: number, b: number) => number
const add4 = (a: number, b: number) => {
    return a + b;
};
// 这样书写代码就更加的安全，不会出现类型错误
// 🤔 let num: number
let num = add4(1, 2); */

// =================================

/* // 函数的可选参数
function sendMessage(name: string, age?: number) {
    console.log(name, age);
}
sendMessage("张三", 18);
sendMessage("李四");
sendMessage(); // ❌ 应有 1-2 个参数，但获得 0 个

// 可选参数不能放在第一位
function sendMessage2(age?: number, name: string) {} // ❌ 必选参数不能位于可选参数后。

// 参数具有默认值的时候，参数是可选的参数
function sendMessage3(name: string, age: number = 18) {
    console.log(name, age);
}
sendMessage3("张三");
sendMessage3("李四", 20);

// 具有默认值的参数位置并不作要求
function sendMessage4(name: string, age: number = 18, gender: string = "男") {} */

// =================================

// arguments 的问题
/* function sum() {
    console.log(arguments);
    // 使用 arguments 的时候，reduce 得不到任何的类型提示
    return Array.from(arguments).reduce((pre, cur) => pre + cur, 0);
}
// sum 函数不接受任意数量的参数，违背了函数的要求
// 这个代码在 JS 中是不存在问题的
// @ts-ignore
sum(1, 2, 3, 4, 5); // ❌ 应有 0 个参数，但获得 5 个 */

// 需要使用剩余参数来替换 arguments
// 这样书写代码更加的安全
// 剩余参数和可选参数一样都需要放在最后面
/* function sum(...args: number[]) {
    console.log(args);
    return args.reduce((pre, cur) => pre + cur, 0);
}
sum(1, 2, 3, 4, 5); */

// 函数中的 this 的问题
/* function showDate() {
    // ❌ "this" 隐式具有类型 "any"，因为它没有类型注释
    return `${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`;
}
showDate.call(new Date()); */

/* 
    1、解决方案：noImplicitThis: false
    2、在一般的函数声明中，如果需要用到 this 需要进行类型标注，对象函数不需要
    const obj = {
        name: "张三",
        showName: function () {
            console.log(this.name);
        }
    };
*/

/* // 在 TS 中有一种处理，指明 this 的类型
function showDate(this: Date) {
    return `${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`;
}
showDate.call(new Date()); */

// .call .apply .bind 的类型检查问题
// 使用 strictBindCallApply: false 可以关闭这个
function showDate(this: Date) {
    return `${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`;
}
showDate.call(null); // ❌类型“null”的参数不能赋给类型“Date”的参数
showDate.apply(new RegExp()); // ❌类型“RegExp”的参数不能赋给类型“Date”的参数
