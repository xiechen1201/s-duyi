/* let num = 10;

function add(a: number, b: number): number {
    return a + b;
}

export { num, add }; */

// 不需要给一个具体的值
/* declare let num: number;
console.log(num); */

/* // 如果把 declare 写在 type.d.ts 文件中，那么在 index.ts 中就可以直接使用 num 了
console.log(num);
console.log(str);
console.log(str2);

power(100);

// 可以把 type.d.ts 想想成为 node_modules/package 中的文件，具体的实现是包内实现的。
// 如果 type.d.ts 内部没有模块化的关键字则认为这个文件是全局的，不需要进行导入就可以使用

const add: AddNumber = (a: number, b: number) => {
    return a + b;
}; */

// ===========================================

import lodash from "lodash";